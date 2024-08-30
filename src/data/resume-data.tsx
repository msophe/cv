import {
  AmbitLogo,
  ClevertechLogo,
  Minimal,
  WakandiLogo,
  PortsAuthoritylogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Abraham Msofe",
  initials: "AM",
  location: "Dar es salaam, Tanzania, EAT",
  locationLink: "https://maps.app.goo.gl/rqFyNd5dxBYkGLxv6",
  about:
    "A Junior Full Stack Engineer specializing in developing secure and compliant digital payment solutions for the informal sector",
  summary:
    "As a Junior Full Stack Engineer, I have successfully worked on multiple products doing well in the market. I work mostly with JavaScript, Node.js, TypeScript and MongoDB. I have over 2 years of experience in working with global companies all around the world.",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "ryannurru@gmail.com",
    tel: "+255 673590333",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/msophe",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abraham-msofe-917687229",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Unique Academy",
      degree: "Bachelor's Degree Information Security",
      start: "2024",
      end: "2027",
    },
  ],
  work: [
    {
      company: "Wakandi",
      link: "https://wakandi.com",
      badges: ["Onsite"],
      title: "Technical Support officer",
      logo:WakandiLogo,
      start: "5/2023",
      end: "Present",
      description:
        "Key contributor to the digitization of Tanzania's informal sector through PSP licensed by the Bank of Tanzania. Developed and implemented robust digital payment systems, provided end-to-end technical support, and managed system administration. Ensured strict compliance with financial regulations while enhancing customer onboarding processes. Technologies: React, JavaScript, POSTGRESQL, RESTAPIs",
    },
    {
      company: "Wakandi",
      link: "https://wakandi.com",
      badges: ["Onsite"],
      title: "Customer Technical Support Intern",
      logo:WakandiLogo,
      start: "10/2022",
      end: "4/2023",
      description:
        "Key contributor to the digitization of Tanzania's informal sector through PSP licensed by the Bank of Tanzania. Developed and implemented robust digital payment systems, provided end-to-end technical support, and managed system administration. Ensured seamless usage of PSP system providing smooth customer onboarding and technical support while enhancing customer onboarding processes. Skills: CRM Software, Data Analysis and Processing, lead generation, customer support",
    },
    {
      company: "Tanzania Ports Authority",
      link: "https://www.ports.go.tz/",
      badges: ["Onsite"],
      title: "IT Support Intern",
      logo: PortsAuthoritylogo,
      start: "7/2022",
      end: "10/2022",
      description:
        "The leading entity in port management for Tanzania, overseeing the efficient handling and operation of maritime activities. Playing a pivotal role in facilitating trade, transportation, and logistics, ensuring smooth cargo handling, vessel operations and port services. Ensured seamless daily operations by providing technical assistance, optimizing network infrastructure, and developing innovative software solutions. Technologies: Boostrap, Tailwind CSS, Php, MYSQL",
    },
  ],
  skills: [
    "JavaScript",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "MONGODB",
    "API development",
    "Technical IT Support",
    "Data Protection",
  ],
  
  projects: [
    {
      title: "ARchive",
      techStack: [
        "Side Project",
        "JavaScript",
        "React",
        "Node js",
        "MongDB",
      ],
      description: "An intuitive platform that assists to record and maintain electronic inventory for large organizations",
      logo:WakandiLogo,
      link: {
        label: "eims.net",
        href: "https://eims.net",
      },
    },
    {
      title: "FANISI",
      techStack: [
        "Client Project",
        "JavaScript",
        "CMS and CRM",
        "RESTPAPIs",
        "React",
      ],
      description: "Design and implemeted a database solution for seamless data storage and sharing between different platforms",
      logo:WakandiLogo,
      link: {
        label: "fanisiprogram.com",
        href: "https://fanisiprogram.com",
      },
    },
  ],
} as const;
