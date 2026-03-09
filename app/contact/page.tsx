import { SectionHeading } from "@/components/section-heading";
import { WaitlistForm } from "@/components/waitlist-form";

export default function ContactPage() {
  return (
    <div className="page-hero">
      <div className="container two-column">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Request a walkthrough, partnership call, or architecture review"
            text="Use this page as your high-signal conversion surface. It is set up to capture structured demand, not just anonymous email scraps."
          />
          <div className="check-grid">
            <article className="check-item">
              <h3>For founders</h3>
              <p className="muted">
                Shape the story, the front door, and the onboarding path before the backend is fully mythic.
              </p>
            </article>
            <article className="check-item">
              <h3>For teams</h3>
              <p className="muted">
                Translate a complex internal architecture into a public-facing narrative that still feels true.
              </p>
            </article>
          </div>
        </div>
        <div className="contact-panel">
          <h3>Tell us where the current system breaks</h3>
          <p>
            The more precise your signal, the more useful the next conversation becomes.
          </p>
          <WaitlistForm />
        </div>
      </div>
    </div>
  );
}
