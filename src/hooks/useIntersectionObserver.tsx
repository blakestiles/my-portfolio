
import { useState, useEffect, useRef, RefObject } from 'react';

interface IntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  reappear?: boolean; // New option to control if animation should be retriggered
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
  const wasIntersecting = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when element intersects viewport
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          wasIntersecting.current = true;
          
          // If triggerOnce is true and element is intersecting, unobserve
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else {
          // Element is no longer intersecting
          if (reappear) {
            setIsIntersecting(false);
          } else if (!reappear && !wasIntersecting.current) {
            // Only set to false if it hasn't been intersecting before and reappear is false
            setIsIntersecting(false);
          }
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
