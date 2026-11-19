import React, {
    useEffect,
    useState
} from 'react'
import { PiFileCodeDuotone } from "react-icons/pi";
import { scrollToSection } from '../../hooks/useLenis';
import './Header.css';

function Header() {
    const currentDate = new Date()
    const [activeSection, setActiveSection] = useState("hero");
    const navItems = [
        {
            id: "hero",
            label: "Front Page",
        },
        {
            id: "experience",
            label: "Investigation Timeline",
        },
        {
            id: "projects",
            label: "Case Files",
        },
        {
            id: "skills",
            label: "Evidence Locker",
        },
        {
            id: "education",
            label: "Case Background",
        },
        {
            id: "contact",
            label: "Submit a Lead",
        },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function openMenu() {
        setIsMenuOpen(true);
    }

    function closeMenu() {
        setIsMenuOpen(false);
    }

    const handleNavClick = (event, id) => {
        event.preventDefault();
        setActiveSection(id);
        scrollToSection(id);
    };

    // Link click inside the full-page menu: close the menu first so the
    // body scroll lock is released, then scroll to the section.
    function handleMobileNavClick(event, id) {
        event.preventDefault();
        closeMenu();
        setActiveSection(id);
        scrollToSection(id);
    }

    // Lock page scroll while the full-page menu is open.
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return function restoreScroll() {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    // Close the menu with Escape, or when the screen grows to desktop width.
    useEffect(() => {
        if (!isMenuOpen) {
            return;
        }

        function handleKeyDown(event) {
            if (event.key === "Escape") {
                closeMenu();
            }
        }

        function handleResize() {
            if (window.innerWidth >= 1024) {
                closeMenu();
            }
        }

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("resize", handleResize);

        return function removeListeners() {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("resize", handleResize);
        };
    }, [isMenuOpen]);

    // Scroll-spy: automatically highlight whichever section is currently
    // in view, not just the one that was last clicked.
    useEffect(() => {
        const sections = navItems
            .map((item) => document.getElementById(item.id))
            .filter(Boolean);

        if (sections.length === 0) {
            console.warn(
                "Scroll-spy found no matching section elements. Check that each section's root element has a matching id (hero, experience, projects, skills, education, contact)."
            );
            return;
        }

        if (sections.length < navItems.length) {
            const foundIds = sections.map((section) => section.id);
            const missingIds = navItems
                .map((item) => item.id)
                .filter((id) => !foundIds.includes(id));
            console.warn(
                `Scroll-spy is missing these section ids in the DOM: ${missingIds.join(", ")}`
            );
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                // Counts a section as "active" once it crosses the
                // vertical center of the viewport.
                rootMargin: "-45% 0px -45% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className="main-header-container">
                <div className="main-heading-header header-top-row pb-1 flex items-center justify-between border-b-2 border-[var(--border-color)] [font-family:var(--label-font)] text-[var(--text-muted-color)]">
                    <div className="header-top-left">
                        <span>Noida, India</span>
                        <span className="header-established">EST.2024</span>
                    </div>
                    <span className="header-date-masthead">{currentDate.toDateString()}</span>
                    <span className="header-established-desktop">EST.2024</span>
                    <button
                        type="button"
                        className={
                            isMenuOpen
                                ? "header-hamburger header-hamburger-masthead header-hamburger-open"
                                : "header-hamburger header-hamburger-masthead"
                        }
                        aria-label="Open menu"
                        aria-expanded={isMenuOpen}
                        aria-controls="header-mobile-menu"
                        onClick={openMenu}
                    >
                        <span className="header-hamburger-bar"></span>
                        <span className="header-hamburger-bar"></span>
                        <span className="header-hamburger-bar"></span>
                    </button>
                </div>
                <div className="main-heading-container w-full text-center">
                    <span className="header-title-row text-[var(--heading-color)] [font-family:var(--heading-font)] font-bold">
                        <PiFileCodeDuotone />
                        <h1 className="header-title-text">
                            Full-Stack Developer
                        </h1>
                    </span>
                    <span>
                        <h2 className='header-subtitle [font-family:var(--label-font)] text-[var(--text-muted-color)] border-b-2 border-[var(--border-color)]'>
                            Documenting My Journey as a Full-Stack Developer
                        </h2>
                    </span>
                </div>
            </div>

            <div className="sub-heading-container header-sticky-bar sticky top-0 z-50 bg-[var(--background-dark)] text-[var(--text-muted-color)] border-b-2 border-[var(--border-color)] pb-2">
                <h2 className="header-date">
                    {currentDate.toDateString()}
                </h2>
                <nav className="header-nav">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={(event) => handleNavClick(event, item.id)}
                            className={
                                activeSection === item.id
                                    ? "header-nav-link header-nav-link-active"
                                    : "header-nav-link text-[var(--text-muted-color)]"
                            }
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>

            {/* Always rendered so CSS can animate both opening and closing.
                While closed it is invisible and cannot be focused or clicked. */}
                <div
                    id="header-mobile-menu"
                    className={
                        isMenuOpen
                            ? "header-mobile-menu header-mobile-menu-open"
                            : "header-mobile-menu"
                    }
                    aria-hidden={!isMenuOpen}
                >
                    <button
                        type="button"
                        className="header-mobile-close"
                        aria-label="Close menu"
                        onClick={closeMenu}
                    >
                        ✕
                    </button>
                    <nav className="header-mobile-nav">
                        {navItems.map((item, index) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                style={{ "--link-index": index }}
                                onClick={(event) => handleMobileNavClick(event, item.id)}
                                className={
                                    activeSection === item.id
                                        ? "header-mobile-link header-mobile-link-active"
                                        : "header-mobile-link"
                                }
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>
        </>
    )
}

export default Header