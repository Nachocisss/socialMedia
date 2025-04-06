import reactLogo from "../../assets/resume/reactLogo.png";
import jsLogo from "../../assets/resume/jsLogo.png";
import tsLogo from "../../assets/resume/tsLogo.png";
import nextLogo from "../../assets/resume/nextLogo.png";
import jestLogo from "../../assets/resume/jestLogo.png";
import nodeLogo from "../../assets/resume/nodeLogo.png";
import pythonLogo from "../../assets/resume/pythonLogo.png";
import javaLogo from "../../assets/resume/javaLogo.png";

export const technologies = [
  { src: reactLogo, alt: "React Logo", label: "React & React Native" },
  { src: jsLogo, alt: "JavaScript Logo", label: "JavaScript" },
  { src: tsLogo, alt: "TypeScript Logo", label: "TypeScript" },
  { src: nextLogo, alt: "Next.js Logo", label: "Next.js" },
  { src: jestLogo, alt: "Jest Logo", label: "Jest" },
  { src: nodeLogo, alt: "Node Logo", label: "Node" },
  { src: pythonLogo, alt: "Python Logo", label: "Python" },
  { src: javaLogo, alt: "Java Logo", label: "Java" },
];
export const experiences = [
  {
    title: "Mobile Developer Consultant",
    company: "Major Latin American Airline Holding",
    description:
      "Parallel Loyalty Projects for an airline involving both mobile app and website targeting the Brazilian market.",
    responsibilities: [
      "Development of various projects integrated into a main container.",
      "Developed design system and core app features as part of the enabling team.",
      "Simultaneously developed a complementary website.",
      "Multiple sprints as technical lead.",
    ],
    achievements: [
      "Delivered product to production in 6 months.",
      "App boasts high ratings across app stores.",
      "Ensured extensive testing and strong accessibility metrics.",
    ],
    stack: [reactLogo, tsLogo, nextLogo, jestLogo],
  },
  {
    title: "Mobile Developer Consultant",
    company: "Major Latin American Retail Chain Store",
    description:
      "Mobile Loyalty App for a multinational convenience store chain.",
    responsibilities: [
      "Mobile Developer of a project from scratch.",
      "Created a design system for the use of components by various teams.",
      "Post-production maintenance of the product.",
    ],
    achievements: [
      "Developed and delivered MVP within 6 months.",
      "Highly rated with over 3 million downloads.",
      "Multiple intensive cross-team programming sessions.",
    ],
    stack: [reactLogo, jsLogo, jestLogo],
  },
  {
    title: "Full Stack Developer Consultant",
    company: "National Infant Care and Nursery Company",
    description:
      "Web platform to support early childhood educators in Chile and Brazil.",
    responsibilities: [
      "Full stack development on a platform using micro services & micro front-end architecture.",
      "Conducted research and needs assessment through interviews and market studies.",
      "Facilitated alignment sessions with stakeholders.",
    ],
    achievements: [
      "Launched pilot platform tested in various early childhood centers.",
      "Developed integrated platform interfacing with various products.",
    ],
    stack: [reactLogo, tsLogo, javaLogo, nodeLogo],
  },
  {
    title: "Front End Mobile Developer & Co-creator",
    company: "App dBarrio",
    description: "Development of app for digitizing small merchants",
    responsibilities: [
      "Co-creation: Needs assessment, fundraising, and advertising management",
      "Front-end mobile development",
      "Showcases and presentations at various events",
    ],
    achievements: [
      "Best Academic Performance Award FESW 2020, UTFSM",
      "Semifinalists in the INCmty Prototype Competition at Tecnológico de Monterrey 2020",
      "Interviews on digital television and articles in print media",
    ],
    stack: [reactLogo, jsLogo, pythonLogo],
  },
];
export const skills = [
  {
    category: "Methodologies",
    items: [
      {
        title: "Agile: Scrum, Lean, and Kanban",
        description:
          "Skilled in adapting to change and driving iterative improvements.",
      },
      {
        title: "Principles: Clean code, SOLID, Design Patterns",
        description:
          "Dedicated to applying industry-standard principles for creating robust, maintainable, and scalable software solutions.",
      },
      {
        title: "Test-Driven Development (TDD)",
        description: "Ensuring robust and reliable software delivery.",
      },
    ],
  },
  {
    category: "Consulting",
    items: [
      {
        title: "Effective Stakeholder Management",
        description:
          "Ensuring clear communication and alignment with diverse project participants.",
      },
      {
        title: "Strong Problem-Solving",
        description:
          "Adept at identifying issues, developing solutions, and implementing effective resolutions.",
      },
      {
        title: "Analytical Thinker",
        description:
          "Proven ability to assess complex situations, gather insights, and make data-driven decisions.",
      },
    ],
  },
  {
    category: "Soft Skills",
    items: [
      {
        title: "Collaborative Team Player",
        description:
          "Fostering synergy and cooperation within diverse teams to achieve collective goals.",
      },
      {
        title: "Effective Communication",
        description:
          "Adept at conveying ideas clearly and persuasively across various stakeholders.",
      },
      {
        title: "Demonstrates Assertiveness",
        description:
          "In decision-making and advocating for project needs, ensuring objectives are met efficiently and effectively.",
      },
    ],
  },
];
