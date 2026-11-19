import React from "react";

export default function LandingImage({
    src = DEFAULT_IMAGE,
    label = "Exhibit 01: Subject Identified",
    alt = "Exhibit photo",
    className = "",
}) {
    return (
        <div className={`exhibit-card ${className}`}>
            {/* Fixed viewport window — this NEVER scales, only clips */}
            <div className="exhibit-frame">
                <div className="exhibit-frame-inner">
                    <img src={src} alt={alt} className="exhibit-photo" />

                    {/* Vignette */}
                    <div className="exhibit-vignette" />

                    {/* Label tag */}
                    <div className="exhibit-label">{label}</div>
                </div>
            </div>

            <style>{`
    .exhibit-card {
        width: 100%;
        max-width: 100%;
        background: #f2ede1;
        border: 1px solid #1a1a1a;
        padding: 14px;
        box-shadow: 0 1px 2px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.08);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        box-sizing: border-box;
    }

    /* The window is a fixed-ratio box that clips whatever is inside it.
        Its own size never changes, so it can never appear to "zoom". */
    .exhibit-frame {
        width: 100%;
        padding: 25%; 
        position: relative;
        overflow: hidden;
        background: #F5F1E9;
;
    }

    .exhibit-frame-inner {
        position: absolute;
        inset: 0;
    }

    /* Only this element scales. It is centered, oversized, and
        clipped by .exhibit-frame\'s overflow:hidden above. */
    .exhibit-photo {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 112%;
        height: 112%;
        max-width: none;
        object-fit: cover;
        display: block;
        filter: sepia(0.55) contrast(1.05) brightness(0.98) saturate(0.85);
        transform: translate(-50%, -50%) scale(1);
        transform-origin: 52% 42%;
        animation: exhibitKenBurns 22s ease-in-out infinite;
        will-change: transform;
    }

    @keyframes exhibitKenBurns {
        0%   { transform: translate(-50%, -50%) scale(1); }
        50%  { transform: translate(-50%, -50%) scale(1.06); }
        100% { transform: translate(-50%, -50%) scale(1); }
    }

    .exhibit-vignette {
        position: absolute;
        inset: 0;
        pointer-events: none;
        box-shadow: inset 0 0 60px rgba(0,0,0,0.25);
        z-index: 1;
    }

    .exhibit-label {
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 2;
        background: #0a0a0a;
        color: #f2ede1;
        font-size: 11px;
        letter-spacing: 0.14em;
        font-weight: 600;
        text-transform: uppercase;
        padding: 7px 12px;
        font-family: "Courier New", Courier, monospace;
    }

    /* Mobile (max-width: 767px): less frame padding, readable label */
    @media (max-width: 767px) {
        .exhibit-card {
            padding: 8px;
        }
        .exhibit-label {
            font-size: 12px;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .exhibit-photo {
        animation: none;
        }
    }
    `}</style>
    </div>
    );
}

// Bundled sample image (base64) so the component renders out of the box.
// Swap it out by passing your own `src` prop.
const DEFAULT_IMAGE = "src\assets\me.png";