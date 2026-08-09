import React from 'react'
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';

function Experience() {
  const experiences = [
    {
      role: "Junior Full Stack Developer",
      organization: "Einstellen.ai",
      duration: "Jul 2025 - Jul 2026",
      location: "Noida, India",
      description: [
        "Designed, developed, and maintained full-stack features for an AI-powered recruitment platform using Django, Next.js, and PostgreSQL, enabling seamless candidate and recruiter workflows.",
        "Built asynchronous task pipelines with Celery and Redis to process AI interviews, resume parsing, candidate screening, and automated evaluation, significantly reducing manual recruitment effort.",
        "Optimized PostgreSQL database schemas, implemented Redis caching strategies, and improved API performance for high-traffic endpoints handling thousands of requests.",
        "Developed reusable and responsive UI components using Next.js, Redux, Tailwind CSS, and RTK Query while collaborating closely with cross-functional teams to deliver production-ready features.",
        "Integrated third-party AI services and contributed to the architecture of scalable backend systems following clean coding practices and modular design principles."
      ]
    },
    {
      role: "Backend Developer",
      organization: "Mudraksh & McShaw Tech LLP",
      duration: "Dec 2024 - Jun 2025",
      location: "Noida, India",
      description: [
        "Developed Python-based microservices and RESTful APIs using Flask for an algorithmic trading platform focused on portfolio analytics and performance reporting.",
        "Processed large volumes of daily trading data using NumPy and Pandas to calculate financial metrics including ROI, Calmar Ratio, Sharpe Ratio, and Maximum Drawdown.",
        "Integrated Redis caching and WebSocket communication to provide low-latency real-time market updates and improve application responsiveness.",
        "Containerized backend services using Docker and managed MongoDB databases for efficient storage and retrieval of historical trading data.",
        "Collaborated with traders and internal stakeholders to implement new analytical features, automate reporting workflows, and enhance overall platform reliability."
      ]
    },
    {
      role: "Software Developer",
      organization: "DigiVista InfoTech India",
      duration: "Mar 2024 - Aug 2024",
      location: "India",
      description: [
        "Developed RESTful APIs using Node.js and Express.js for a scalable flight booking platform with secure JWT-based authentication and role-based authorization.",
        "Built responsive frontend modules using React.js, ensuring smooth user experiences across booking, authentication, and dashboard workflows.",
        "Integrated third-party APIs to fetch and process real-time flight information, improving booking accuracy and user experience.",
        "Designed and developed a Python-based PDF-to-Excel extraction utility that automated manual data entry and significantly improved processing efficiency.",
        "Participated in debugging, testing, code reviews, and feature implementation while gaining hands-on experience with Git, Agile development, and collaborative software engineering practices."
      ]
    }
  ];

  return (
    <div id="experience" className="main-experience-container p-5 border-2 border-[var(--border-color)] mb-5">
      <div className="investigation-timeline-heading mb-5">
        <h1 className='text-[var(--heading-color)] [font-family:var(--heading-font)] text-6xl font-bold'>
          Investigation Timeline
        </h1>
      </div>
      <div className='UI-container grid grid-cols-12 border-t-2 border-[var(--border-color)]'>
        {/* Left Column */}
        <aside className="col-span-3 border-r-2 border-[var(--border-color)] p-5 flex flex-col gap-10">
          <div className="image-container border-2 border-[var(--border-color)]">
            <img src="src\assets\experience.png" alt="" />
          </div>
          <div className='public-notice-container p-5 border-2 border-[var(--border-color)] flex flex-col items-center text-center bg-[var(--background-secondary)]'>
            <div className='heading-container mb-4 w-fit border-b-2 border-[var(--border-color)] [font-family:var(--label-font)] text-[var(--text-color)] text-2xl'>
              <h2>
                PERSONNEL DOSSIER
              </h2>
            </div>
            <div className="content-container mt-5">
              <span>
                <p className='[font-family:var(--body-font)] text-xl'>
                  This dossier documents a continuous pursuit
                  of software engineering excellence from
                  designing scalable backend architectures
                  to crafting intuitive user experiences and
                  AI-powered applications. Each project,
                  role, and challenge represents another
                  verified entry in an evolving technical record.
                </p>
              </span>
            </div>
            <div className="additional-details-container w-full mt-5">
              <div className="flex justify-between items-center border-b-2 border-[var(--border-color)] py-2">
                <h3>Status:</h3>
                <h3>Actively Looking for Opportunities</h3>
              </div>
              <div className="flex justify-between items-center border-b-2 border-[var(--border-color)]">
                <h3>Edition:</h3>
                <h3>2026</h3>
              </div>
            </div>
          </div>
        </aside>
        {/* Right Column */}
        <main className="col-span-9 p-5">
          <div className="experience-heading-container p-5 border-b-2 border-[var(--border-color)]">
            <h1 className='w-fit text-[var(--heading-color)] [font-family:var(--heading-font)] text-5xl'>
              Tracing every role, responsibility, and milestone
            </h1>
          </div>
          <div className='experience-cards-container p-5 flex flex-col items-center gap-5 mt-5'>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                role={experience.role}
                organization={experience.organization}
                duration={experience.duration}
                location={experience.location}
                description={experience.description}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Experience