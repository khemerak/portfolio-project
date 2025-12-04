// src/components/Footer.tsx
import Link from 'next/link';
import { FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-background/50 backdrop-blur-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Khemerak Pav. All rights reserved.
        </p>
        <Link href="#hero" className="text-muted-foreground hover:text-foreground">
          <FaArrowUp />
        </Link>
      </div>
    </footer>
  );
}
