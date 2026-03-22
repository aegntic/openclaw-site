"use client";

export const dynamic = "force-dynamic";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { SectionHeading } from "@/components/section-heading";
import { launchPaths } from "@/lib/site";

export default function PricingPage() {
  return (
    <Suspense fallback={<div className="page-hero"><div className="container" /></div>}>
      <PricingContent />
    </Suspense>
  );
}

function PricingContent() {
  const searchParams = useSearchParams();
  const success = searchParams.get("success");
  const canceled = searchParams.get("canceled");
  const openCheckout = () => {
    window.dispatchEvent(new Event("openCheckout"));
  };

  return (
    <div className="page-hero">
      <div className="container">
        {success && (
          <div className="form-success" style={{ padding: '1rem', marginBottom: '1.5rem', background: 'rgba(167,255,216,0.1)', borderRadius: '8px' }}>
            <p style={{ margin: 0, fontWeight: 500 }}>Thanks! Your payment was successful.</p>
            <p style={{ margin: '0.25rem 0 0', opacity: 0.8, fontSize: '0.875rem' }}>Check your email for confirmation.</p>
          </div>
        )}
        {canceled && (
          <div style={{ padding: '1rem', marginBottom: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
            <p style={{ margin: 0, color: 'var(--muted)' }}>Checkout was canceled. No charge was made.</p>
          </div>
        )}
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
              {path.name === "Studio" ? (
                <button className="btn btn-primary" type="button" onClick={openCheckout}>
                  Buy the blueprint
                </button>
              ) : path.name === "Enterprise Partner" ? (
                <a href="mailto:contact@openclaw.ai?subject=Enterprise%20Partner%20Inquiry" className="btn btn-secondary">
                  Contact Sales
                </a>
              ) : (
                <span style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>No payment required</span>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
