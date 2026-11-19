import React from "react";
import "./EducationCard.css";

const EducationCard = ({
    recordId,
    verified = true,
    degree,
    institution,
    startDate,
    endDate,
    status = "Completed"
}) => {
    return (
        <article
            className="
                education-card
                education-card-box
                relative
                flex
                flex-col
                border
                border-[var(--border-color)]
                bg-[var(--background-color)]
            "
        >

            {/* ================= TOP ROW: RECORD ID + VERIFIED STAMP ================= */}

            <div className="flex items-start justify-between">
                <span
                    className="
                        w-fit
                        border-b
                        border-[var(--text-muted-color)]
                        pb-1
                        [font-family:var(--mono-font)]
                        text-xs
                        font-semibold
                        uppercase
                        tracking-widest
                        text-[var(--text-muted-color)]
                    "
                >
                    Record ID: {recordId}
                </span>

                {verified && (
                    <span
                        className="
                            -rotate-3
                            bg-[var(--secondary-color)]
                            px-2
                            py-1
                            [font-family:var(--mono-font)]
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.2em]
                            text-[var(--text-light-color)]
                        "
                    >
                        Verified
                    </span>
                )}
            </div>


            {/* ================= DEGREE + INSTITUTION ================= */}

            <h2
                className="
                    education-card-degree
                    mt-4
                    [font-family:var(--heading-font)]
                    text-[var(--heading-color)]
                "
            >
                {degree}
            </h2>

            <span
                className="
                    mt-1
                    [font-family:var(--label-font)]
                    text-sm
                    font-bold
                    uppercase
                    tracking-wider
                    text-[var(--text-muted-color)]
                "
            >
                {institution}
            </span>


            {/* ================= DATES + STATUS ================= */}

            <div
                className="
                    mt-4
                    flex
                    flex-wrap
                    items-center
                    gap-x-8
                    gap-y-2
                    border-y
                    border-[var(--border-light-color)]
                    py-3
                "
            >
                <span
                    className="
                        [font-family:var(--label-font)]
                        text-xs
                        uppercase
                        tracking-wider
                        text-[var(--text-muted-color)]
                    "
                >
                    Dates:{" "}
                    <span className="[font-family:var(--mono-font)] text-[var(--text-color)]">
                        {startDate} - {endDate}
                    </span>
                </span>

                <span
                    className="
                        [font-family:var(--label-font)]
                        text-xs
                        uppercase
                        tracking-wider
                        text-[var(--text-muted-color)]
                    "
                >
                    Status:{" "}
                    <span className="[font-family:var(--mono-font)] text-[var(--text-color)]">
                        {status}
                    </span>
                </span>
            </div>

        </article>
    );
};

export default EducationCard;