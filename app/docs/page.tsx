import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";

const cards = [
  {
    title: "New Here",
    copy: "The shortest path from zero context to a clean mental model.",
    href: "/docs/new-here"
  },
  {
    title: "Getting Started",
    copy: "Install path, environment variables, deploy flow, and first launch sequence.",
    href: "/docs/getting-started"
  },
  {
    title: "Concepts",
    copy: "The language of the organism: registry, scheduler, dispatcher, lifecycle, artifact, evaluator, genesis.",
    href: "/docs/concepts"
  }
] as const;

export default function DocsHomePage() {
  return (
    <>
      <SectionHeading
        eyebrow="Docs"
        title="A docs surface that works for actual humans"
        text="The docs are not an afterthought. They are part of the product story, the onboarding path, and the conversion surface."
      />
      <div className="docs-card-grid">
        {cards.map((card) => (
          <article key={card.href} className="docs-card">
            <span className="eyebrow">Entry point</span>
            <h3>{card.title}</h3>
            <p>{card.copy}</p>
            <Link href={card.href} className="button ghost">
              Open page
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
