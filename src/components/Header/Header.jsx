import React, {
    useEffect,
    useState
} from 'react'
import { PiFileCodeDuotone } from "react-icons/pi";
import { scrollToSection } from '../../hooks/useLenis';

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

    const handleNavClick = (event, id) => {
        event.preventDefault();
        setActiveSection(id);
        scrollToSection(id);
    };

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
                <div className="main-heading-header pb-1 flex items-center justify-between border-b-2 border-[var(--border-color)] [font-family:var(--label-font)] text-[var(--text-muted-color)]">
                    <span>Noida, India</span>
                    <span>EST.2024</span>
                </div>
                <div className="main-heading-container w-full text-center">
                    <span className="flex items-center justify-center gap-3 text-8xl text-[var(--heading-color)] [font-family:var(--heading-font)] font-bold mb-2">
                        <PiFileCodeDuotone />
                        <h1>
                            Full-Stack Developer
                        </h1>
                    </span>
                    <span>
                        <h2 className='[font-family:var(--label-font)] text-[var(--text-muted-color)] border-b-2 border-[var(--border-color)] pb-8'>
                            Documenting My Journey as a Full-Stack Developer
                        </h2>
                    </span>
                </div>
            </div>

            <div className="sub-heading-container sticky top-0 z-50 bg-[var(--background-dark)] flex items-center justify-between text-[var(--text-muted-color)] border-b-2 border-[var(--border-color)] pb-2">
                <h2>
                    {currentDate.toDateString()}
                </h2>
                <nav className="flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={(event) => handleNavClick(event, item.id)}
                            className={
                                activeSection === item.id
                                    ? "font-bold text-[var(--secondary-color)] border-b-2 border-[var(--secondary-color)]"
                                    : "text-[var(--text-muted-color)]"
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