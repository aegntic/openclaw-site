import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-hero">
      <div className="container panel">
        <span className="eyebrow">404</span>
        <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>This route slipped out of the organism.</h1>
        <p className="lead">The page you asked for does not exist. Head back to the front door and pick a clean path.</p>
        <Link className="button primary" href="/">
          Return home
        </Link>
      </div>
    </div>
  );
}
