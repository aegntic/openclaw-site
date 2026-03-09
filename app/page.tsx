import Link from "next/link";
import { FlowMap } from "@/components/flow-map";
import { SectionHeading } from "@/components/section-heading";
import { WaitlistForm } from "@/components/waitlist-form";
import {
  beginnerSteps,
  faqs,
  heroMetrics,
  pillars,
  platformCards,
  site,
  useCases
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Agent infrastructure, made legible</span>
            <h1>
              Build agent systems that stay coherent when the workload gets real.
            </h1>
            <p className="lead">
              OpenClaw is the operating model for teams who are done pretending one swollen prompt can govern an entire agent civilization.
              It turns runtime chaos into a readable organism: constitutional agents, a real registry, clean scheduling, routeable work,
              and observable artifacts.
            </p>
            <div className="hero-actions">
              <Link className="button primary" href="/docs/new-here">
                Start from zero
              </Link>
              <Link className="button ghost" href="/architecture">
                See the architecture
              </Link>
            </div>
            <p className="muted small">
              Deploy to GitHub + Netlify or Cloudflare. Add Supabase when you are ready for real lead capture, auth, storage, and data.
            </p>
          </div>
          <div className="hero-aside">
            <div className="panel">
              <SectionHeading
                eyebrow="Operating thesis"
                title="A calm operator. Dormant specialists. Traceable work."
                text="The site, the docs, and the backend entry points all orbit the same story so a brand-new visitor can understand the model without already living inside your head."
              />
              <div className="metrics-grid">
                {heroMetrics.map((item) => (
                  <div key={item.label} className="metric">
                    <strong>{item.value}</strong>
                    <span className="muted small">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="panel">
              <SectionHeading
                eyebrow="Why this site hits harder"
                title="It sells the organism, not just a bundle of features."
                text="Homepage, docs, pricing, architecture, and contact all reinforce the same mental model: bounded sovereign processes with identity, law, memory, lifecycle, and discoverability."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Four pillars"
            title="The website mirrors the OpenClaw runtime itself."
            text="What visitors see matches how the system is actually designed to work. That is what makes the marketing feel credible instead of ornamental."
          />
          <div className="card-grid">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="feature-card">
                <h3>{pillar.title}</h3>
                <p>{pillar.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="System map"
            title="One screen. The whole organism."
            text="The visual rhythm below gives a newcomer an instant frame for the product: intention enters, governance resolves, specialists act, artifacts emerge, and evaluators keep the organism honest."
          />
          <FlowMap />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Product surface"
            title="Everything a serious front door needs."
            text="This build gives you the pages and pathways most projects spend months stitching together after the fact."
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
      </section>

      <section className="section">
        <div className="container two-column">
          <div>
            <SectionHeading
              eyebrow="Built for"
              title="People shipping real systems, not toy demos."
              text="The copy and structure are tuned for founders, infra teams, and technical decision makers who need a site that feels both visionary and operationally grounded."
            />
            <div className="use-case-grid">
              {useCases.map((item) => (
                <article key={item.title} className="use-case-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Brand-new user path"
              title="The first five minutes are designed on purpose."
              text="Instead of overwhelming people with ontology, the docs lead with the cleanest possible mental model and a single breathing vertical slice."
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
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Questions people ask before they trust you"
            title="FAQs that do actual conversion work."
            text="Good technical sites answer the deployment, clarity, and onboarding questions before a human ever books a call."
          />
          <div className="faq-grid">
            {faqs.map((item) => (
              <article key={item.q} className="faq-card">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="waitlist">
        <div className="container two-column">
          <div>
            <SectionHeading
              eyebrow="Launch CTA"
              title="Capture demand before the runtime is fully mythic."
              text="This form is already wired for Supabase, but still preview-friendly when you are sharing a demo build or running without backend credentials."
            />
            <div className="notice">
              Push this repo to GitHub, wire your environment variables, and you have a serious product front door that can deploy to Netlify or Cloudflare in one move.
            </div>
            <p className="muted small" style={{ marginTop: "1rem" }}>
              GitHub repo placeholder: <a className="inline-link" href={site.github}>{site.github}</a>
            </p>
          </div>
          <div className="contact-panel">
            <h3>Join the OpenClaw waitlist</h3>
            <p>
              Tell the site what you are building, what is currently failing, and where you need the system to stop acting like mush.
            </p>
            <WaitlistForm />
          </div>
        </div>
      </section>
    </>
  );
}
