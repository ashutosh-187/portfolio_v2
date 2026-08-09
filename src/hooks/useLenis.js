import { useEffect, useRef } from "react";
import Lenis from "lenis";

// Module-level singleton so any component (not just the one that calls the
// hook) can access the same Lenis instance — this is what lets Header.jsx
// trigger smooth scrolling on nav clicks without prop-drilling or context.
let lenisInstance = null;

/**
 * useLenis
 *
 * Initializes a single Lenis smooth-scroll instance for the whole page.
 * Call this once, at the top level of your root component (e.g. App.jsx).
 */
    export function useLenis() {
    const lenisRef = useRef(null);

    useEffect(() => {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;
    lenisInstance = lenis;

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
        cancelAnimationFrame(rafId);
        lenis.destroy();
        lenisRef.current = null;
        lenisInstance = null;
    };
    }, []);

    return lenisRef;
    }

/**
 * scrollToSection
 *
 * Smoothly scrolls to a section by its element id, using the shared Lenis
 * instance. Automatically offsets the scroll by the height of the sticky
 * nav bar (.sub-heading-container), so the section's heading isn't hidden
 * underneath it. Falls back to a native scroll if Lenis hasn't
 * initialized yet (e.g. called too early).
 *
 * Usage: scrollToSection("projects")
 */
export function scrollToSection(id) {
    const target = document.getElementById(id);
    if (!target) return;

    const header = document.querySelector(".sub-heading-container");
    const headerHeight = header ? header.offsetHeight : 0;

    if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset: -headerHeight });
    } else {
    const top =
        target.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top, behavior: "smooth" });
    }
}
