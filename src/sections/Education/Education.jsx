import React from 'react'
import EducationCard from '../../components/EducationCard/EducationCard';

function Education() {
    return (
        <div id="education" className="education-main-container border-b-2 border-[var(--border-color)]">
            <div className="main-heading-container w-full p-5">
                <div>
                    <h1 className="font-family:var(--heading-font)] text-[var(--heading-color)] font-semibold text-5xl">
                        Case background
                    </h1>
                </div>
                <div className="sub-heading-container mt-5 border-b-2 border-[var(--border-color)]">
                    <h2 className="text-2xl text-[var(--text-color)] [font-family:var(--label-font)] mb-5">
                        Classification: Academic Records
                    </h2>
                </div>
            </div>
            <div className="content-container grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]">
                <div className="left-column border-b-2 border-[var(--border-color)] lg:border-b-0 lg:border-r-2 lg:pb-0 lg:pr-8 flex flex-col gap-5 p-5 mb-5">
                    <EducationCard
                        recordId="M-2022-04"
                        degree="Bachelor of Technology"
                        institution="Noida Institute Of Engineering And Technology"
                        startDate={2020}
                        endDate={2024}
                        status="Completed"
                    />

                    <EducationCard
                        recordId="M-2019-20"
                        degree="Intermediate"
                        institution="Woodbine Gardenia School"
                        startDate={2019}
                        endDate={2020}
                        status="Completed"
                    />

                    <EducationCard
                        recordId="M-2017-18"
                        degree="High School"
                        institution="Woodbine Gardenia School"
                        startDate={2017}
                        endDate={2018}
                        status="Completed"
                    />
                </div>
                <div className="right-column p-5 flex items-center justify-center">
                    <div className="image-container border-2 border-[var(--border-color)]">
                        <img src="src/assets/education.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education