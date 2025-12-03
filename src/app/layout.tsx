import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { DotPattern } from "@/components/ui/dot-pattern";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pav Khemerak",
  description: "A showcase of my projects and skills.",
  creator: "Pav Khemerak",
  keywords: ["portfolio", "projects", "skills", "next.js", "tailwind css", "frontend"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <DotPattern
            className="fixed top-0 left-0 w-full h-full -z-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
          />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
