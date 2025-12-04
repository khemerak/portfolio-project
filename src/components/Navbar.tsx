// src/components/Navbar.tsx
'use client';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/50 backdrop-blur-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-foreground font-bold text-xl">
          PRINZE
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="#hero"
            className="text-muted-foreground hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-muted-foreground hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="#skills"
            className="text-muted-foreground hover:text-foreground"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="text-muted-foreground hover:text-foreground"
          >
            Projects
          </Link>
          <Link
            href="#education"
            className="text-muted-foreground hover:text-foreground"
          >
            Education
          </Link>
          <Link
            href="#contact"
            className="text-muted-foreground hover:text-foreground"
          >
            Contact
          </Link>
          <ThemeToggle />
        </div>
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button onClick={toggleMenu} className="text-foreground">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col space-y-4">
            <Link
              href="#hero"
              className="text-muted-foreground hover:text-foreground"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-muted-foreground hover:text-foreground"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-muted-foreground hover:text-foreground"
              onClick={toggleMenu}
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-muted-foreground hover:text-foreground"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              href="#education"
              className="text-muted-foreground hover:text-foreground"
              onClick={toggleMenu}
            >
              Education
            </Link>
            <Link
              href="#contact"
              className="text-muted-foreground hover:text-foreground"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
