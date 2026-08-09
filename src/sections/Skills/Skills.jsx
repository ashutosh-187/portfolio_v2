import React from 'react'
import SkillsCard from '../../components/SkillsCard/SkillsCard';
import { BsAsterisk } from "react-icons/bs";

function Skills() {

    const skillCategories = [
        {
            heading: "Languages",
            skills: [
                "Python",
                "JavaScript",
                "TypeScript",
            ],
        },
        {
            heading: "Frontend",
            skills: [
                "React",
                "Next.js",
                "Redux",
                "RTK Query",
                "Tailwind CSS",
            ],
        },
        {
            heading: "Backend",
            skills: [
                "Django",
                "Flask",
                "FastAPI",
                "Node.js",
                "Express.js",
                "NestJS",
            ],
        },
        {
            heading: "Databases",
            skills: [
                "PostgreSQL",
                "MongoDB",
                "MySQL",
                "Redis",
            ],
        },
        {
            heading: "DevOps & Tools",
            skills: [
                "Docker",
                "Git",
                "Linux",
                "PM2",
                "AWS",
            ],
        },
        {
            heading: "Libraries & Others",
            skills: [
                "Pandas",
                "NumPy",
                "OpenCV",
                "Apache Kafka",
                "WebSockets",
                "Celery"
            ],
        },
    ];

    return (
        <div id="skills" className="skills-main-container border-b-2 border-[var(--border-color)]">
            <div className="skills-heading-container mb-5 border-b-2 border-[var(--border-color)] p-5">
                <h1 className="font-family:var(--heading-font)] text-[var(--heading-color)] font-semibold text-5xl text-center">
                    Evidence Locker
                </h1>
                <div className='subheading-conatiner flex flex-col items-center justify-center text-center mt-5'>
                    <p className="subheading-container text-2xl text-[var(--text-color)] [font-family:var(--label-font)]">
                        <span className="block">
                            CASE ID: 894-B // DATE OF ANALYSIS: [CURRENT]
                        </span>

                        <span className="block">
                            SUBJECT: SOFTWARE ENGINEER
                        </span>

                        <span className="block">
                            SPECIALIZATION: FULL-STACK DEVELOPMENT & SYSTEMS
                        </span>

                        <span className="block">
                            STATUS: ACTIVE — SEEKING NEW OPPORTUNITIES
                        </span>
                    </p>
                </div>
            </div>
            <div className="skills-card-container grid grid-cols-1 gap-8 p-5 sm:grid-cols-2 lg:grid-cols-3 mt-5">
                {skillCategories.map((category, index) => (
                    <SkillsCard
                        key={category.heading}
                        evidenceNumber={index + 1}
                        heading={category.heading}
                        skills={category.skills}
                    />
                ))}
            </div>
            <div className="flex items-center justify-center w-full p-5 text-4xl gap-4">
                <BsAsterisk />
                <BsAsterisk />
                <BsAsterisk />
            </div>
        </div>
    )
}

export default Skills