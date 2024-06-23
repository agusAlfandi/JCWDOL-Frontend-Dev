"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFound() {
  const router = useRouter();
  const [time, setTime] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        clearInterval(timer);
        router.back();
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);
  return <h1>Remaining time {time}</h1>;
}
