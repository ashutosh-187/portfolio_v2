import React from 'react'
import LandingImage from "../../components/LandingImage/LandingImage"
import CustomButton from '../../components/Button/Button/CustomButton';
import DownloadButton from '../../components/Button/DownloadButton/DownloadButton';
import {scrollToSection} from "../../hooks/useLenis"
import me from "../../assets/me.png"
import "./Hero.css"


function Hero() {
    return (
        <section
            id="hero"
            className="hero-grid border-b-2 border-[var(--border-color)] h-fit mb-5"
        >
            {/* Left Column */}
            <aside className="hero-left-column">
                <div className="main-left-container border-2 border-[var(--border-color)] bg-[var(--background-secondary)]">
                    <div className="editor-note-container p-5">
                        <span>
                            <h3 className='mb-4 w-fit border-b-2 border-[var(--border-color)] [font-family:var(--label-font)] text-[var(--text-color)]'>
                                Editor's Note
                            </h3>
                        </span>
                        <span>
                            <p className='hero-body-text [font-family:var(--body-font)]'>
                                This edition documents my journey from
                                learning the fundamentals of programming
                                to engineering scalable full-stack and
                                AI-powered applications.
                            </p>
                        </span>
                        <br />
                        <span>
                            <p className='hero-body-text [font-family:var(--body-font)]'>
                                Inside these pages you'll find the
                                projects, technologies, and experiences
                                that have shaped my growth as a software
                                engineer.
                            </p>
                        </span>
                    </div>
                    <div className="current-status-container p-5">
                        <span>
                            <h4 className='mb-4 w-fit border-b-2 border-[var(--border-color)] [font-family:var(--label-font)] text-[var(--text-color)]'>
                                Current Status
                            </h4>
                        </span>
                        <span>
                            <p className='[font-family:var(--body-font)] text-xl'>
                                Open to Opportunities
                            </p>
                        </span>
                    </div>
                    <div className="location-container p-5">
                        <span>
                            <h4 className='mb-4 w-fit border-b-2 border-[var(--border-color)] [font-family:var(--label-font)] text-[var(--text-color)]'>
                                Current Location
                            </h4>
                        </span>
                        <span>
                            <p className='[font-family:var(--body-font)] text-xl'>
                                Sector 63, Noida, Uttar Pradesh, India
                            </p>
                        </span>
                    </div>
                </div>
            </aside>

            {/* Middle Column */}
            <main className="hero-main-column">
                <div className="name-heading-container">
                    <h1 className="hero-name [font-family:var(--heading-font)]">
                        Ashutosh Tiwari
                    </h1>

                    <h2 className="hero-role [font-family:var(--label-font)]">
                        SOFTWARE ENGINEER
                    </h2>
                    <div className='picture-container mt-4 w-full'>
                        <LandingImage src={me} />
                    </div>
                    <p className="hero-body-text [font-family:var(--body-font)] mt-4">
                        Building modern software with Python, Django, React, Next.js, PostgreSQL,
                        Redis, Docker, and LangChain crafting scalable backends, intuitive
                        frontends, and AI-powered applications from concept to deployment.
                    </p>
                </div>
            </main>

            {/* Right Column */}
            <aside className="hero-right-column">
                <div className='right-main-container'>
                    <div className="public-notic-div p-5">
                        <div className="public-notice-board-div border-2 border-[var(--border-color)] flex flex-col items-center text-center bg-[var(--background-secondary)] mb-5">
                            <span>
                                <h1 className='[font-family:var(--label-font)] text-[var(--text-color)] border-b-2 border-[var(--border-color)] mb-5 mt-5'>
                                    PUBLIC NOTICE
                                </h1>
                            </span>
                            <span>
                                <h2 className='hero-notice-title text-[var(--heading-color)] font-bold'>
                                    SEEKING
                                </h2>
                            </span>
                            <span>
                                <h3 className='hero-notice-title text-[var(--heading-color)] font-bold mb-5'>
                                    OPPORTUNITIES
                                </h3>
                            </span>
                            <span>
                                <p className='[font-family:var(--label-font)] text-[var(--text-muted-color)]'>
                                    Open to engagements requiring
                                </p>
                                <p className='[font-family:var(--label-font)] text-[var(--text-muted-color)] mb-5'>
                                    serious design infrastructure.
                                </p>
                            </span>
                            <div className="contact-me-container mb-5">
                                <CustomButton
                                    buttonLabel="DISPATCH INQUIRY"
                                    onClick={() => scrollToSection("contact")}
                                />
                            </div>
                        </div>
                        <div className="download-resume border-2 border-[var(--border-color)] bg-[var(--background-secondary)] mt-5 p-5">
                            <div className="download-resume-heading flex flex-col items-center text-center">
                                <span>
                                    <h4 className='w-fit [font-family:var(--label-font)] text-[var(--text-color)] border-b-2 border-[var(--border-color)] mb-5 mt-5'>
                                        OFFICIAL RECORD
                                    </h4>
                                </span>
                                <span>
                                    <p className='[font-family:var(--label-font)] text-[var(--text-muted-color)]'>
                                        Every investigation needs supporting evidence.
                                    </p>
                                    <p className='[font-family:var(--label-font)] text-[var(--text-muted-color)]'>
                                        Download my résumé to explore my experience,
                                    </p>
                                    <p className='[font-family:var(--label-font)] text-[var(--text-muted-color)]'>
                                        technical skills, project portfolio, and career
                                    </p>
                                    <p className='[font-family:var(--label-font)] text-[var(--text-muted-color)] mb-5'>
                                        highlights in detail.
                                    </p>
                                </span>
                            </div>
                            <div className="download-resume flex items-center justify-center text-center">
                                <DownloadButton />
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </section>
    );
}

export default Hero;