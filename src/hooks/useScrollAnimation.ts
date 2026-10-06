"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollAnimation(
  options: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: "-50px",
  }
) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return { ref, isVisible };
}

export function useStaggeredAnimation(
  count: number,
  options: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: "-50px",
  }
) {
  const ref = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        for (let i = 0; i < count; i++) {
          setTimeout(() => {
            setVisibleItems((prev) => new Set(prev).add(i));
          }, i * 150);
        }
        observer.disconnect();
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [count, options]);

  return { ref, visibleItems };
}