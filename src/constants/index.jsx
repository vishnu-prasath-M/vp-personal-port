import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandHtml5, } from "react-icons/tb";
import { SiCss3, SiDjango, SiMysql } from "react-icons/si";
import { DiPython } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  // { label: "Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Mohammed Yusuf Jumail M",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate frontend and backend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences for over a decade.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    websitelink: "https://yusufjumail.netlify.app/",
  },
  {
    id: 2,
    name: "Spotstar Platform",
    description:
      "A combination of SpotStar would create a comprehensive entertainment platform offering both music streaming and video content.",
    image: projectImage2,
    websitelink: "https://myspotstar.netlify.app/",
  },
  {
    id: 3,
    name: "Weather App",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
    image: projectImage3,
    websitelink: "https://weatheryusuf.netlify.app/",
  },
];

export const BIO = [
  "I'am studied computer science at the University of SSM College of Engineering, from which i'm graduated in 2024. Following my education, i'm honed my craft and expertise over the course of 6 months at QSpiders., where i'm immersed myself in the world of frontend development and backend development.",
  "As a multi-disciplinary frontend developer, my brings a wealth of skills and expertise to my work. From my deep understanding of HTML, CSS, and JavaScript, Python, SQL to my proficiency in modern frameworks like Django and React, i'm possesses a versatile skill set that allows me to craft stunning and unforgettable web experiences for my audiences alike.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React.JS",
    experience: "6 months",
  },
  {
    icon: <TbBrandHtml5 className="text-4xl text-orange-600 lg:text-5xl" />,
    name: "HTML5",
    experience: "1.5+ years",
  },
  {
    icon: <SiCss3 className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "CSS3",
    experience: "1.5+ years",
  },
  {
    icon: <IoLogoJavascript className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "JavaScript",
    experience: "1+ years",
  },
  {
    icon: <DiPython className="text-4xl text-yellow-300 lg:text-5xl" />,
    name: "Python",
    experience: "6+ months",
  },
  {
    icon: <SiMysql className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "MySQL",
    experience: "6+ months",
  },
  {
    icon: <SiDjango className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Django",
    experience: "6+ months",
  },
];

export const EXPERIENCES = [
  {
    title: "Lead Frontend Developer",
    company: "Innovative Tech Solutions",
    duration: "July 2020 - Present",
    description:
      "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
  },
  {
    title: "Frontend Engineer",
    company: "Digital Creations",
    duration: "February 2016 - June 2020",
    description:
      "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
  },
  {
    title: "Junior Web Developer",
    company: "Bright Future Technologies",
    duration: "August 2014 - January 2016",
    description:
      "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "SSM College of Engineering",
    duration: "August 2020 - May 2024",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackerRank, where I developed several web applications using HTML, CSS, and JavaScript. Completed a senior project on developing an e-commerce platform. Graduated with a high CGPA.",
  },
  {
    degree: "Higher Secondary School Certificate",
    institution: "Nandha Matric Hr Sec School",
    duration: "June 2019 - April 2020",
    description:
      "Completed Higher Secondary School Certificate (HSC) with a focus on core subjects like Mathematics, Physics, and Computer Science, building a strong foundation in analytical and problem-solving skills.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
