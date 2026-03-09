"use client";

interface CheckoutButtonProps {
  label: string;
  variant?: "primary" | "secondary";
}

export function CheckoutButton({ label, variant = "primary" }: CheckoutButtonProps) {
  const paymentLink = process.env.NEXT_PUBLIC_STRIPE_STUDIO_PAYMENT_LINK;

  const handleCheckout = () => {
    if (paymentLink) {
      window.location.href = paymentLink;
    }
  };

  const baseStyles = "px-6 py-2 rounded-lg font-medium transition-all";
  const variantStyles = variant === "primary"
    ? "bg-emerald-500 hover:bg-emerald-600 text-white"
    : "border border-emerald-500 text-emerald-500 hover:bg-emerald-50";

  return (
    <button
      onClick={handleCheckout}
      disabled={!paymentLink}
      className={`${baseStyles} ${variantStyles} disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {label}
    </button>
  );
}
