import Link from "next/link";
import { navLinks } from "@/lib/navigation";

export function Header() {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link href="/" className="brand-mark" aria-label="OpenClaw home">
          <span className="brand-dot" />
          <span>OpenClaw</span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <a className="button ghost" href="#waitlist">Join waitlist</a>
          <Link className="button primary" href="/docs/new-here">
            Start here
          </Link>
        </div>
      </div>
    </header>
  );
}
