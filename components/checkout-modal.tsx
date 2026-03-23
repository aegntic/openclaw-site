"use client";

import { useEffect, useState } from "react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [newsletter, setNewsletter] = useState(true);
  const paymentLink = process.env.NEXT_PUBLIC_STRIPE_STUDIO_PAYMENT_LINK;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleCheckout = async () => {
    if (paymentLink) {
      window.location.href = paymentLink;
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }
    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }
    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          plan: "studio",
          email: email.trim(),
          name: name.trim(),
          newsletter,
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || "Failed to start checkout");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="modal-header">
          <h2>Complete Your Purchase</h2>
          <p className="modal-subtitle">OpenClaw Agent Blueprint</p>
        </div>

        <div className="modal-body">
          <div className="checkout-item">
            <div className="checkout-item-info">
              <span className="checkout-item-name">Core Blueprint Pack</span>
              <span className="checkout-item-desc">Digital download, instant access</span>
            </div>
            <div className="checkout-item-price">$29</div>
          </div>

          <div className="checkout-divider" />

          <div className="checkout-form">
            <label className="checkout-label">
              <span>Email address</span>
              <input
                type="email"
                className="checkout-input"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </label>

            <label className="checkout-label">
              <span>Full name</span>
              <input
                type="text"
                className="checkout-input"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
              />
            </label>

            <label className="checkout-checkbox">
              <input
                type="checkbox"
                checked={newsletter}
                onChange={(e) => setNewsletter(e.target.checked)}
                disabled={loading}
              />
              <span>Send me updates on new agent architecture patterns</span>
            </label>
          </div>

          <div className="checkout-divider" />

          <div className="checkout-total">
            <span>Total</span>
            <span className="checkout-total-price">$29</span>
          </div>

          <div className="checkout-features">
            <div className="checkout-feature">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span>One-time payment, no subscription</span>
            </div>
            <div className="checkout-feature">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span>Instant delivery via email</span>
            </div>
            <div className="checkout-feature">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span>Secure payment via Stripe</span>
            </div>
          </div>

          {error && <div className="checkout-error">{error}</div>}

          <button
            className="btn btn-primary checkout-btn"
            onClick={handleCheckout}
            disabled={loading}
          >
            {loading ? "Processing..." : "Continue to Payment"}
          </button>

          <p className="checkout-secure">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
            Secured by Stripe
          </p>
        </div>
      </div>
    </div>
  );
}
