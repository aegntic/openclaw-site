import Link from "next/link";
import { docsLinks } from "@/lib/navigation";

export function DocsNav() {
  return (
    <aside className="docs-sidebar">
      <p className="docs-sidebar-label">Docs</p>
      <nav className="docs-sidebar-links">
        {docsLinks.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
