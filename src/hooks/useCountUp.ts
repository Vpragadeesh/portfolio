import { useState, useEffect, useRef } from 'react';

export function useCountUp(target: number, duration = 1100) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const step = Math.ceil(target / (duration / 16));
    let current = 0;

    const animate = () => {
      current += step;
      if (current >= target) {
        setCount(target);
        return;
      }
      setCount(current);
      requestAnimationFrame(animate);
    };

    animate();
  }, [hasStarted, target, duration]);

  return { count, ref };
}
