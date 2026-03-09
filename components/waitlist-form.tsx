"use client";

import { FormEvent, useState } from "react";

type FormState = {
  type: "idle" | "success" | "error";
  message: string;
};

const initialState: FormState = { type: "idle", message: "" };

export function WaitlistForm() {
  const [state, setState] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (String(formData.get("website") || "").length > 0) {
      return;
    }

    setLoading(true);
    setState(initialState);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      stage: String(formData.get("stage") || "").trim(),
      useCase: String(formData.get("useCase") || "").trim(),
      message: String(formData.get("message") || "").trim()
    };

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Something drifted sideways.");
      }

      form.reset();
      const message =
        data.mode === "demo"
          ? "Demo mode accepted your request. Connect Supabase to store it for real."
          : "You are in. We captured your request and can now route it cleanly.";

      setState({ type: "success", message });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to submit right now.";
      setState({ type: "error", message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="waitlist-form" onSubmit={handleSubmit}>
      <div className="form-grid two-up">
        <label>
          <span>Name</span>
          <input name="name" type="text" placeholder="Mattae Cooper" />
        </label>
        <label>
          <span>Email *</span>
          <input name="email" type="email" placeholder="you@company.com" required />
        </label>
      </div>
      <div className="form-grid two-up">
        <label>
          <span>Company</span>
          <input name="company" type="text" placeholder="AEGNTIC" />
        </label>
        <label>
          <span>Stage</span>
          <select name="stage" defaultValue="">
            <option value="" disabled>
              Choose one
            </option>
            <option value="idea">Idea</option>
            <option value="prototype">Prototype</option>
            <option value="internal rollout">Internal rollout</option>
            <option value="enterprise">Enterprise</option>
          </select>
        </label>
      </div>
      <label>
        <span>Use case</span>
        <input
          name="useCase"
          type="text"
          placeholder="Multi-agent platform, governance layer, internal AI ops, developer tooling"
        />
      </label>
      <label>
        <span>What are you trying to build?</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us what breaks today, what has to be reliable, and where your current agent stack turns to mush."
        />
      </label>
      <input type="text" name="website" className="honeypot" tabIndex={-1} autoComplete="off" />
      <div className="form-actions">
        <button className="button primary" type="submit" disabled={loading}>
          {loading ? "Routing request…" : "Join the waitlist"}
        </button>
        <p className="muted small">
          Supabase-ready storage with graceful demo mode when backend env vars are missing.
        </p>
      </div>
      {state.type !== "idle" ? (
        <p className={state.type === "success" ? "form-success" : "form-error"}>{state.message}</p>
      ) : null}
    </form>
  );
}
