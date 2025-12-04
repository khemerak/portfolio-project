
"use client";

import React, {
  useRef,
  useEffect,
  useState,
  Children,
  cloneElement,
  isValidElement,
  MouseEventHandler,
} from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface MagicBentoProps {
  children: React.ReactNode;
  className?: string;
  textAutoHide?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  enableTilt?: boolean;
  enableMagnetism?: boolean;
  clickEffect?: boolean;
  spotlightRadius?: number;
  glowColor?: string;
}

const MagicBento = ({
  children,
  className,
  textAutoHide = false,
  enableSpotlight = true,
  enableBorderGlow = true,
  enableTilt = true,
  enableMagnetism = false,
  clickEffect = true,
  spotlightRadius = 300,
  glowColor = "132, 0, 255",
}: MagicBentoProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      if (enableSpotlight) {
        gsap.to(container, {
          "--spotlight-x": `${x}px`,
          "--spotlight-y": `${y}px`,
          duration: 0.3,
          ease: "power2.out",
        });
      }

      if (enableTilt) {
        const rotateX = gsap.utils.mapRange(0, height, 10, -10)(y);
        const rotateY = gsap.utils.mapRange(0, width, -10, 10)(x);
        gsap.to(container, {
          rotationX: rotateX,
          rotationY: rotateY,
          transformPerspective: 1000,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
      if (enableBorderGlow) {
        gsap.to(container, { "--border-opacity": 1, duration: 0.3 });
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      if (enableBorderGlow) {
        gsap.to(container, { "--border-opacity": 0, duration: 0.3 });
      }
      if (enableTilt) {
        gsap.to(container, {
          rotationX: 0,
          rotationY: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };

    container.addEventListener("mousemove", handleMouseMove as unknown as EventListener);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove as unknown as EventListener);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [
    enableSpotlight,
    enableTilt,
    enableBorderGlow,
    spotlightRadius,
    glowColor,
  ]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative grid grid-cols-3 gap-4 p-4 border border-transparent rounded-xl transition-all duration-300",
        "bg-card shadow-lg",
        {
          "transform-style-3d": enableTilt,
        },
        className
      )}
      style={
        {
          "--spotlight-radius": `${spotlightRadius}px`,
          "--spotlight-x": "50%",
          "--spotlight-y": "50%",
          "--border-opacity": 0,
          "--glow-color": glowColor,
          background: enableSpotlight
            ? `radial-gradient(
              circle at var(--spotlight-x) var(--spotlight-y),
              rgba(var(--glow-color), 0.1),
              transparent var(--spotlight-radius)
            )`
            : "transparent",
          borderImage: enableBorderGlow
            ? `radial-gradient(
              200px circle at var(--spotlight-x) var(--spotlight-y),
              rgba(var(--glow-color), var(--border-opacity)),
              transparent
            ) 1`
            : "none",
        } as React.CSSProperties
      }
    >
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            isHovered,
            textAutoHide,
            enableMagnetism,
            clickEffect,
          } as MagicBentoItemProps);
        }
        return child;
      })}
    </div>
  );
};

MagicBento.displayName = "MagicBento";

interface MagicBentoItemProps {
  children: React.ReactNode;
  className?: string;
  isHovered?: boolean;
  textAutoHide?: boolean;
  enableMagnetism?: boolean;
  clickEffect?: boolean;
}

export const MagicBentoItem = ({
  children,
  className,
  isHovered,
  textAutoHide,
  enableMagnetism,
  clickEffect,
}: MagicBentoItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const item = itemRef.current;
    if (!item || !enableMagnetism) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = item.getBoundingClientRect();
      const x = e.clientX - left - width / 2;
      const y = e.clientY - top - height / 2;
      gsap.to(item, { x: x * 0.3, y: y * 0.3, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(item, { x: 0, y: 0, duration: 0.3 });
    };

    item.addEventListener("mousemove", handleMouseMove);
    item.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      item.removeEventListener("mousemove", handleMouseMove);
      item.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [enableMagnetism]);

  return (
    <div
      ref={itemRef}
      className={cn(
        "bg-card-foreground/5 p-4 rounded-lg transition-all duration-300",
        "flex items-center justify-center text-center",
        {
          "cursor-pointer": clickEffect,
        },
        className
      )}
    >
      <div
        className={cn("transition-opacity duration-300", {
          "opacity-0": textAutoHide && !isHovered,
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default MagicBento;

