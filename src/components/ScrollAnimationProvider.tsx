"use client";

import { useEffect } from "react";

export function useGlobalScrollAnimations() {
  useEffect(() => {
    const animatedElements = document.querySelectorAll<HTMLElement>(
      "[data-scroll-animate]"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.scrollDelay
              ? parseInt(el.dataset.scrollDelay, 10)
              : 0;
            const duration = el.dataset.scrollDuration
              ? parseInt(el.dataset.scrollDuration, 10)
              : 600;

            el.style.transitionDelay = `${delay}ms`;
            el.style.transitionDuration = `${duration}ms`;
            el.classList.add("scroll-visible");
            observer.unobserve(el);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-50px",
      }
    );

    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export function ScrollAnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useGlobalScrollAnimations();
  return <>{children}</>;
}