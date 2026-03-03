"use client";

import { useEffect, useState } from "react";

interface CountdownOverlayProps {
  onFinish: () => void;
  seconds?: number;
}

export default function CountdownOverlay({
  onFinish,
  seconds = 3,
}: CountdownOverlayProps) {
  const [count, setCount] = useState(seconds);

  useEffect(() => {
    if (count === 0) {
      onFinish();
      return;
    }

    const timer = setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, onFinish]);

  if (count === 0) return null;

  return (
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-50">
      <div key={count} className="cute-text text-9xl text-white animate-boop">
        {count}
      </div>
    </div>
  );
}