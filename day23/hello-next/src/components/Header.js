"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header style={{ background: "green", padding: "20px" }}>
      <h1>Header</h1>
      <nav>
        <ul>
          <li>
            <Link className={pathname === "/" ? "active" : ""} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className={pathname === "/about" ? "active" : ""}
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={pathname === "/register" ? "active" : ""}
              href="/register"
            >
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
