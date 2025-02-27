"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname(); // Get the current route

  return (
    <nav className="bg-gray-900 text-white p-4">
      <ul className="flex space-x-4">
        <li className={pathname === "/" ? "font-bold" : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={pathname === "/about" ? "font-bold" : ""}>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
