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
    "A Backend developer passionate in building digital solutions that make an impact in the community",
  summary:
    "A dedicated backend developer with over 2 years of experience, I specialize in building scalable and efficient server-side solutions. I have successfully contributed to multiple projects that are thriving in both local and global markets. I’m committed to continuous learning and solving complex challenges to bring impactful solutions to life.",
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
      school: "National Institute of Transport",
      degree: "Bachelor's Degree in Information Technology",
      start: "2022",
      end: "2025",
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
        "Focused on troubleshooting technical challenges and ensuring customer satisfaction through timely support and problem resolution. Provided first-level technical assistance to clients, troubleshoot issues, and  handled escalation complex challenges.",
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
        "Maintained smooth operation of the organization’s IT systems by troubleshooting technical issues and providing timely solutions. Assisted with hardware, software, and network problems. Also monitored system performance, installed updates, and provided technical guidance to enhance overall productivity",
    },
  ],
  skills: [
    "JavaScript",
    "Node.js",
    "TypeScript",
    "Product Design",
    "MongoDB",
    "API development",
    "Next.js",
    "API development",
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
