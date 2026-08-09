import { useEffect, useRef, useState } from "react";

/**
 * useInView
 *
 * Tracks whether an element has scrolled into the viewport, using
 * IntersectionObserver. Returns a ref to attach to the element, and a
 * boolean for whether it's currently (or has ever been) in view.
 *
 * Options:
 * - threshold    (0–1, default 0) — how much of the element must be
 *                 visible before it counts as "in view". Kept at 0 by
 *                 default (fires as soon as any pixel is visible) because
 *                 a ratio-based threshold breaks for very tall elements —
 *                 e.g. a section several viewport-heights tall would need
 *                 an enormous amount of scrolling before a 0.15 threshold
 *                 was ever satisfied, making it look like it never renders.
 *                 Bump this up only for small, viewport-sized elements
 *                 (e.g. 0.15–0.3 for a single card) where you want it
 *                 mostly on-screen before animating in.
 * - rootMargin   (default "0px 0px -10% 0px") — shrinks the trigger zone
 *                 slightly from the bottom, so elements fade in a little
 *                 before they're fully on screen rather than right at
 *                 the very edge
 * - triggerOnce  (default true) — once visible, stays visible even if
 *                 scrolled back out of view (typical for portfolio fade-ins,
 *                 so content doesn't flicker in/out on scroll direction)
 */
export function useInView({
    threshold = 0,
    rootMargin = "0px 0px -10% 0px",
    triggerOnce = true,
} = {}) {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    if (triggerOnce) observer.unobserve(node);
                } else if (!triggerOnce) {
                    setIsInView(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, [threshold, rootMargin, triggerOnce]);

    return [ref, isInView];
}