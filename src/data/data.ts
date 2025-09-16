import goeasyLogo from "../assets/goeasy-logo.png";
import vlinkLogo from "../assets/vlink-logo.png";
import syncmasterImg from "../assets/syncmaster_photo.png";
import shellImg from "../assets/shell_photo.jpg"
import typeTestImg from "../assets/type-test_photo.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },

  {
    name: "Projects",
    hash: "#projects",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Python",
  "Django",
  "Java",
  "Spring Boot",
  "C/C++",
  "AWS"
] as const;

export const experiencesData = [
  {
    title: "Frontend Developer Intern",
    location: "Mississauga, ON",
    companyName: "goeasy ltd.",
    description: `Architected a scalable relational content model in Contentful to support a dynamic frontend for goeasy’s loan
application web app, reducing the marketing team’s dependency on developer support for content updates.; Developed a custom React + TypeScript Contentful app with an intuitive UI, enabling marketing team to easily define
conditions for rendering a question in goeasy’s loan application web app.;Optimized Next.js frontend performance in the goeasy Connect web app by streamlining API calls,
reducing load times by ∼300 ms and improving responsiveness for thousands of concurrent users.;Automated data extraction and JSON transformation for a key component of the easyfinancial web app serving
60,000+ weekly users, ensuring data integrity and saving 7.5 hours of manual effort.`,
    icon: goeasyLogo,
    date: "Jan. 2024 - Aug. 2024",
  },
  {
    title: "Business Analyst Intern",
    location: "Mississauga, ON",
    companyName: "goeasy ltd.",
    description: `Collaboratively developed a Business Capability Model through stakeholder interviews, identifying critical areas
and gaps across the organization to enable informed resource allocation.; Championed the Excel automation initiative by leveraging Excel formulas, tables and automation scripts written in
TypeScript, resulting in a streamlined workflow and 3x increase in productivity.;Gathered and consolidated business requirements from multiple teams across the organization, translating them
into clear user stories in Jira to improve sprint planning and delivery.;Compiled stakeholder insights into PowerPoint and Excel artifacts, including one presented to C-level leadership.`,
    icon: goeasyLogo,
    date: "Sep. 2023 - Dec. 2023",
  },
  {
    title: "Backend Developer Intern",
    location: "Gurugram, HR",
    companyName: "VLink Inc.",
    description: `Engineered backend services using Java Spring Boot to extract
    and deliver structured data via RESTful APIs.;Participated in SDLC tasks 
    including development, integration, testing, and documentation of APIs.;
    Debugged backend services and ensured adherence to performance, logging, 
    and error-handling standards.`,
    icon: vlinkLogo,
    date: "May 2022 - Aug. 2022",
  },
] as const;

export const projectsData = [
  {
    title: "SyncMaster",
    githubLink: "https://github.com/Spitgranger/SyncMaster",
    description: `Created a platform for City of Hamilton, centralizing 500+ docs and digitizing contractor check-ins at 100+ work sites.`,
    tags: ["Next.js", "TypeScript", "Redux", "MUI", "Python", "AWS"],
    imageUrl: syncmasterImg,
  },
  {
    title: "Shell",
    githubLink: "https://github.com/akshitg3/Shell",

    description:
      "Created a shell interface supporting basic UNIX shell commands. Also has the history feature.",
    tags: ["C Programming Language"],
    imageUrl: shellImg,
  },
  {
    title: "Typing Test",
    githubLink: "https://github.com/akshitg3/Typing-Test",

    description:
      "Enables the users to test and improve their typing speed by typing random text.",
    tags: ["Python", "tkinter"],
    imageUrl: typeTestImg,
  },
] as const;
