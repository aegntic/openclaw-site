import { SectionHeading } from "@/components/section-heading";
import { beginnerSteps } from "@/lib/site";

export default function DocsNewHerePage() {
  return (
    <>
      <SectionHeading
        eyebrow="New Here"
        title="The five-minute path to understanding OpenClaw"
        text="This page exists for people who have never built a multi-agent system, never heard the internal vocabulary, and still need to leave with a useful mental model."
      />
      <div className="path-grid">
        {beginnerSteps.map((step) => (
          <article key={step.step} className="step-card">
            <strong>{step.step}</strong>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
      <div className="panel" style={{ marginTop: "1rem" }}>
        <h3>First useful frame</h3>
        <p className="muted">
          OpenClaw is not a single smart assistant. It is an ecosystem where different entities handle governance, time, routing, execution, evaluation, and repair. That split is why the system can stay understandable as it scales.
        </p>
      </div>
    </>
  );
}
