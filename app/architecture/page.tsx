import { FlowMap } from "@/components/flow-map";
import { SectionHeading } from "@/components/section-heading";
import { architecturePlanes } from "@/lib/site";

export default function ArchitecturePage() {
  return (
    <div className="page-hero">
      <div className="container">
        <SectionHeading
          eyebrow="Architecture"
          title="A civilization of narrow agents with a shared constitution"
          text="This page turns the underlying system into a narrative an investor, engineer, or design partner can all follow. It is the part of the site that proves the homepage is not bluffing."
        />
        <FlowMap />
      </div>

      <section className="section">
        <div className="container">
          <div className="check-grid">
            {architecturePlanes.map((plane) => (
              <article key={plane.plane} className="architecture-plane">
                <span className="eyebrow">{plane.plane}</span>
                <h3>{plane.plane}</h3>
                <ul className="list">
                  {plane.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <div className="panel">
            <SectionHeading
              eyebrow="What visitors learn"
              title="Why your main operator should be calm, not overloaded"
              text="The architecture story makes a specific argument: strategy, time, routing, memory, and execution should not all be trapped inside one overworked loop."
            />
            <ul className="list">
              <li>Registry replaces hidden memory with discoverable truth.</li>
              <li>Scheduler wakes dormant specialists without polluting the operator.</li>
              <li>Dispatcher resolves work by contract, lifecycle, and health.</li>
              <li>Artifacts, evaluators, and repair loops keep outputs legible.</li>
            </ul>
          </div>
          <div className="panel">
            <SectionHeading
              eyebrow="What that means commercially"
              title="The website sells reliability before the runtime is fully scaled"
              text="For serious buyers, the architecture page is where trust forms. It shows the project knows what problem it is solving and how the organism is meant to grow."
            />
            <ul className="list">
              <li>Better narrative for technical diligence.</li>
              <li>Cleaner bridge between docs and sales motion.</li>
              <li>Stronger positioning against vague agent platforms.</li>
              <li>More useful for newcomers because the mental model is explicit.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
