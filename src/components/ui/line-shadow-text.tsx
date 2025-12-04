"use client";

import { motion, MotionProps } from "motion/react";
import { memo } from "react";

import { cn } from "@/lib/utils";

interface LineShadowTextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>,
    MotionProps {
  shadowColor?: string;
  as?: React.ElementType;
}

const withMotion = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & MotionProps> => {
  const MotionComponent = motion.create(
    Component as React.ComponentType<any>
  ) as React.FC<P & MotionProps>;
  const WithMotion: React.FC<P & MotionProps> = (props) => (
    <MotionComponent {...props} />
  );
  WithMotion.displayName = `withMotion(${
    Component.displayName || Component.name || "Component"
  })`;
  return WithMotion;
};

const MemoizedLineShadowText = memo(
  ({
    children,
    shadowColor = "black",
    className,
    as: Component = "span",
    ...props
  }: LineShadowTextProps) => {
    const MotionComponent = withMotion(Component);
    const content = typeof children === "string" ? children : null;

    if (!content) {
      throw new Error("LineShadowText only accepts string content");
    }

    return (
      <MotionComponent
        style={{ "--shadow-color": shadowColor } as React.CSSProperties}
        className={cn(
          "relative z-0 inline-flex",
          "after:absolute after:top-[0.04em] after:left-[0.04em] after:content-[attr(data-text)]",
          "after:bg-[linear-gradient(45deg,transparent_45%,var(--shadow-color)_45%,var(--shadow-color)_55%,transparent_0)]",
          "after:-z-10 after:bg-[length:0.06em_0.06em] after:bg-clip-text after:text-transparent",
          "after:animate-line-shadow",
          className
        )}
        data-text={content}
        {...props}
      >
        {content}
      </MotionComponent>
    );
  }
);

MemoizedLineShadowText.displayName = "LineShadowText";

export { MemoizedLineShadowText as LineShadowText };
