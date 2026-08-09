import React from 'react'

const ExperienceCard = ({
    role,
    organization,
    duration,
    location,
    description,
}) => {
    return (
        <div className='main-container p-5 border-2 border-[var(--border-color)] flex flex-col items-center bg-[var(--background-secondary)] w-[90%]'>
            <div className="card-header flex items-center justify-between w-full border-b-2 border-[var(--border-color)] p-5">
                <div className='designation-container flex flex-col'>
                    <h1 className='font-family:var(--label-font)] text-[var(--text-color)]'>
                        ROLE / DESIGNATION
                    </h1>
                    <h1 className='font-family:var(--heading-font)] text-[var(--heading-color)] font-bold text-3xl'>
                        {role}
                    </h1>
                </div>
                <div>
                    <h1 className='font-family:var(--label-font)] text-[var(--text-color)]'>
                        Organization
                    </h1>
                    <h1 className='font-family:var(--heading-font)] text-[var(--heading-color)] font-bold text-3xl'>
                        {organization}
                    </h1>
                </div>
            </div>
            <div className="card-content p-5 tracking-tight font-family:var(--text-font)] border-b-2 border-[var(--border-color)] w-full">
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
            <div className="card-footer w-full flex justify-between items-center p-5">
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