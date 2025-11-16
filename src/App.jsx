import React, { useState, useEffect } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Code,
  Layers,
  Zap,
  Cpu,
  Server,
  Globe,
  BarChart,
  FileText,
  TrendingUp,
  Eye,
  Terminal,
  Menu,
  X,
} from "lucide-react";

// --- CONFIGURATION LINKS ---
const LINK_GITHUB_MAIN = "https://github.com/manfredbaraka33";
const LINK_LINKEDIN = "https://www.linkedin.com/in/manfredbaraka";
const LINK_EMAIL = "manfredbaraka33@gmail.com";

const DEMO_ELOPYNEST = "https://elopynest.vercel.app/";
const DEMO_EDUSAFARI = "https://edusafari.vercel.app/";
const DEMO_RAG_NEWS = "https://news-tool-kappa.vercel.app/";
const DEMO_CHATCSV = "https://chatcsv-tau.vercel.app/";
const DEMO_CHATPDF = "https://chatpdf-sepia.vercel.app/";
const DRIVE_LINK_POWER_BI =
  "https://drive.google.com/drive/folders/1WwzHwrrymHBngtE3JRVpiqqFEzDkgiRb?dmr=1&ec=wgc-drive-globalnav-goto";

// --- PROJECT LINKS ---
const REPO_ELOPYNEST = "https://github.com/manfredbaraka33/elopynest";
const REPO_EDUSAFARI = "https://github.com/manfredbaraka33/edusafari";
const REPO_RAG_NEWS_FE = "https://github.com/manfredbaraka33/news-tool";
const REPO_RAG_CHATPDF = "https://github.com/manfredbaraka33/chatpdf";
const REPO_RAG_NEWS_BE = "https://github.com/manfredbaraka33/news-tool-backend";
const REPO_CHATCSV = "https://github.com/manfredbaraka33/chatcsv";

const DASHBOARD_NAMES = [
  "Amazing Sales Insights",
  "Full Project Dashboard",
  "Hospitality Metrics",
  "Sales Cost Analysis",
];

// --- PORTFOLIO DATA ---
const PORTFOLIO_DATA = {
  name: "Manfred Baraka",
  tagline: "Full-Stack AI Developer & Data Insights Engineer",
  aboutSummary:
    "I engineer robust, data-centric web applications using Django and React, specializing in scalable backends and intelligent user experiences. My core strength lies in integrating advanced ML/NLP models, like RAG systems and LLMs, into production-grade tools for powerful, real-time data insights.",
  contact: {
    email: LINK_EMAIL,
    github: LINK_GITHUB_MAIN,
    linkedin: LINK_LINKEDIN,
  },
  skills: {
    django: ["Django", "Django REST Framework (DRF)", "PostgreSQL", "Docker", "AWS/Railway/Vercel/Render"],
    frontend: ["React", "TailwindCSS", "Bootstrap"],
    dataScience: ["ML (Classification/Regression)", "NLP (LLMs, FastText)", "LangChain/LangGraph", "VectorDB", "Pandas", "Power BI/Excel"],
  },
  projects: [
    {
      title: "ElopyNest (Wellness Platform)",
      description: "A gamified Wellness platform for habit tracking, journaling, and mood scoring.",
      techStack: ["Django/DRF", "React", "TailwindCSS", "PostgreSQL", "LangChain"],
      liveDemoLink: DEMO_ELOPYNEST,
      codeLink: REPO_ELOPYNEST,
      icon: Zap,
      role: "Full-Stack (AI)",
    },
    {
      title: "Edusafari Platform (Education Portal)",
      description: "A comprehensive education portal for tracking institutions.",
      techStack: ["Django/DRF", "React", "TailwindCSS", "PostgreSQL"],
      liveDemoLink: DEMO_EDUSAFARI,
      codeLink: REPO_EDUSAFARI,
      icon: Globe,
      role: "Full-Stack",
    },
    {
      title: "News RAG Tool",
      description: "A conversational RAG system.",
      techStack: ["React", "FastAPI", "LangChain", "VectorDB", "Llama"],
      liveDemoLink: DEMO_RAG_NEWS,
      codeLink: REPO_RAG_NEWS_FE,
      backendCodeLink: REPO_RAG_NEWS_BE,
      icon: Cpu,
      role: "AI/ML (RAG)",
    },
    {
      title: "ChatPDF RAG System",
      description: "An intelligent Retrieval-Augmented Generation tool.",
      techStack: ["Python", "LangChain", "LLMs", "VectorDB", "Streamlit"],
      liveDemoLink: DEMO_CHATPDF,
      codeLink: REPO_RAG_CHATPDF,
      icon: FileText,
      role: "AI/ML (RAG)",
    },
    {
      title: "CSV/Data Analysis RAG Agent",
      description: "Analyze and chat with tabular data.",
      techStack: ["Pandas", "LLM Agents", "FastAPI", "Python", "LangGraph"],
      liveDemoLink: DEMO_CHATCSV,
      codeLink: REPO_CHATCSV,
      icon: TrendingUp,
      role: "Data/AI",
    },
    {
      title: "Data Visualization Dashboards",
      description: "A collection of four professional Power BI dashboards.",
      techStack: ["Power BI", "DAX", "SQL/Data Modeling", "Excel"],
      liveDemoLink: DRIVE_LINK_POWER_BI,
      codeLink: LINK_LINKEDIN,
      icon: BarChart,
      role: "Data Insights",
      dashboards: DASHBOARD_NAMES,
    },
  ],
};

