import Link from "next/link";

export default function Menu({ className }) {
  return (
    <div className={`${className} flex items-center justify-center gap-4`}>
      <nav>
        <ul className="flex gap-4">
          {[
            ["🏠", "/"],
            ["Kitchen Tips", "#"],
            ["Cuisines", "#"],
            ["About Us", "#"],
          ].map((menu) => (
            <li>
              <Link
                href={menu[1]}
                className="rounded-full border-2 border-black px-6 py-2 dark:border-white"
              >
                {menu[0]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
