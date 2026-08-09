import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

function Projects() {
    const projects = [
        {
            projectName: "Travomiles",
            description:
                "A full-stack flight booking and travel management platform built with Django and Next.js, supporting flight search, booking, real-time flight tracking, and instant notifications. The platform uses Celery and Redis for asynchronous workflows and Kafka for event-driven communication across microservices. PostgreSQL manages transactional data, while Docker and AWS enable scalable containerized deployment. The frontend leverages Next.js, Redux, and RTK Query to deliver a responsive and efficient booking experience.",
            image: "src/assets/projects/travomiles.png",
            techStack: [
                "Python", "Django", "Celery", "Redis", "Apache Kafka",
                "PostgreSQL", "Next.js", "Redux", "RTK Query"
            ]
        },
        {
            projectName: "Paper Trading Platform Backend",
            description:
                "A scalable paper trading backend built with Python and Flask, designed to simulate real-world stock market activity without financial risk. The platform provides a complete trading workflow with order management, stock market simulation, watchlist subscriptions, stop-loss execution, alerts, and a Risk Management System (RMS). It also includes a backtesting engine for evaluating trading strategies against historical market data. MongoDB handles trading and market data, while Redis enables low-latency caching and real-time operations. Celery manages asynchronous workloads, and Kafka powers event-driven communication across market, order, and trading workflows.",
            image: "/src/assets/projects/paper_trading.png",
            techStack: ["Python", "Flask", "Web Socket", "MongoDB", "Redis", "Celery", "Apache Kafka"],
            link: "https://github.com/ashutosh-187/Paper_Trading_platform_backend",
        },
        {
            projectName: "Option Chain Backend",
            description:
                "A real-time option chain backend built with Python and Flask, integrating the XTS Market Data API to stream live market data. The system provides REST APIs and Socket.IO connections for real-time option chain updates, while Mibian calculates implied volatility and option Greeks. Pandas, NumPy, and Redis are used for efficient data processing, caching, and low-latency data retrieval.",
            image: "src/assets/projects/option_chain_backend.png",
            techStack: ["Python", "Flask", "Web Socket", "NumPy", "Pandas", "MongoDB", "Redis"],
            link: "https://github.com/ashutosh-187/option_chain_backend",
        },
        {
            projectName: "Option Chain Frontend",
            description:
                "A real-time option chain interface built with React, designed to visualize live market data, option prices, implied volatility, and option Greeks in an intuitive trading dashboard. The frontend uses Socket.IO to receive real-time updates and provides interactive option chain views for monitoring calls, puts, strikes, and market movements efficiently.",
            image: "src/assets/projects/option_chain_frontend.png",
            techStack: ["JavaScript", "React.js", "TailwindCSS"],
            link: "https://github.com/ashutosh-187/option_chain_frontend",
        },
        {
            projectName: "Automated Market Data Ingestion System",
            description:
                "An automated market-data ingestion service built with Python and Flask to download daily Bhav Copies for F&O and Equity segments from NSE, BSE, and MCX official sources. The system eliminates manual downloads by running as a scheduled PM2 job on a Linux server, automatically fetching the latest market files, processing the data, and storing it in MongoDB for downstream trading and analytics workflows.",
            image: "src/assets/projects/Automated_Market_Data_Ingestion_System.png",
            techStack: ["Python", "Flask", "MongoDB"],
            link: "https://github.com/ashutosh-187/Download_bhav_copy_from_Exchange",
        },
        {
            projectName: "Stock Market Watchlist Backend",
            description:
                "A real-time stock market watchlist backend built with Python and Flask, designed to provide fast and reliable market-data updates for subscribed instruments. The system allows users to create and manage personalized watchlists, subscribe or unsubscribe stocks, and receive live price updates through WebSockets without repeatedly polling the server. MongoDB manages watchlist and instrument data, while Redis provides low-latency caching and supports efficient real-time data delivery. The backend is structured to handle frequent market-data updates while keeping watchlist operations responsive and scalable.",
            image: "src/assets/projects/watchlist_backend.png",
            techStack: ["Python", "Flask", "MongoDB", "Redis", "Web Socket"],
            link: "https://github.com/ashutosh-187/watchList_backend",
        },
        {
            projectName: "Stock Market Watchlist Frontend",
            description:
                "A stock market watchlist interface built with Next.js, designed for real-time monitoring of subscribed instruments and live market movements. The application uses WebSockets to receive continuous price updates without requiring manual page refreshes, while providing interactive watchlist management, instrument search, and subscribe/unsubscribe functionality. Built with a component-driven architecture, the frontend delivers a responsive and intuitive trading experience while efficiently handling frequently changing market data.",
            image: "src/assets/projects/watchlist_frontend.png",
            techStack: ["TypeScript", "Next.js", "TailwindCSS", "Redux"],
            link: "https://github.com/ashutosh-187/watchList_frontend",
        },
        {
            projectName: "Ochi Clone",
            description:
                "A modern React-based website clone inspired by Ochi, focused on recreating its bold visual design, smooth scrolling, and interactive animations. The project uses Locomotive Scroll for smooth parallax-based navigation and Framer Motion to create fluid page transitions and engaging UI interactions, closely replicating the original site's immersive experience.",
            image: "src/assets/projects/ochi_designs.png",
            techStack: ["JavaScript", "React.js", "TailwindCSS", "Locomotive Scroll", "Framer Motion"],
            link: "https://ochi-clone-iota.vercel.app/",
        },
        {
            projectName: "SidCup Golf Family Clone",
            description:
                "A visually engaging HTML, CSS, and JavaScript website clone inspired by the Sidcup Family Golf website. The project focuses on recreating its immersive visual design, interactive elements, and smooth animations using GSAP, with Remix Icons enhancing the interface. The result is a responsive and animation-driven frontend experience that closely mirrors the original site's aesthetic and interactions.",
            image: "src/assets/projects/sidcup.png",
            techStack: ["JavaScript", "HTML", "CSS", "GSAP"],
            link: "https://master--sidcup-family-clone-187.netlify.app/",
        },
        {
            projectName: "Edusity Clone",
            description:
                "A responsive React-based educational website clone built with Vite, featuring a clean and modular interface designed to adapt across different screen sizes. The project includes an integrated Web3Forms contact system for handling user inquiries and form submissions, while Vite provides a fast development and build workflow. The application is deployed on Vercel for reliable hosting and accessibility.",
            image: "src/assets/projects/edusity.png",
            techStack: ["JavaScript", "React.js", "TailwindCSS"],
            link: "https://edusity-weld.vercel.app/",
        },
    ];

    // Refs for measuring/animating the horizontal track
    const wrapperRef = useRef(null); // tall spacer that creates vertical scroll room
    const trackRef = useRef(null);   // the flex row of cards that gets translated

    const [translateX, setTranslateX] = useState(0);
    const targetRef = useRef(0); // target translateX (lerp toward this for smoothness)

    useEffect(() => {
        let rafId;

        const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

        const computeTarget = () => {
            const wrapper = wrapperRef.current;
            const track = trackRef.current;
            if (!wrapper || !track) return;

            const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;
            const wrapperHeight = wrapper.offsetHeight;
            const viewportHeight = window.innerHeight;

            // How far we are through the tall wrapper (0 -> 1)
            const scrollableDistance = wrapperHeight - viewportHeight;
            const progress = scrollableDistance > 0
                ? clamp((window.scrollY - wrapperTop) / scrollableDistance, 0, 1)
                : 0;

            const maxTranslate = Math.max(track.scrollWidth - window.innerWidth, 0);
            targetRef.current = progress * maxTranslate;
        };

        // Smoothly ease current translateX toward targetRef.current every frame
        const animate = () => {
            setTranslateX((current) => {
                const diff = targetRef.current - current;
                // Lerp factor controls "smoothness" — lower = smoother/slower catch-up
                const next = current + diff * 0.12;
                return Math.abs(diff) < 0.5 ? targetRef.current : next;
            });
            rafId = requestAnimationFrame(animate);
        };

        const handleScrollOrResize = () => computeTarget();

        computeTarget();
        window.addEventListener("scroll", handleScrollOrResize, { passive: true });
        window.addEventListener("resize", handleScrollOrResize);
        rafId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("scroll", handleScrollOrResize);
            window.removeEventListener("resize", handleScrollOrResize);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div id="projects" className="main-project-container">

            {/* ================= HEADER (stays exactly as before, scrolls normally) ================= */}

            <div className="project-header w-fit border-b-2 border-[var(--border-color)] p-5 text-center">

                <h1
                    className="
                        text-6xl
                        font-bold
                        text-[var(--heading-color)]
                        [font-family:var(--heading-font)]
                    "
                >
                    Case Files
                </h1>

                <h2
                    className="
                        p-5
                        text-3xl
                        text-[var(--text-muted-color)]
                        [font-family:var(--label-font)]
                    "
                >
                    ----- Declassified Projects -----
                </h2>

                <p
                    className="
                        text-2xl
                        text-[var(--text-color)]
                        [font-family:var(--label-font)]
                    "
                >
                    These are the tools I have collected along the way
                    languages used to think, frameworks used to build,
                    databases used to store, and infrastructure used to deploy.
                    From Python and Django to React, PostgreSQL, Redis, Docker,
                    and Apache Kafka, each has played a role in turning ideas
                    into working software and challenges into engineering experience.
                </p>

            </div>


            {/* ================= PROJECTS (scroll-jacked horizontal section) ================= */}
            {/*
                `wrapperRef` is a tall block that gives us vertical scroll distance to
                consume. Its height (in vh) controls how "long" the horizontal scroll
                feels — increase the multiplier below to slow it down / add more room.
            */}
            <div
                ref={wrapperRef}
                style={{ height: `${projects.length * 80}vh` }}
                className="projects-display-container relative border-b-2 border-[var(--border-color)]"
            >

                {/* Sticky viewport: pins to the top of the screen while wrapper scrolls */}
                <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">

                    <section
                        ref={trackRef}
                        className="flex items-stretch gap-8 px-[4vw] pr-[15vw] will-change-transform"
                        style={{ transform: `translateX(-${translateX}px)` }}
                    >
                        {projects.map((project, index) => (
                            <div
                                key={project.projectName}
                                className="
                                    w-[42vw]
                                    max-w-[620px]
                                    min-w-[440px]
                                    h-[75vh]
                                    max-h-[760px]
                                    min-h-[560px]
                                    shrink-0
                                "
                            >
                                <ProjectCard
                                    exhibitNumber={index + 1}
                                    {...project}
                                />
                            </div>
                        ))}
                    </section>

                </div>

            </div>

        </div>
    );
}

export default Projects;