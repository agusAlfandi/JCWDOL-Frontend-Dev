import { Inter } from "next/font/google";
import "./globals.css";
import ThemeToogle from "@/components/ThemeToogle";
import Logo from "@/components/Logo";
import Menu from "@/components/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Full Bally App",
  description: "Fullfill your bally",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-black`}>
        <header className="mx-auto max-w-screen-xl p-6">
          <div className="hidden xl:block">
            <Logo className={"text-5xl"} />
            <h2 className="mt-4 text-center text-2xl uppercase leading-none">
              Fullfill
              <br />
              <span className="font-extralight">your</span> belly
            </h2>
            <Menu className={"mt-8"} />
          </div>
          <div className="items-center justify-between md:flex xl:hidden">
            <Logo className={"text-2xl"} />
            <Menu className={"mt-0"} />
          </div>
        </header>
        <main>{children}</main>
        <ThemeToogle />
        <footer>Full Bally</footer>
      </body>
    </html>
  );
}
