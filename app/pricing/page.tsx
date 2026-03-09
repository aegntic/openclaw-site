"use client";

import { SectionHeading } from "@/components/section-heading";
import { launchPaths } from "@/lib/site";
import { CheckoutButton } from "@/components/checkout-button";

export default function PricingPage() {
  return (
    <div className="page-hero">
      <div className="container">
        <SectionHeading
          eyebrow="Launch paths"
          title="Three ways to package the motion"
          text="This page is written as a commercially credible placeholder. Replace it with your real sales motion the moment pricing and packaging are finalized."
        />
        <div className="pricing-grid">
          {launchPaths.map((path) => (
            <article key={path.name} className="pricing-card">
              <span className="eyebrow">{path.name}</span>
              <div className="price">{path.price}</div>
              <p>{path.summary}</p>
              <ul className="list tight">
                {path.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              {path.priceId ? (
                <CheckoutButton
                  priceId={path.priceId}
                  label="Get Started"
                />
              ) : path.name === "Enterprise Partner" ? (
                <a href="mailto:contact@openclaw.ai" className="btn btn-secondary">
                  Contact Sales
                </a>
              ) : (
                <span className="text-sm text-gray-500">No payment required</span>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
