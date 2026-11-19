import React from 'react'
import './ExperienceCard.css'

const ExperienceCard = ({
    role,
    organization,
    duration,
    location,
    description,
}) => {
    return (
        <div className='main-container experience-card border-2 border-[var(--border-color)] bg-[var(--background-secondary)]'>
            <div className="card-header experience-card-header border-b-2 border-[var(--border-color)]">
                <div className='designation-container flex flex-col'>
                    <h1 className='font-family:var(--label-font)] text-[var(--text-color)]'>
                        ROLE / DESIGNATION
                    </h1>
                    <h1 className='font-family:var(--heading-font)] text-[var(--heading-color)] font-bold experience-card-heading'>
                        {role}
                    </h1>
                </div>
                <div>
                    <h1 className='font-family:var(--label-font)] text-[var(--text-color)]'>
                        Organization
                    </h1>
                    <h1 className='font-family:var(--heading-font)] text-[var(--heading-color)] font-bold experience-card-heading'>
                        {organization}
                    </h1>
                </div>
            </div>
            <div className="card-content experience-card-content tracking-tight font-family:var(--text-font)] border-b-2 border-[var(--border-color)]">
                <span>
                    <p>
                        {description.map((item, index) => (
                            <p
                                key={index}
                                className="[font-family:var(--body-font)] tracking-tighter"
                            >
                                {item}
                            </p>
                        ))}
                    </p>
                </span>
            </div>
            <div className="card-footer experience-card-footer">
                <div>
                    <p className="[font-family:var(--label-font)] uppercase text-xs text-[var(--text-muted-color)]">
                        Location
                    </p>

                    <h3 className="[font-family:var(--body-font)]">
                        {location}
                    </h3>
                </div>

                <div className="text-right">
                    <p className="[font-family:var(--label-font)] uppercase text-xs text-[var(--text-muted-color)]">
                        Period
                    </p>

                    <h3 className="[font-family:var(--body-font)]">
                        {duration}
                    </h3>
                </div>

            </div>
        </div>
    )
}

export default ExperienceCard