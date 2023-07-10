import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import pizza from '../assets/pizza.png'
import codepen from '../assets/codepen.png'
import kbc from '../assets/kbc.png'

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Open-Source Contributor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Open Source Contributor",
    company_name: "HacktoberFest'22",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Oct 2022 - Nov 2022",
    points: [
      "Successfully participated in Hacktoberfest 2022 and achieved personal milestones.",
      "Merged a total of 7 pull requests out of 4, showcasing a high level of contribution and involvement.",
      "Enjoyed the process of solving random issues and providing assistance to fellow developers, finding it both enjoyable and fulfilling.",
      "Gained valuable experience and learning by overcoming challenges, making mistakes, and actively issuing pull requests, further enhancing skills in the realm of open source development.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Anjali's dedication and talent in web development were evident during Hacktoberfest 2022. She merged 7 pull requests, showcasing her commitment and problem-solving skills.",
    name: "Sahil Sharma",
    designation: "Mentor",
    company: "HacktoberFest'22",
    image: "https://avatars.githubusercontent.com/u/76551267?v=4",
  },
  {
    testimonial:
      "Anjali fearlessly tackled challenges and made valuable contributions during Hacktoberfest 2022. Her growth and positive attitude make her a promising talent in web development.",
    name: "Priya Patel",
    designation: "Mentor",
    company: "HacktoberFest'22",
    image: "https://avatars.githubusercontent.com/u/29281387?v=4",
  },
  {
    testimonial:
      "Anjali's remarkable journey in web development shines through her 7 merged pull requests during Hacktoberfest 2022. Her passion and drive will lead to great success.",
    name: "Rahul Gupta",
    designation: "Mentor",
    company: "HacktoberFest'22",
    image: "https://avatars.githubusercontent.com/u/220749?v=4",
  },
];

const projects = [
  {
    name: "Food Ordering App",
    description:
      "A React-based Food Ordering App: Simplifying online food ordering with a seamless user experience, customizable orders, and real-time updates.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: pizza,
    source_code_link: "https://github.com/anjz20/Food-Ordering-App",
  },
  {
    name: "Code Pen Editor",
    description:
      "A React-based CodePen-Editor: Write, test, and share code snippets with ease using this dynamic and collaborative web application.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "codemirror",
        color: "pink-text-gradient",
      },
    ],
    image: codepen,
    source_code_link: "https://github.com/anjz20/CodePen-Editor",
  },
  {
    name: "Kaun Banega Crorepati",
    description:
      "React-powered KBC Game: Experience the excitement of Kaun Banega Crorepati with this interactive web application, featuring challenging questions, lifelines, and real-time scoring.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: kbc,
    source_code_link: "https://github.com/anjz20/KaunBanegaCrorepati",
  },
];

export { services, technologies, experiences, testimonials, projects };
