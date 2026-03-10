import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { successUrl, cancelUrl } = body;

    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecretKey) {
      return NextResponse.json({ error: "Stripe key not configured" }, { status: 500 });
    }

    // Create checkout session using Stripe API directly
    const sessionData = {
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: 2900,
            product_data: {
              name: "OpenClaw Agent Blueprint",
              description: "Complete multi-agent architecture blueprint",
            },
          },
        },
      ],
      success_url: successUrl || `${process.env.NEXT_PUBLIC_SITE_URL}/?success=true`,
      cancel_url: cancelUrl || `${process.env.NEXT_PUBLIC_SITE_URL}/?canceled=true`,
    };

    const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${stripeSecretKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: objectToFormData(sessionData),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Stripe error:", error);
      return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
    }

    const session = await response.json();
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}

function objectToFormData(obj: Record<string, unknown>, prefix = ""): string {
  const pairs: string[] = [];

  for (const [key, value] of Object.entries(obj)) {
    const formKey = prefix ? `${prefix}[${key}]` : key;

    if (value === null || value === undefined) continue;

    if (Array.isArray(value)) {
      value.forEach((item, index) => {
        if (typeof item === "object" && item !== null) {
          pairs.push(objectToFormData(item, `${formKey}[${index}]`));
        } else {
          pairs.push(`${formKey}[${index}]=${encodeURIComponent(String(item))}`);
        }
      });
    } else if (typeof value === "object" && value !== null) {
      pairs.push(objectToFormData(value as Record<string, unknown>, formKey));
    } else {
      pairs.push(`${formKey}=${encodeURIComponent(String(value))}`);
    }
  }

  return pairs.join("&");
}
