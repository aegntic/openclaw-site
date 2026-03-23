import { NextRequest, NextResponse } from "next/server";
import { getStripeInstance } from "@/lib/stripe";

const ALLOWED_PLANS: Record<string, string> = {
  studio: process.env.NEXT_PUBLIC_STRIPE_STUDIO_PRICE_ID || "",
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { priceId, plan, successUrl, cancelUrl, email, name, newsletter } = body;

    if (plan && plan in ALLOWED_PLANS) {
      const validPriceId = ALLOWED_PLANS[plan];
      if (!validPriceId) {
        return NextResponse.json(
          { error: "Plan not configured for checkout" },
          { status: 400 }
        );
      }
    } else if (priceId) {
      const isAllowed = Object.values(ALLOWED_PLANS).includes(priceId);
      if (!isAllowed) {
        return NextResponse.json(
          { error: "Invalid price ID" },
          { status: 400 }
        );
      }
    } else {
      return NextResponse.json(
        { error: "priceId or plan is required" },
        { status: 400 }
      );
    }

    const validPriceId = priceId || ALLOWED_PLANS[plan];

    let stripe;
    try {
      stripe = getStripeInstance();
    } catch {
      return NextResponse.json(
        { error: "Checkout is not configured yet" },
        { status: 503 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      customer_email: typeof email === "string" ? email : undefined,
      line_items: [
        {
          price: validPriceId,
          quantity: 1,
        },
      ],
      metadata: {
        name: typeof name === "string" ? name : "",
        newsletter: newsletter ? "true" : "false",
      },
      success_url: successUrl || `${request.nextUrl.origin}/pricing?success=true`,
      cancel_url: cancelUrl || `${request.nextUrl.origin}/pricing?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
