"use client";
import { useEffect, useState } from "react";

export function Snackbar({ message, duration = 3000 } : { message: string; duration?: number }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-cp-mantle px-5 py-3 text-cp-text shadow-lg text-center">
      {message}
    </div>
  );
}