import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-200 bg-background">
      <Link href="/" className="text-2xl font-bold">
        Javaro
      </Link>

      <div className="flex items-center gap-4">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
