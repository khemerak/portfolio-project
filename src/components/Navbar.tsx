// src/components/Navbar.tsx
import Link from 'next/link';
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background/50 backdrop-blur-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-foreground font-bold text-xl">
          My Portfolio
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="#hero" className="text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <Link href="#about" className="text-muted-foreground hover:text-foreground">
            About
          </Link>
          <Link href="#skills" className="text-muted-foreground hover:text-foreground">
            Skills
          </Link>
          <Link href="#projects" className="text-muted-foreground hover:text-foreground">
            Projects
          </Link>
          <Link href="#education" className="text-muted-foreground hover:text-foreground">
            Education
          </Link>
          <Link href="#contact" className="text-muted-foreground hover:text-foreground">
            Contact
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
