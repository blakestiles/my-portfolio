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
  
  // Store observer reference to be able to disconnect it
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Disconnect any existing observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    
    // Create a new observer
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        // Update state when element intersects viewport
        setIsIntersecting(entry.isIntersecting);
        
        // If element is intersecting, mark it as having been intersected
        if (entry.isIntersecting) {
          setWasIntersected(true);
          
          // If triggerOnce is true and element is intersecting, unobserve
          if (triggerOnce && ref.current) {
            observerRef.current?.unobserve(ref.current);
          }
        } else {
          // If reappear is false and element was already intersected, keep it as "intersecting"
          // This prevents re-animations when the element is not in view
          if (!reappear && wasIntersected) {
            setIsIntersecting(true);
          } else if (reappear) {
            // If reappear is true, update isIntersecting to false when element leaves viewport
            // This allows animations to trigger again when scrolling back to the element
            setIsIntersecting(false);
          }
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observerRef.current.observe(currentRef);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, rootMargin, triggerOnce, reappear, wasIntersected]);

  return [ref, isIntersecting];
}

export default useIntersectionObserver;
