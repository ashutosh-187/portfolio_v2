import React from 'react'
import EducationCard from '../../components/EducationCard/EducationCard';
import { BsAsterisk } from "react-icons/bs";
import education from "../../assets/education.png"
import "./Education.css"

function Education() {
    return (
        <div id="education" className="education-main-container border-b-2 border-[var(--border-color)]">
            <div className="main-heading-container education-heading-box w-full">
                <div>
                    <h1 className="font-family:var(--heading-font)] text-[var(--heading-color)] font-semibold education-title">
                        Case background
                    </h1>
                </div>
                <div className="sub-heading-container mt-5 border-b-2 border-[var(--border-color)]">
                    <h2 className="education-subtitle text-[var(--text-color)] [font-family:var(--label-font)] mb-5">
                        Classification: Academic Records
                    </h2>
                </div>
            </div>
            <div className="content-container education-layout">
                <div className="left-column education-left-column">
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
                <div className="right-column education-right-column">
                    <div className="image-container border-2 border-[var(--border-color)]">
                        <img src={education} alt="" />
                    </div>
                </div>
            </div>
            <div className="education-asterisks">
                <BsAsterisk />
                <BsAsterisk />
                <BsAsterisk />
            </div>
        </div>
    )
}

export default Education