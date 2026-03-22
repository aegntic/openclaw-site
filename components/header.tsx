"use client";

import Link from "next/link";

export function Header() {
  const handleOpenCheckout = () => {
    window.dispatchEvent(new Event("openCheckout"));
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
        <button className="btn btn-primary" type="button" onClick={handleOpenCheckout}>
          Get the Blueprint
        </button>
      </div>
    </div>
  );
}
