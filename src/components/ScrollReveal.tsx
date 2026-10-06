import React from "react";
import { useScrollAnimation, useStaggeredAnimation } from "./hooks/useScrollAnimation";

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 600,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
}) {
  const { ref, isVisible } = useScrollAnimation();

  const directionMap = {
    up: "translate-y-12",
    down: "-translate-y-12",
    left: "translate-x-12",
    right: "-translate-x-12",
  };

  const baseClasses = "opacity-0 transition-all duration-[600ms] ease-out";
  const visibleClasses = "opacity-100 translate-x-0 translate-y-0";
  const hiddenClasses = `${directionMap[direction]} ${baseClasses}`;

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? visibleClasses : hiddenClasses}`}
      style={{ transitionDelay: `${delay}ms`, transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
}

export function StaggerContainer({
  children,
  className = "",
  stagger = 150,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const { ref, visibleItems } = useStaggeredAnimation(
    React.Children.count(children),
    {
      threshold: 0.1,
      rootMargin: "-50px",
    }
  );

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child as React.ReactElement<any>, {
          className: `${child.props.className || ""} ${
            visibleItems.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } transition-all duration-700 ease-out`,
          style: {
            ...child.props.style,
            transitionDelay: `${index * stagger}ms`,
          },
        });
      })}
    </div>
  );
}

export function StaggerItem({
  children,
  className = "",
  index = 0,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  index?: number;
  delay?: number;
}) {
  return (
    <div
      className={`${className} opacity-0 translate-y-8 transition-all duration-700 ease-out`}
      style={{ transitionDelay: `${delay + index * 150}ms` }}
    >
      {children}
    </div>
  );
}