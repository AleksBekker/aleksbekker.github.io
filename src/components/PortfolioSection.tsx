import { XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import networkingImage from "../assets/networking.png";

type ProjectLink = {
  title: string;
  url: string;
};

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  summary: string;
  description: string;
  links: ProjectLink[];
  skillTags: string[];
};

const ProjectModal = ({
  project,
  isOpen,
  onClose,
}: {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/35 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-80 object-cover rounded-t-lg"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50  text-white rounded-full p-2 hover:bg-black/70 transition-colors"
          >
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="bg-white rounded-b-lg">
          <div className="p-6 md:p-8">
            <div className="mb-6">
              <span className="px-4 py-2 border border-red-300 rounded-full text-sm font-medium text-accent mb-4 inline-block">
                {project.category.charAt(0).toUpperCase() +
                  project.category.slice(1)}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {project.title}
              </h2>
            </div>

            <div className="prose max-w-none mb-8">
              <p className="text-gray-700 text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.links.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Project Links
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-red-700 transition-colors inline-flex items-center gap-2"
                    >
                      {link.title}
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {project.skillTags.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.skillTags.map((tag, index) => (
                    <span
                      key={index}
                      // className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                      className="px-3 py-1 border border-gray-400 text-gray-500 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const projects: Project[] = [
    {
      id: 1,
      title: "Alumni Networking Site",
      category: "web",
      image: networkingImage,
      summary:
        "A clean, minimalist networking platform with intuitive navigation.",
      description:
        "A comprehensive alumni networking platform designed to connect graduates from various institutions. The site features user profiles, messaging systems, event management, and job posting capabilities. Built with modern web technologies, it provides a seamless experience for users to maintain professional relationships and discover new opportunities within their alumni network.",
      links: [
        { title: "Live Demo", url: "#" },
        { title: "GitHub", url: "#" },
      ],
      skillTags: [
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "TailwindCSS",
      ],
    },
    {
      id: 2,
      title: "EzASM",
      category: "app",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      summary:
        "An assembly-like language designed for the classroom environment.",
      description:
        "EzASM is an educational programming language that simplifies assembly language concepts for students. It features a custom interpreter, debugging tools, and an intuitive IDE. The language abstracts complex assembly operations while maintaining the core learning objectives, making it perfect for computer science education. Includes comprehensive documentation and example programs.",
      links: [
        { title: "GitHub", url: "#" },
        { title: "Documentation", url: "#" },
      ],
      skillTags: [
        "C++",
        "Compiler Design",
        "Education Technology",
        "Parser Development",
      ],
    },
    {
      id: 3,
      title: "MACTA",
      category: "app",
      image:
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      summary:
        "A multi-language framework to unify analysis of single-cell RNA sequencing.",
      description:
        "MACTA (Multi-language Analysis of Cell Types and Annotations) is a comprehensive framework for single-cell RNA sequencing analysis. It bridges Python and R ecosystems, allowing researchers to leverage the best tools from both languages in a unified workflow. The framework includes standardized data structures, cross-language data exchange, and reproducible analysis pipelines.",
      links: [
        { title: "Research Paper", url: "#" },
        { title: "GitHub", url: "#" },
        { title: "Documentation", url: "#" },
      ],
      skillTags: [
        "Python",
        "R",
        "Bioinformatics",
        "Data Science",
        "RNA Sequencing",
      ],
    },
    {
      id: 4,
      title: "Fitness Tracker",
      category: "app",
      image:
        "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      summary: "A mobile fitness tracking app with personalized workout plans.",
      description:
        "A comprehensive fitness tracking application that helps users achieve their health goals through personalized workout plans and detailed progress analytics. Features include workout logging, nutrition tracking, progress visualization, social challenges, and integration with popular fitness devices. The app uses machine learning to adapt workout recommendations based on user performance and preferences.",
      links: [
        { title: "App Store", url: "#" },
        { title: "Google Play", url: "#" },
      ],
      skillTags: [
        "React Native",
        "MongoDB",
        "Express.js",
        "Machine Learning",
        "Health APIs",
      ],
    },
    {
      id: 5,
      title: "Restaurant Branding",
      category: "branding",
      image:
        "https://images.unsplash.com/photo-1581349485608-9469926a8e5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      summary: "Complete branding package for a modern restaurant.",
      description:
        "A comprehensive branding project for 'Harvest Table', a farm-to-table restaurant focusing on sustainable, locally-sourced ingredients. The project included logo design, menu layouts, packaging design, social media templates, and marketing materials. The visual identity emphasizes natural elements, clean typography, and warm color palettes that reflect the restaurant's commitment to fresh, organic cuisine.",
      links: [
        { title: "Behance Portfolio", url: "#" },
        { title: "Restaurant Website", url: "#" },
      ],
      skillTags: [
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Brand Strategy",
        "Print Design",
        "Digital Marketing",
      ],
    },
    {
      id: 6,
      title: "Smart Home App",
      category: "app",
      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      summary:
        "An intuitive smart home control app with customizable dashboards.",
      description:
        "A sophisticated smart home control application that unifies various IoT devices into a single, intuitive interface. Features include custom dashboard creation, automation rules, energy monitoring, security system integration, and voice control compatibility. The app supports major smart home protocols and provides detailed analytics on usage patterns and energy consumption.",
      links: [
        { title: "Live Demo", url: "#" },
        { title: "GitHub", url: "#" },
        { title: "Technical Documentation", url: "#" },
      ],
      skillTags: [
        "Flutter",
        "IoT",
        "Firebase",
        "Home Assistant",
        "Voice Recognition",
      ],
    },
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const ProjectCard = ({ project }: { project: Project }) => {
    return (
      <div
        key={project.id}
        className="group overflow-hidden rounded-xl shadow-md bg-white"
        onClick={() => openModal(project)}
      >
        <div className="relative h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 ease-in-out"
          />
          {/*<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button
              onClick={() => openModal(project)}
              className="px-6 py-2 bg-accent text-white rounded-full transform -translate-y-4 group-hover:translate-y-0 transition-transform hover:bg-red-700"
            >
              View Project
            </button>
          </div>*/}
        </div>
        <div className="p-6">
          <div className="flex justify-between">
            <span className="px-4 py-2 border border-gray-700 rounded-full text-sm font-medium text-gray-700">
              {project.category.charAt(0).toUpperCase() +
                project.category.slice(1)}
            </span>
            <button
              onClick={() => openModal(project)}
              className="px-4 py-2 rounded-full text-sm font-medium text-white bg-rpi-red hover:bg-red-700 transition-colors"
              // className="px-4 py-2 border border-red-300 rounded-full text-sm font-medium text-accent hover:bg-gray-50 transition-colors"
            >
              View Project
            </button>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
            {project.title}
          </h3>
          <p className="text-gray-700">{project.summary}</p>
        </div>
      </div>
    );
  };

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            My Portfolio
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {["all", "web", "app", "branding"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === filter ? "bg-accent text-white" : "bg-rpi-silver text-gray-700 hover:text-white hover:bg-red-400"}`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>

        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </section>
  );
};
