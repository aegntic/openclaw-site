"use client";

import { useEffect, useState } from "react";
import { CheckoutModal } from "@/components/checkout-modal";

export function GlobalCheckout() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpenCheckout = () => setIsOpen(true);

    window.addEventListener("openCheckout", handleOpenCheckout);
    return () => window.removeEventListener("openCheckout", handleOpenCheckout);
  }, []);

  return (
    <CheckoutModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
  );
}
