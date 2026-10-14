"use client";

import { useEffect, useState } from "react";

export default function OrderCount() {
  const [count, setCount] = useState<number | null>(null);
  useEffect(() => {
    fetch("/api/account")
      .then((r) => r.json())
      .then((d) => setCount(d.orders.length));
  }, []);
  if (count === null) return null;
  return <p>You have ordered with us {count} times. Welcome back.</p>;
}
