"use client";

import Link from "next/link";

export function Header() {
  const handleCheckout = () => {
    window.dispatchEvent(new CustomEvent("openCheckout"));
  };

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
        <button className="btn btn-primary" onClick={handleCheckout}>Get the Blueprint</button>
      </div>
    </div>
  );
}
