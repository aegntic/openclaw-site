"use client";

import { useState } from "react";

interface CheckoutButtonProps {
  priceId: string;
  label: string;
  variant?: "primary" | "secondary";
}

export function CheckoutButton({ priceId, label, variant = "primary" }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Failed to start checkout");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Failed to start checkout");
    } finally {
      setLoading(false);
    }
  };

  const baseStyles = "px-6 py-2 rounded-lg font-medium transition-all";
  const variantStyles = variant === "primary"
    ? "bg-emerald-500 hover:bg-emerald-600 text-white"
    : "border border-emerald-500 text-emerald-500 hover:bg-emerald-50";

  return (
    <button
      onClick={handleCheckout}
      disabled={loading || !priceId}
      className={`${baseStyles} ${variantStyles} disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {loading ? "Processing..." : label}
    </button>
  );
}
