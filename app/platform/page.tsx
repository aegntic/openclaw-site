import { SectionHeading } from "@/components/section-heading";
import { pillars, platformCards } from "@/lib/site";

export default function PlatformPage() {
  return (
    <div className="page-hero">
      <div className="container">
        <SectionHeading
          eyebrow="Platform"
          title="The product surface behind the front door"
          text="OpenClaw works because each layer has a role. The site explains those roles in language that is credible to technical buyers and still intelligible to people who are just arriving."
        />
        <div className="card-grid">
          {platformCards.map((card) => (
            <article key={card.title} className="feature-card">
              <span className="eyebrow">{card.eyebrow}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Why it is different"
            title="Most agent products market vibes. This one markets structure."
            text="That is the conversion edge: the positioning is bold, but every claim maps to an operational layer or a real artifact in the runtime story."
          />
          <div className="principle-grid">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="feature-card">
                <h3>{pillar.title}</h3>
                <p>{pillar.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
