import React from "react";
import { useInView } from "../../hooks/useInView";

/**
 * FadeIn
 *
 * Wraps any content and fades + slides it in (opacity + translate-y)
 * once it scrolls into view. Drop it around a whole section, or around
 * individual pieces (a card, a heading) for a staggered effect.
 *
 * Props:
 * - children  — the content to animate in
 * - delay     (number, ms, optional) — delays the transition start, handy
 *              for staggering multiple FadeIns in a row (e.g. 0, 100, 200)
 * - className (string, optional) — extra classes merged onto the wrapper
 *
 * Usage:
 *   <FadeIn>
 *       <Hero />
 *   </FadeIn>
 *
 *   // staggered cards:
 *   {items.map((item, i) => (
 *       <FadeIn key={item.id} delay={i * 100}>
 *           <Card {...item} />
 *       </FadeIn>
 *   ))}
 */
/**
 * FadeIn
 *
 * Wraps any content and fades + slides + scales it in once it scrolls
 * into view — a more pronounced "reveal" effect (larger travel distance,
 * slight scale-up, and a soft blur that sharpens as it settles).
 *
 * Props:
 * - children  — the content to animate in
 * - delay     (number, ms, optional) — delays the transition start, handy
 *              for staggering multiple FadeIns in a row (e.g. 0, 100, 200)
 * - className (string, optional) — extra classes merged onto the wrapper
 *
 * Usage:
 *   <FadeIn>
 *       <Hero />
 *   </FadeIn>
 *
 *   // staggered cards:
 *   {items.map((item, i) => (
 *       <FadeIn key={item.id} delay={i * 100}>
 *           <Card {...item} />
 *       </FadeIn>
 *   ))}
 */
function FadeIn({ children, delay = 0, className = "" }) {
    const [ref, isInView] = useInView();

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transition-all duration-1000 ease-out ${isInView
                    ? "opacity-100 translate-y-0 scale-100 blur-0"
                    : "opacity-0 translate-y-20 scale-95 blur-sm"
                } ${className}`}
        >
            {children}
        </div>
    );
}

export default FadeIn;