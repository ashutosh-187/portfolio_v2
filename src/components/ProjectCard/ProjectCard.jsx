import React, { useState } from "react";
import "./ProjectCard.css";

const exhibitLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const caseTypes = [
    "WEB",
    "SYS",
    "API",
    "AI",
    "APP",
    "LAB",
    "DEV",
    "OPS",
];

const exhibitLabels = [
    "PROJECT",
    "DOSSIER",
    "FIELD WORK",
    "CASE STUDY",
    "TECHNICAL RECORD",
    "ARCHIVE",
];

const generateRandomItem = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};

const generateCaseNumber = () => {
    const number = Math.floor(Math.random() * 90) + 10;
    const type = generateRandomItem(caseTypes);

    return `CASE #${number}-${type}`;
};

const ProjectCard = ({
    exhibitNumber,
    projectName,
    description,
    image,
    techStack = [],
    link,
}) => {
    const [caseNumber] = useState(generateCaseNumber);

    const [exhibitLabel] = useState(
        () => generateRandomItem(exhibitLabels)
    );

    const [isExpanded, setIsExpanded] = useState(false);

    const exhibitLetter =
        exhibitLetters[exhibitNumber - 1] || exhibitNumber;

    return (
        <article
            className="
                project-card
                flex
                flex-col
                h-full
                overflow-hidden
                bg-[var(--background-secondary)]
            "
        >

            {/* ================= HEADER ================= */}

            <div
                className="
                    flex
                    items-center
                    justify-between
                    bg-[var(--heading-color)]
                    px-3
                    py-2
                    text-[var(--background-color)]
                "
            >
                <span
                    className="
                        [font-family:var(--label-font)]
                        text-xs
                        font-bold
                        uppercase
                        tracking-wider
                    "
                >
                    Exhibit {exhibitLetter}
                </span>

                <span
                    className="
                        [font-family:var(--label-font)]
                        text-xs
                        font-bold
                        uppercase
                    "
                >
                    {caseNumber}
                </span>
            </div>


            {/* ================= IMAGE ================= */}

            {image && (
                <div className="p-3">
                    <div
                        className="
                            overflow-hidden
                            border
                            border-[var(--border-color)]
                        "
                    >
                        <img
                            src={image}
                            alt={projectName}
                            className="
                                block
                                aspect-video
                                w-full
                                object-center
                            "
                        />
                    </div>
                </div>
            )}


            {/* ================= CONTENT ================= */}

            <div
                className="
                    project-card-content
                    flex
                    flex-1
                    flex-col
                    border-t
                    border-[var(--border-color)]
                    p-5
                "
            >

                {/* Label */}

                <span
                    className="
                        [font-family:var(--label-font)]
                        text-xs
                        font-bold
                        uppercase
                        tracking-widest
                        text-[var(--text-muted-color)]
                    "
                >
                    {exhibitLabel}
                </span>


                {/* Project Name */}

                <h2
                    className="
                        project-card-title
                        mt-1
                        [font-family:var(--heading-font)]
                        text-[var(--heading-color)]
                    "
                >
                    {projectName}
                </h2>


                {/* Description */}

                <div className="mt-2 flex flex-col items-end">

                    <p
                        className={`
                            [font-family:var(--body-font)]
                            text-base
                            leading-relaxed
                            text-[var(--text-color)]
                            ${isExpanded ? "" : "line-clamp-3"}
                        `}
                    >
                        {description}
                    </p>

                    {/* Read More */}

                    {description.length > 180 && (
                        <button
                            type="button"
                            onClick={() =>
                                setIsExpanded((previous) => !previous)
                            }
                            className="
                                project-card-read-more
                                m-2
                                [font-family:var(--label-font)]
                                text-xs
                                font-bold
                                uppercase
                                tracking-widest
                                text-[var(--heading-color)]
                                underline
                                underline-offset-4
                            "
                        >
                            {isExpanded
                                ? "Read Less ↑"
                                : "Read More →"}
                        </button>
                    )}

                </div>


                {/* ================= FOOTER ================= */}

                <div
                    className="
                        project-card-footer
                        mt-auto
                        grid
                        grid-cols-[1fr_auto]
                        items-end
                        gap-5
                        border-t
                        border-[var(--border-color)]
                        pt-4
                    "
                >

                    {/* Tech Stack */}

                    <div className="flex flex-wrap gap-2">
                        {techStack.map((technology, index) => (
                            <span
                                key={`${technology}-${index}`}
                                className="
                                    project-card-tag
                                    border
                                    border-[var(--border-color)]
                                    px-2
                                    py-1
                                    [font-family:var(--mono-font)]
                                    uppercase
                                "
                            >
                                {technology}
                            </span>
                        ))}
                    </div>


                    {/* Project Link */}

                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                project-card-link
                                flex
                                shrink-0
                                items-center
                                justify-center
                                whitespace-nowrap
                                border-2
                                border-[var(--border-color)]
                                bg-[var(--heading-color)]
                                px-4
                                py-2
                                text-xs
                                font-bold
                                uppercase
                                tracking-wider
                                text-[var(--background-color)]
                                transition-colors
                                duration-200
                                hover:bg-[var(--background-color)]
                                hover:text-[var(--heading-color)]
                            "
                        >
                            View File ↗
                        </a>
                    )}

                </div>

            </div>

        </article>
    );
};

export default ProjectCard;