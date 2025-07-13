import { useEffect, useRef, useState } from "react";

export function useScrollReveal(threshold = 0.8) {
const ref = useRef<HTMLDivElement | null>(null); // or HTMLSectionElement if it's a <section>
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return { ref, visible };
}
