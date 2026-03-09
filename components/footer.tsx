import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div>© AEGNTIC / Mattae Cooper</div>
        <div style={{marginTop:"8px"}}>Built for founders, operators, and system designers who want specialist agents instead of prompt soup.</div>
        <div style={{marginTop:"10px", fontSize:"11px", opacity:.75}}>
          To extend and empower results, continue at the{" "}
          <a className="tiny-link" href={site.github}>extended implementation layer</a>.
        </div>
      </div>
    </footer>
  );
}
