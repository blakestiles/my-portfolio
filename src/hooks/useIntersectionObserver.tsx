
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
  const [wasIntersected, setWasIntersected] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when element intersects viewport
        setIsIntersecting(entry.isIntersecting);
        
        // If element is intersecting, mark it as having been intersected
        if (entry.isIntersecting) {
          setWasIntersected(true);
        }
        
        // If triggerOnce is true and element is intersecting, unobserve
        if (triggerOnce && entry.isIntersecting && ref.current) {
          observer.unobserve(ref.current);
        }
        
        // If we don't want animations to reappear and the element was already intersected,
        // unobserve after it leaves the viewport
        if (!reappear && wasIntersected && !entry.isIntersecting && ref.current) {
          observer.unobserve(ref.current);
          setIsIntersecting(true); // Keep the state as "intersecting" to prevent re-animations
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
  }, [threshold, rootMargin, triggerOnce, reappear, wasIntersected]);

  return [ref, isIntersecting];
}

export default useIntersectionObserver;
