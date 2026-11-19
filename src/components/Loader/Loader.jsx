import { useEffect, useRef, useState } from "react";
import { PiNewspaperDuotone } from "react-icons/pi";
import "./Loader.css";

/*
  Full-screen loader, themed like the rest of the site (newspaper / case file).

  How it decides when to close. All four must be true:
    1. The browser "load" event has fired (images and styles are finished).
    2. document.fonts.ready has resolved.
    3. At least MIN_DISPLAY_MS have passed (so it never just flashes).
    4. The progress bar has smoothly reached 100%.
  If something never finishes, it closes anyway after MAX_WAIT_MS.

  Phases:
    "loading"  - visible, bar filling
    "exiting"  - content fades, the two panels split open (see Loader.css)
    "done"     - removed from the page
*/

const MIN_DISPLAY_MS = 1800;
const MAX_WAIT_MS = 20000;
const EXIT_DURATION_MS = 1100;

const STATUS_MESSAGES = [
    "Gathering evidence...",
    "Cross-referencing records...",
    "Typesetting the front page...",
    "Going to press...",
];

function getStatusMessage(percent) {
    if (percent < 30) {
        return STATUS_MESSAGES[0];
    }
    if (percent < 60) {
        return STATUS_MESSAGES[1];
    }
    if (percent < 90) {
        return STATUS_MESSAGES[2];
    }
    return STATUS_MESSAGES[3];
}

// Generic greeting, the same for every visitor and time of day.
const GREETING = "Welcome, reader.";

// Returns the share of <img> elements that finished loading (0 to 1).
function getImageLoadRatio() {
    const images = document.images;
    const total = images.length;

    if (total === 0) {
        return 1;
    }

    let loaded = 0;
    for (let index = 0; index < total; index++) {
        if (images[index].complete) {
            loaded = loaded + 1;
        }
    }

    return loaded / total;
}

function Loader() {
    const [phase, setPhase] = useState("loading");

    // The bar, percent and status text are updated directly every frame,
    // which keeps the animation smooth without re-rendering React.
    const barRef = useRef(null);
    const percentRef = useRef(null);
    const statusRef = useRef(null);

    // Stop the page from scrolling behind the loader.
    useEffect(function lockPageScroll() {
        document.documentElement.style.overflow = "hidden";

        return function unlockPageScroll() {
            document.documentElement.style.overflow = "";
        };
    }, []);

    useEffect(function runLoader() {
        const startTime = performance.now();

        let pageLoaded = document.readyState === "complete";
        let fontsReady = false;
        let minTimeElapsed = false;
        let timedOut = false;
        let exitStarted = false;

        let currentPercent = 0;
        let targetPercent = 0;
        let lastMessage = "";

        let frameId = 0;
        let minTimerId = 0;
        let maxTimerId = 0;
        let exitTimerId = 0;

        function handleWindowLoad() {
            pageLoaded = true;
        }

        function handleFontsReady() {
            fontsReady = true;
        }

        function handleMinTime() {
            minTimeElapsed = true;
        }

        function handleMaxTime() {
            timedOut = true;
        }

        function handleExitFinished() {
            setPhase("done");
        }

        function startExit() {
            exitStarted = true;
            setPhase("exiting");
            exitTimerId = window.setTimeout(handleExitFinished, EXIT_DURATION_MS);
        }

        function everythingIsReady() {
            if (timedOut) {
                return true;
            }
            if (pageLoaded && fontsReady && minTimeElapsed) {
                return true;
            }
            return false;
        }

        // Works out where the bar should be heading.
        function updateTargetPercent() {
            if (everythingIsReady()) {
                targetPercent = 100;
                return;
            }

            // Real progress: images loaded so far, scaled to 10% - 90%.
            const imageRatio = getImageLoadRatio();
            let loadTarget = 10 + imageRatio * 80;

            // Time cap: the bar never jumps ahead of the minimum display time,
            // so it fills steadily instead of racing to 90% on a fast load.
            const elapsed = performance.now() - startTime;
            const timeTarget = (elapsed / MIN_DISPLAY_MS) * 90;

            if (timeTarget < loadTarget) {
                loadTarget = timeTarget;
            }
            if (loadTarget > 90) {
                loadTarget = 90;
            }

            targetPercent = loadTarget;
        }

        function drawFrame() {
            updateTargetPercent();

            // Ease the shown value toward the target a little each frame.
            currentPercent = currentPercent + (targetPercent - currentPercent) * 0.08;
            if (targetPercent - currentPercent < 0.1) {
                currentPercent = targetPercent;
            }

            if (barRef.current) {
                barRef.current.style.transform = "scaleX(" + currentPercent / 100 + ")";
            }
            if (percentRef.current) {
                percentRef.current.textContent = Math.round(currentPercent) + "%";
            }

            const message = getStatusMessage(currentPercent);
            if (statusRef.current && message !== lastMessage) {
                statusRef.current.textContent = message;
                lastMessage = message;
            }

            if (!exitStarted && targetPercent === 100 && currentPercent === 100) {
                startExit();
                return;
            }

            frameId = window.requestAnimationFrame(drawFrame);
        }

        window.addEventListener("load", handleWindowLoad);
        minTimerId = window.setTimeout(handleMinTime, MIN_DISPLAY_MS);
        maxTimerId = window.setTimeout(handleMaxTime, MAX_WAIT_MS);

        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(handleFontsReady);
        } else {
            fontsReady = true;
        }

        frameId = window.requestAnimationFrame(drawFrame);

        return function cleanUpLoader() {
            window.removeEventListener("load", handleWindowLoad);
            window.clearTimeout(minTimerId);
            window.clearTimeout(maxTimerId);
            window.clearTimeout(exitTimerId);
            window.cancelAnimationFrame(frameId);
        };
    }, []);

    if (phase === "done") {
        return null;
    }

    let loaderClassName = "loader";
    if (phase === "exiting") {
        loaderClassName = "loader loader-exiting";
    }

    return (
        <div
            className={loaderClassName}
            role="status"
            aria-live="polite"
            aria-label="Loading portfolio"
        >
            <div className="loader-panel loader-panel-top"></div>
            <div className="loader-panel loader-panel-bottom"></div>

            <div className="loader-content">
                <div className="loader-meta">
                    <span>Noida, India</span>
                    <span>Edition 2026</span>
                </div>

                <div className="loader-rule"></div>

                {/* Official "seal": a dashed ring that slowly turns around the icon */}
                <div className="loader-seal">
                    <svg
                        className="loader-seal-ring"
                        viewBox="0 0 120 120"
                        aria-hidden="true"
                    >
                        <circle className="loader-seal-ring-dashed" cx="60" cy="60" r="56" />
                        <circle className="loader-seal-ring-solid" cx="60" cy="60" r="46" />
                    </svg>
                    <PiNewspaperDuotone className="loader-seal-icon" />
                </div>

                {/* Greeting: the main line rises from behind a mask, the note fades in */}
                <div className="loader-greeting">
                    <span className="loader-greeting-line">
                        <span className="loader-greeting-hello">{GREETING}</span>
                    </span>
                    <p className="loader-greeting-note">
                        Today's edition is being prepared just for you.
                    </p>
                </div>

                <div className="loader-progress">
                    <div className="loader-progress-track">
                        <div ref={barRef} className="loader-progress-fill"></div>
                    </div>
                    <div className="loader-progress-info">
                        <span ref={statusRef}>{STATUS_MESSAGES[0]}</span>
                        <span ref={percentRef}>0%</span>
                    </div>
                </div>

                <div className="loader-rule loader-rule-bottom"></div>
            </div>
        </div>
    );
}

export default Loader;
