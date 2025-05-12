
import { useState, useEffect, useRef, RefObject } from 'react';

interface IntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  reappear?: boolean; // Controls if animation should retrigger when element comes back into view
}

/**
 * Custom hook that observes when an element enters the viewport
 * and triggers a callback or returns the intersection status
 */
export function useIntersectionObserver<T extends Element>({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = false,
  reappear = true // By default, animations will retrigger when scrolling back into view
}: IntersectionObserverOptions = {}): [RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when element intersects viewport
        setIsIntersecting(entry.isIntersecting);
        
        // If triggerOnce is true and element is intersecting, unobserve
        if (triggerOnce && entry.isIntersecting && ref.current) {
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, triggerOnce, reappear]);

  return [ref, isIntersecting];
}

export default useIntersectionObserver;
