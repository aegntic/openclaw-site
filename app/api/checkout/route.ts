import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, name, newsletter, successUrl, cancelUrl } = body;

    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecretKey) {
      return NextResponse.json({ error: "Stripe key not configured" }, { status: 500 });
    }

    // Log customer data for CRM/newsletter purposes
    console.log("Checkout initiated:", {
      email,
      name,
      newsletter,
      timestamp: new Date().toISOString(),
    });

    // Build form data for Stripe
    const formData: string[] = [
      "mode=payment",
      "payment_method_types[]=card",
      "line_items[0][quantity]=1",
      "line_items[0][price_data][currency]=usd",
      "line_items[0][price_data][unit_amount]=2900",
      "line_items[0][price_data][product_data][name]=OpenClaw Agent Blueprint",
      "line_items[0][price_data][product_data][description]=Complete multi-agent architecture blueprint",
      `success_url=${encodeURIComponent(successUrl || `${process.env.NEXT_PUBLIC_SITE_URL}/?success=true`)}`,
      `cancel_url=${encodeURIComponent(cancelUrl || `${process.env.NEXT_PUBLIC_SITE_URL}/?canceled=true`)}`,
    ];

    // Add customer email and name if provided (pre-fills Stripe checkout)
    if (email) {
      formData.push(`customer_email=${encodeURIComponent(email)}`);
    }
    if (name) {
      formData.push(`customer_name=${encodeURIComponent(name)}`);
    }

    // Add metadata for tracking
    formData.push(`metadata[newsletter]=${newsletter ? "true" : "false"}`);
    formData.push(`metadata[source]=openclaw-site`);

    const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${stripeSecretKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.join("&"),
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
