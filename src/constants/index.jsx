import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

// import projectImage1 from "../assets/project1.jpeg";
import projectImage1 from "../assets/Portfoli pr1.jpg";
// import projectImage2 from "../assets/project2.jpeg";
import projectImage2 from "../assets/DDpr2.jpg";
// import projectImage3 from "../assets/project3.jpeg";
import projectImage3 from "../assets/SL pr6.jpg";
import projectImage4 from "../assets/BM pr4.jpg";
import projectImage5 from "../assets/Udemy pr8.jpg";
import projectImage6 from "../assets/Nostra pr5.jpg";
import projectImage7 from "../assets/tripad pr7.jpg";

import certificateimg from "../assets/merncertificate.jpg"



import { RiTailwindCssLine } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandHtml5, } from "react-icons/tb";
import { SiCss3 } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
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
  name: "Vishnu Prasath M",
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
    websitelink: "https://vp-personal-portfolio.vercel.app/",
  },
  {
    id: 2,
    name: "Daily Delights E-Commerce",
    description:
      "Daily Delights is an e-commerce platform for groceries, offering easy shopping and fast delivery.",
    image: projectImage2,
    websitelink: "https://daily-delights-ecommerce2.onrender.com/",
  },
  {
    id: 3,
    name: "Storm Lens Weather App",
    description:
      "Storm Lens is a React-based weather app using the OpenWeatherMap API to display real-time weather data and forecasts.",
    image: projectImage3,
    websitelink: "https://weather-app-storm-lens.vercel.app/",
  },
  {
    id: 4,
    name: "Bulkify Mail",
    description:
      "Bulkify is a MERN-based platform that lets you send emails to multiple recipients simultaneously with ease",
    image: projectImage4,
    websitelink: "https://bulkify-mail-sender2.onrender.com/",
  },
  {
    id: 5,
    name: "Udemy Clone",
    description:
      "My Udemy clone is a MERN-based e-learning platform offering courses, video lectures, and interactive user engagement",
    image: projectImage5,
    websitelink: "https://vishnu-prasath-m.github.io/Udemy-clone-Weekly-Task1/",
  },
  {
    id: 6,
    name: "Nostra E-Commerce",
    description:
      "Nostra is a stylish and intuitive shopping platform designed for a seamless and engaging online buying experience",
    image: projectImage6,
    websitelink: "https://vishnu-prasath-m.github.io/Nostra-e-commerce-website/",
  },
  {
    id: 7,
    name: "Trip Advisor Clone",
    description:
      "My TripAdvisor clone is a travel platform that helps users explore destinations, read reviews, and book experiences",
    image: projectImage7,
    websitelink: "https://vishnu-prasath-m.github.io/TripAdvisor-clone/",
  },
];

export const BIO = [
  "I'am studied computer science at TDA College of Arts And Science, affiliated with Alagappa University, from which i'm graduated in 2024. Following my education, i'm honed my craft and expertise over the course of 3 months at Error Makes Clever., where i'm immersed myself in the world of frontend development and backend development.",
  "As a multi-disciplinary frontend developer, my brings a wealth of skills and expertise to my work. From my deep understanding of HTML, CSS, and JavaScript, MongoDB to my proficiency in modern frameworks like React, i'm possesses a versatile skill set that allows me to craft stunning and unforgettable web experiences for my audiences alike.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />, 
    name: "React.JS", 
    level: 80,
  },
  {
    icon: <TbBrandHtml5 className="text-4xl text-orange-600 lg:text-5xl" />, 
    name: "HTML5", 
    level: 90,
  },
  {
    icon: <SiCss3 className="text-4xl text-blue-600 lg:text-5xl" />, 
    name: "CSS3", 
    level: 85,
  },
  {
    icon: <IoLogoJavascript className="text-4xl sm:text-5xl lg:text-5xl text-yellow-400" />, 
    name: "JavaScript", 
    level: 75,
  },
  {
    icon: <RiTailwindCssLine className="text-4xl text-blue-500 lg:text-5xl" />, 
    name: "Tailwind CSS", 
    level: 90,
  },
  {
    icon: <DiNodejs className="text-4xl text-yellow-300 lg:text-5xl" />, 
    name: "Node.js", 
    level: 70,
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-500 lg:text-5xl" />, 
    name: "Express.js", 
    level: 65,
  },
  {
    icon: <SiRedux className="text-4xl text-blue-800 lg:text-5xl" />, 
    name: "Redux", 
    level: 60,
  },
  {
    icon: <SiMongodb className="text-4xl text-yellow-400 lg:text-5xl" />, 
    name: "MongoDB", 
    level: 70,
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
    degree: "Bachelor of Science in Computer Science",
    institution: "TDA College of Arts and Science",
    duration: "june 2021 - May 2024",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackerRank, where I developed several web applications using HTML, CSS, and JavaScript. Completed a senior project on developing an e-commerce platform. Graduated with a high CGPA.",
  },
  {
    degree: "Higher Secondary School Certificate",
    institution: "Government Hr Sec School",
    duration: "June 2019 - April 2021",
    description:
      "Completed Higher Secondary School Certificate (HSC) with a focus on core subjects like Mathematics, Physics, and Biology, building a strong foundation in analytical and problem-solving skills.",
  },
];

export const CERTIFICATIONS = [
  {
    title: "Full Stack Web Development Certification",
    image: certificateimg,
  },
]

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
