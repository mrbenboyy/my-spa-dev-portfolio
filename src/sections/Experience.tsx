import SectionHeader from "@/components/SectionHeader"
import { Fragment } from "react"

const experiences = [{
    position: "Web Developer",
    company: "ONDA",
    date: "May - Jun 2024",
    city: "Nouaceur, Morocco",
    taskDescription: "Built a website for the company using Laravel; The web app gives the admin the ability to manage the macarons (vehicle access permits); they can add more users and view their history."
}, {
    position: "Web Developer",
    company: "Allrepair",
    date: "Feb - Mar 2023",
    city: "Berrechid, Morocco",
    taskDescription: "Built an E-commerce website for a local store using Wordpress and Woocommerce; customers can order products, purchase and track them."
},
]

const Experience = () => {
    return (
        <section className="container">
            <SectionHeader
                eyebrow="My Experiences"
                title="Where I&apos;ve Been Employed"
            />
            <div className="mt-10 md:mt-16">
                {experiences.map((experience, index) => (
                    <Fragment key={index}>
                        <div className="md:grid md:grid-cols-5 mb-5 py-5">
                            <div className="md:col-span-2">
                                <h3 className="md:mb-2 font-semibold">
                                    <span>{experience.position}, </span>
                                    <span className="text-emerald-300">{experience.company}</span>
                                </h3>
                                <p className="text-white/60 text-sm italic"> {experience.date} / {experience.city} </p>
                            </div>
                            <div className="mt-3 md:mt-0 md:col-span-3 font-light text-white/80 tracking-wider">
                                {experience.taskDescription}
                            </div>
                        </div>
                        <hr className="border-t-2 border-white/5"/>
                    </Fragment>
                ))}
            </div>
        </section>
    )
}

export default Experience