import { useRef, useEffect, useState } from "react";

export default function useIntersectionObserver() {
  const elementRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const { current } = elementRef;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      });
    });
    observer.observe(current);
    return () => observer.unobserve(current);
  }, [elementRef.current]);

  return [elementRef, isInView];
}
