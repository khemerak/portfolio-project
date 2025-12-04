"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface RippleButtonProps extends Omit<HTMLMotionProps<"button">, "onClick"> {
  children: React.ReactNode;
  rippleColor?: string;
  duration?: number;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const RippleButton: React.FC<RippleButtonProps> = ({
  children,
  rippleColor = "rgba(255, 255, 255, 0.6)",
  duration = 0.6,
  className,
  onClick,
  ...props
}) => {
  const [ripples, setRipples] = React.useState<
    { x: number; y: number; size: number; id: number }[]
  >([]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    setRipples((prevRipples) => [
      ...prevRipples,
      { x, y, size, id: Date.now() },
    ]);

    onClick?.(event);
  };

  return (
    <motion.button
      className={cn(
        "relative overflow-hidden rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          initial={{ opacity: 1, scale: 0 }}
          animate={{ opacity: 0, scale: 1 }}
          transition={{ duration, ease: "easeOut" }}
          onAnimationComplete={() =>
            setRipples((prevRipples) =>
              prevRipples.filter((r) => r.id !== ripple.id)
            )
          }
          style={{
            position: "absolute",
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            borderRadius: "50%",
            backgroundColor: rippleColor,
            pointerEvents: "none",
          }}
        />
      ))}
    </motion.button>
  );
};
