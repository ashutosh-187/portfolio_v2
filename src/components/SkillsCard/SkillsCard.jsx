import React from "react";
import "./SkillsCard.css";

const SkillsCard = ({ evidenceNumber, heading, skills = [] }) => {
    return (
        <div
            className="
                skills-card
                relative
                border-2
                border-[var(--border-color)]
                bg-[var(--background-secondary)]
                p-4
                transition-all
                duration-200
                hover:-translate-x-1
                hover:-translate-y-1
                hover:shadow-[6px_6px_0px_#000]
            "
        >
            {/* Evidence Label */}
            <div
                className="
                    absolute
                    -top-[13px]
                    left-3
                    bg-[var(--heading-color)]
                    px-2
                    py-1
                    border
                    border-[var(--border-color)]
                "
            >
                <span
                    className="
                        [font-family:var(--label-font)]
                        skills-card-label-text
                        font-bold
                        uppercase
                        tracking-wider
                        text-[var(--background-color)]
                    "
                >
                    Evidence // {String(evidenceNumber).padStart(2, "0")}
                </span>
            </div>

            {/* Heading */}
            <h2
                className="
                    mt-2
                    border-b-2
                    border-[var(--border-color)]
                    pb-2
                    [font-family:var(--heading-font)]
                    text-2xl
                    uppercase
                    text-[var(--secondary-color)]
                "
            >
                {heading}
            </h2>

            {/* Skills */}
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {skills.map((skill, index) => (
                    <span
                        key={`${skill}-${index}`}
                        className="
                            [font-family:var(--mono-font)]
                            text-xs
                            uppercase
                            tracking-wide
                            text-[var(--text-color)]
                        "
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SkillsCard;