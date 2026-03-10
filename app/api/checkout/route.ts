import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const stripe = getStripe();
    const body = await req.json();
    const { successUrl, cancelUrl } = body;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: 2900, // $29.00 in cents
            product_data: {
              name: "OpenClaw Agent Blueprint",
              description: "Complete multi-agent architecture blueprint with Genesis Agent, Registry, Scheduler, Dispatcher, and more.",
            },
          },
        },
      ],
      success_url: successUrl || `${process.env.NEXT_PUBLIC_SITE_URL}/?success=true`,
      cancel_url: cancelUrl || `${process.env.NEXT_PUBLIC_SITE_URL}/?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
