import Link from "next/link";
import { navLinks } from "@/lib/navigation";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand-mark footer-brand">
            <span className="brand-dot" />
            <span>OpenClaw</span>
          </div>
          <p className="muted footer-copy">
            Agent infrastructure for people who want legibility, not sludge.
          </p>
        </div>
        <div>
          <p className="footer-heading">Explore</p>
          <div className="footer-links">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="footer-heading">Open source</p>
          <div className="footer-links">
            <a href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <Link href="/docs/getting-started">Quickstart</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
