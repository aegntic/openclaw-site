import { SectionHeading } from "@/components/section-heading";

const concepts = [
  ["Registry", "The source of truth for what exists, what it can do, what state it is in, and how it can be reached."],
  ["Dispatcher", "The routing layer that decides who should take a task based on contract, lifecycle, policy, and health."],
  ["Scheduler", "The system clock that wakes dormant specialists on time without bloating the operator."],
  ["Genesis", "The birth pipeline that templates, validates, and registers new agent species."],
  ["Artifact", "A named output with lineage, owner, type, and trace ID so work becomes inspectable instead of dissolving into chat."],
  ["Evaluator", "The scoring layer that decides whether work is accepted, retried, escalated, or quarantined."],
  ["Lifecycle", "The state machine that moves agents through draft, validated, active, dormant, degraded, quarantined, and retired."],
  ["Shadow mode", "A safe way to compare an improved agent against the current one without immediately replacing the production route."]
] as const;

export default function DocsConceptsPage() {
  return (
    <>
      <SectionHeading
        eyebrow="Concepts"
        title="The language of the organism"
        text="A good concept page lets a new reader stop drowning in jargon and start seeing the shape of the system."
      />
      <div className="card-grid">
        {concepts.map(([title, copy]) => (
          <article key={title} className="feature-card">
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </>
  );
}