// --- TAILWIND COLORS ---
const PRIMARY_COLOR = "bg-indigo-600";
const ACCENT_COLOR = "text-indigo-400";
const ACCENT_COLOR_HOVER = "hover:text-indigo-300";

// --- COMPONENTS ---

const Section = ({ id, children, className }) => (
  <section
    id={id}
    className={`min-h-screen py-16 md:py-24 px-4 sm:px-6 lg:px-8 flex flex-col justify-center ${className}`}
  >
    {children}
  </section>
);

const SkillPill = ({ children }) => (
  <span className={`inline-block ${PRIMARY_COLOR} text-white text-xs font-semibold px-3 py-1 rounded-full m-1 shadow-md`}>
    {children}
  </span>
);

const ProjectCard = ({ project }) => {
  const Icon = project.icon;
  const isDataViz = project.role === "Data Insights";
  const hasBackend = project.backendCodeLink;

  return (
    <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-indigo-700 rounded-xl shadow-lg dark:shadow-2xl hover:shadow-indigo-500/50 transition duration-300 transform hover:-translate-y-1">
      <div className="flex items-start mb-4">
        <Icon className={`${ACCENT_COLOR} w-8 h-8 mr-3 mt-1 flex-shrink-0`} />
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-snug">{project.title}</h3>
          <span className={`text-sm font-medium ${ACCENT_COLOR} opacity-75`}>{project.role}</span>
        </div>
      </div>
      <p className="mb-4 text-gray-700 dark:text-gray-400 text-sm">{project.description}</p>
      <div className="flex flex-wrap mb-4 h-24 overflow-y-auto">
        {project.techStack.map((tech) => (
          <SkillPill key={tech}>{tech}</SkillPill>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mt-2">
        {!isDataViz && (
          <>
            <a
              href={project.liveDemoLink}
              target="_blank"
              className={`${PRIMARY_COLOR} text-white font-semibold py-2 px-4 rounded-lg text-sm shadow-md hover:bg-indigo-700 transition`}
            >
              View Live Demo
            </a>
            <a
              href={project.codeLink}
              target="_blank"
              className={`text-sm ${ACCENT_COLOR} ${ACCENT_COLOR_HOVER} border border-indigo-500 hover:bg-indigo-500/10 py-2 px-4 rounded-lg`}
            >
              {hasBackend ? "Frontend Code" : "Source Code"}
            </a>
            {hasBackend && (
              <a
                href={project.backendCodeLink}
                target="_blank"
                className={`text-sm ${ACCENT_COLOR} ${ACCENT_COLOR_HOVER} border border-indigo-500 hover:bg-indigo-500/10 py-2 px-4 rounded-lg`}
              >
                Backend Code
              </a>
            )}
          </>
        )}
        {isDataViz && (
          <div className="w-full">
            <h4 className="text-md font-semibold text-gray-800 dark:text-gray-300 mb-2">Included Dashboards:</h4>
            <ul className="list-disc list-inside ml-2 mb-3">
              {project.dashboards.map((t, i) => (
                <li key={i} className="text-sm dark:text-gray-400">{t}</li>
              ))}
            </ul>
            <a
              href={project.liveDemoLink}
              target="_blank"
              className={`${PRIMARY_COLOR} text-white w-full py-2 px-4 rounded-lg text-sm shadow-md inline-flex items-center justify-center hover:bg-indigo-700 transition`}
            >
              <Eye className="w-4 h-4 mr-2" /> View All Dashboards
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

// --- NAVBAR ---
const Navbar = ({ activeSection }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id.substring(1)).scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 bg-opacity-95 dark:bg-opacity-95 z-50 shadow-lg dark:shadow-indigo-900/50">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-widest">
          {PORTFOLIO_DATA.name.split(" ")[0]}
        </span>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`transition-colors cursor-pointer font-medium ${ACCENT_COLOR_HOVER} ${
                activeSection === item.href.substring(1)
                  ? `${ACCENT_COLOR} border-b-2 border-indigo-600`
                  : "text-gray-900 dark:text-gray-200"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="block py-2 px-4 text-gray-900 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-indigo-800 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

// --- APP ---
export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((sec) => observer.observe(sec));

    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 antialiased font-sans transition-colors duration-300">
      <Navbar activeSection={activeSection} />

      <main className="pt-20">
        {/* HOME */}
        <Section id="home" className="bg-gray-100 dark:bg-gradient-to-br from-gray-900 to-gray-800 text-center">
          <p className={`${ACCENT_COLOR} text-xl font-semibold mb-4`}>Hello, I'm</p>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-4 text-gray-900 dark:text-white">
            {PORTFOLIO_DATA.name}
          </h1>
          <h2 className="text-3xl sm:text-4xl font-light italic text-gray-500 dark:text-gray-400 mb-8">
            {PORTFOLIO_DATA.tagline}
          </h2>
          <a
            href="#projects"
            className={`${PRIMARY_COLOR} text-white font-bold py-3 px-8 rounded-lg text-lg shadow-xl hover:bg-indigo-700 transition`}
          >
            Explore Work
          </a>
        </Section>

        {/* ABOUT */}
        <Section id="about" className="bg-white dark:bg-gradient-to-bl from-gray-900 to-gray-800">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6 border-b-4 border-indigo-600 pb-2 inline-block">
            <Code className="inline mr-3 w-8 h-8 text-indigo-600" /> About Me
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-400 mb-6">{PORTFOLIO_DATA.aboutSummary}</p>
        </Section>

        {/* SKILLS */}
        <Section id="skills" className="bg-gray-100 dark:bg-gradient-to-br from-gray-800 to-gray-900">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-10 border-b-4 border-indigo-600 pb-2 inline-block">
            <Layers className="inline mr-3 w-8 h-8 text-indigo-600" /> Core Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className={`text-3xl font-semibold mb-4 ${ACCENT_COLOR}`}>Full-Stack & Backend Engineering</h3>
              <div className="flex flex-wrap">
                {PORTFOLIO_DATA.skills.django.map((s) => (
                  <SkillPill key={s}>{s}</SkillPill>
                ))}
                {PORTFOLIO_DATA.skills.frontend.map((s) => (
                  <SkillPill key={s}>{s}</SkillPill>
                ))}
              </div>
            </div>
            <div>
              <h3 className={`text-3xl font-semibold mb-4 ${ACCENT_COLOR}`}>Data Science / AI/ML & Visualization</h3>
              <div className="flex flex-wrap">
                {PORTFOLIO_DATA.skills.dataScience.map((s) => (
                  <SkillPill key={s}>{s}</SkillPill>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" className="bg-white dark:bg-gradient-to-tr from-gray-900 to-gray-800">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-10 border-b-4 border-indigo-600 pb-2 inline-block">
            <Server className="inline mr-3 w-8 h-8 text-indigo-600" /> Featured Projects
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_DATA.projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" className="bg-gray-100 dark:bg-gradient-to-tl from-gray-800 to-gray-900 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6 border-b-4 border-indigo-600 pb-2 inline-block">
            <Terminal className="inline mr-3 w-8 h-8 text-indigo-600" /> Get In Touch
          </h2>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="flex flex-col items-center text-gray-700 dark:text-gray-200">
              <Mail className="w-10 h-10 mb-2" />
              <span className="text-lg">{PORTFOLIO_DATA.contact.email}</span>
            </a>
            <a href={PORTFOLIO_DATA.contact.github} target="_blank" className="flex flex-col items-center text-gray-700 dark:text-gray-200">
              <Github className="w-10 h-10 mb-2" />
              <span className="text-lg">GitHub</span>
            </a>
            <a href={PORTFOLIO_DATA.contact.linkedin} target="_blank" className="flex flex-col items-center text-gray-700 dark:text-gray-200">
              <Linkedin className="w-10 h-10 mb-2" />
              <span className="text-lg">LinkedIn</span>
            </a>
          </div>
        </Section>
      </main>
    </div>
  );
}
