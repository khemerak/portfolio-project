// src/components/Hero.tsx
"use client";

import { useState, useEffect } from "react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { useTheme } from "next-themes";

export default function Hero() {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="text-center py-20 px-4" id='hero'>
      {/* Profile Picture Placeholder */}
      <div className="mx-auto rounded-full bg-muted w-32 h-32 flex items-center justify-center mb-6">
        <span className="text-5xl text-muted-foreground">👤</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
        Khemerak Pav
      </h1>
      <p className="text-lg md:text-2xl text-muted-foreground mb-8">
        IT Support Intern & Computer Science Graduate
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        {isMounted ? (
          <>
            <a href="#contact">
              <ShimmerButton
                className="shadow-2xl w-full md:w-48 h-12 mt-[1px]"
                shimmerColor={theme === "dark" ? "#ffffff" : "#000000"}
                shimmerSize="0.1em"
                background={theme === "dark" ? "#000000" : "#ffffff"}
              >
                <span className={theme === "dark" ? "text-white" : "text-black"}>
                  Get in Touch
                </span>
              </ShimmerButton>
            </a>
            <a href="/resume.pdf" download>
              <RainbowButton className="w-full md:w-48 h-12 mt-[1px] rounded-full ">
                Download Resume
              </RainbowButton>
            </a>
          </>
        ) : (
          <>
            <div className="w-full md:w-48 h-12 bg-muted rounded-full"></div>
            <div className="w-full md:w-48 h-12 bg-muted rounded-full"></div>
          </>
        )}
      </div>
    </section>
  );
}
