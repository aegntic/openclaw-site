import Link from "next/link";

export function Header() {
  return (
    <div className="nav">
      <div className="wrap nav-inner">
        <Link className="brand" href="/">AEGNTIC / OpenClaw Blueprint</Link>
        <div className="nav-links">
          <Link href="#free">Free Alpha</Link>
          <Link href="#inside">What You Get</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#faq">FAQ</Link>
        </div>
        <a className="btn btn-primary" href="https://buy.stripe.com/test_bJebJ199R3rgguR9I9abK00">Get the Blueprint</a>
      </div>
    </div>
  );
}
