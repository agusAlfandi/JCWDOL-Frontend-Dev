"use client";

import { useEffect, useState } from "react";

export default function ThemeToogle() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const curretTheme = localStorage.getItem("theme");
    setTheme(curretTheme || "light");
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else if (theme === "dark") {
      document.documentElement.classList.add("dark");

      localStorage.setItem("theme", "dark");
    }
  }, [theme]);

  return (
    <>
      <button
        className="fixed top-0 right-16 bottom-0 m-auto h-fit w-fit"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? "☀️" : "🌙"}
      </button>
    </>
  );
}
