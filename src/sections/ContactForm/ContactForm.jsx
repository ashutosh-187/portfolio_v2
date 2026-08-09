import React, { useState } from 'react'
import CustomButton from '../../components/Button/Button/CustomButton';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsAsterisk } from "react-icons/bs";

function ContactForm() {

    const [formData, setFormData] = useState({
        name: "",
        subject: "",
        message: "",
    });

    const [result, setResult] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((previous) => ({ ...previous, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");

        const submission = new FormData(event.target);
        submission.append("access_key", import.meta.env.VITE_API_KEY);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: submission,
            });

            const data = await response.json();

            if (data.success) {
                setResult("Letter Sent Successfully");
                event.target.reset();
                setFormData({ name: "", subject: "", message: "" });
            } else {
                console.log("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            console.log("Error", error);
            setResult("Something went wrong. Please try again.");
        }
    };

    return (
        <div id="contact" className="contact-form-container border-b-2 border-[var(--border-color)] p-5 mb-5">
            <div className="contact-form-heading text-center border-b-2 border-[var(--border-color)] mb-5">
                <h1 className="main-heading [font-family:var(--heading-font)] text-[var(--heading-color)] font-semibold text-5xl mb-5">ESTABLISH CONTACT</h1>
                <h2 className="text-2xl text-[var(--text-color)] [font-family:var(--label-font)] mb-5">For inquiries, opportunities, and matters requiring technical attention.</h2>
            </div>

            <div className="form-container p-5 flex flex-col gap-8 lg:flex-row lg:items-stretch">

                <form onSubmit={handleSubmit} className="flex flex-col border border-[var(--border-color)] bg-[var(--background-color)] p-6 w-full lg:w-[65%]">
                    <span className="mb-6 w-fit bg-[var(--primary-color)] px-3 py-2 [font-family:var(--label-font)] text-xs font-bold uppercase tracking-wider text-[var(--text-light-color)]">Exhibit A: Letter To The Editor</span>

                    <label htmlFor="name" className="[font-family:var(--label-font)] text-xs font-bold uppercase tracking-wider text-[var(--heading-color)]">Informant Identity (Name)</label>
                    <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Alias acceptable" required className="mt-3 mb-6 border-b border-[var(--border-light-color)] bg-transparent pb-2 [font-family:var(--mono-font)] text-sm text-[var(--text-color)] outline-none transition-colors duration-200 placeholder:text-[var(--text-muted-color)] focus:border-[var(--border-color)]" />

                    <label htmlFor="subject" className="[font-family:var(--label-font)] text-xs font-bold uppercase tracking-wider text-[var(--heading-color)]">Subject</label>
                    <input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} placeholder="Project Inquiry, Job Offer..." required className="mt-3 mb-6 border-b border-[var(--border-light-color)] bg-transparent pb-2 [font-family:var(--mono-font)] text-sm text-[var(--text-color)] outline-none transition-colors duration-200 placeholder:text-[var(--text-muted-color)] focus:border-[var(--border-color)]" />

                    <label htmlFor="message" className="[font-family:var(--label-font)] text-xs font-bold uppercase tracking-wider text-[var(--heading-color)]">The Story (Message)</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Type the narrative here..." required className="mt-3 mb-6 flex-1 min-h-[140px] resize-none border border-[var(--border-light-color)] bg-transparent p-3 [font-family:var(--mono-font)] text-sm text-[var(--text-color)] outline-none transition-colors duration-200 placeholder:text-[var(--text-muted-color)] focus:border-[var(--border-color)]" />

                    <CustomButton type="submit" buttonLabel="Send The Letter" className="ml-auto" />

                    {result && (
                        <span className="mt-4 ml-auto [font-family:var(--label-font)] text-xs font-bold uppercase tracking-wider text-[var(--text-muted-color)]">{result}</span>
                    )}
                </form>

                <div className="image-and-icons flex flex-col gap-6 w-full lg:w-[35%]">
                    <div className="image-container flex flex-1 items-center justify-center border border-[var(--border-color)] bg-[var(--background-secondary)] p-3 overflow-hidden">
                        <img src="src/assets/contact.png" alt="Contact illustration" className="h-full w-full object-cover" />
                    </div>

                    <div className="icon-container flex items-center justify-center gap-5">
                        <div className="group relative">
                            <a href="https://linkedin.com/in/ashutosh-187" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center border border-[var(--border-color)] text-lg text-[var(--heading-color)] transition-colors duration-200 hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white"><FaLinkedinIn /></a>
                            <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[var(--primary-color)] px-2 py-1 [font-family:var(--label-font)] text-[10px] font-bold uppercase tracking-wider text-[var(--text-light-color)] opacity-0 transition-opacity duration-200 group-hover:opacity-100">@ashutosh-187</span>
                        </div>

                        <div className="group relative">
                            <a href="https://github.com/ashutosh-187" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center border border-[var(--border-color)] text-lg text-[var(--heading-color)] transition-colors duration-200 hover:border-[#181717] hover:bg-[#181717] hover:text-white"><FaGithub /></a>
                            <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[var(--primary-color)] px-2 py-1 [font-family:var(--label-font)] text-[10px] font-bold uppercase tracking-wider text-[var(--text-light-color)] opacity-0 transition-opacity duration-200 group-hover:opacity-100">@ashutosh-187</span>
                        </div>

                        <div className="group relative">
                            <a href="mailto:work.withashutosh1807@gmail.com" className="flex h-11 w-11 items-center justify-center border border-[var(--border-color)] text-lg text-[var(--heading-color)] transition-colors duration-200 hover:border-[#EA4335] hover:bg-[#EA4335] hover:text-white"><SiGmail /></a>
                            <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[var(--primary-color)] px-2 py-1 [font-family:var(--label-font)] text-[10px] font-bold uppercase tracking-wider text-[var(--text-light-color)] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                                work.withashutosh1807@gmail.com
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center w-full p-5 text-4xl gap-4">
                <BsAsterisk />
                <BsAsterisk />
                <BsAsterisk />
            </div>
        </div>
    )
}

export default ContactForm