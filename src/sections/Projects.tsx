import taskMate from "@/assets/images/task-mate.png";
import dataExplorer from "@/assets/images/data-explorer.png";
import lhewta from "@/assets/images/lhewta.png";
import Image from "next/image";
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import GithubLogo from "@/assets/images/github-mark.png";

const portfolioProjects = [
  {
    company: "Academic Project",
    year: "2025",
    title: "TaskMate - Chatbot",
    results: [
      { title: "Chatbot task management" },
      { title: "Manual task management" },
      { title: "Secure data handling" },
    ],
    link: "https://github.com/mrbenboyy/chatbot-task-manager-frontend",
    image: taskMate,
  },
  {
    company: "Academic Project",
    year: "2025",
    title: "Data Explorer",
    results: [
      { title: "Upload CSV files" },
      { title: "Index and slice data" },
      { title: "Visualize data" },
    ],
    link: "https://github.com/mrbenboyy/data_explorer",
    image: dataExplorer,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "Lhewta",
    results: [
      { title: "Place orders" },
      { title: "Checkout" },
      { title: "Track orders" },
    ],
    link: "https://github.com/mrbenboyy/lhewta",
    image: lhewta,
  },
];

export const ProjectsSection = () => {
  return <section id="projects" className="pb-16 lg:py-24">
    <div className="container">
      <SectionHeader
        eyebrow="Real-world Results"
        title="Featured Projects"
        description="See how my solutions have helped businesses achieve their goals."
      />
      <div className="flex flex-col mt-10 md:mt-20 gap-20">
        {portfolioProjects.map((project, index) => (
          <Card key={index} className="px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 pb-0 sticky" style={{
            top: `calc(64px + ${index * 40}px)`
          }}>
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 bg-clip-text text-transparent">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                <ul className="flex flex-col gap-4 mt-4 md:mt-5"> {project.results.map((result) => (
                  <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                    <CheckCircleIcon className="size-5 md:size-6" />
                    <span>{result.title}</span>
                  </li>
                ))}
                </ul>
                <a href={project.link}>
                  <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                    <span>View Project</span>
                    <ArrowUpRightIcon className="size-4" />
                  </button>
                </a>
              </div>
              <div className="relative">
                <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center mt-4">
        <a className="relative" href="https://github.com/mrbenboyy" target="_blank">
          <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
          <span className="fold-bold font-serif relative inline-flex items-center gap-2 md:gap-5 h-full w-full rounded border-2 border-black bg-white px-3 py-2 md:px-28 text-base md:text-2xl font-medium text-black transition duration-100 hover:bg-emerald-300 hover:text-gray-950">
            <Image src={GithubLogo} alt="github logo" className="size-5 md:size-7" />
            Show more
          </span>
        </a>
      </div>
    </div>
  </section>;
};
