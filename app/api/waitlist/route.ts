import { NextRequest, NextResponse } from "next/server";
import { createSupabaseAdmin } from "@/lib/supabase-admin";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = String(body.email || "").trim().toLowerCase();
    const name = String(body.name || "").trim();
    const company = String(body.company || "").trim();
    const stage = String(body.stage || "").trim();
    const use_case = String(body.useCase || "").trim();
    const message = String(body.message || "").trim();

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
    }

    const supabase = createSupabaseAdmin();

    if (!supabase) {
      return NextResponse.json({ ok: true, mode: "demo" }, { status: 202 });
    }

    const { error } = await supabase.from("waitlist_signups").upsert(
      {
        email,
        name,
        company,
        stage,
        use_case,
        message,
        source: "website"
      },
      { onConflict: "email" }
    );

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, mode: "supabase" });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
