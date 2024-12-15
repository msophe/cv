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
  avatarUrl: "https://avatars.githubusercontent.com/u/172833749?v=4",
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
      title: "Onboarding Coordinator",
      logo:WakandiLogo,
      start: "10/2024",
      end: "Present",
      description:
        "Leading the onboarding team, ensuring a smooth onboarding experience for new clients. Setting up Accounts and services and provide training and resources to ensure successful adoption."
    },
    {
      company: "Wakandi",
      link: "https://wakandi.com",
      badges: ["Onsite"],
      title: "Technical Support",
      logo:WakandiLogo,
      start: "5/2023",
      end: "9/2024",
      description:
        "Transitioned to fulltime technical support, Offered guidance to clients on system usage, Assisted in troubleshooting and improving system features. Provided technical guidance to team members to enhance their overall performance."
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
      title: "Fanisi",
      techStack: [
        "JavaScript",
        "HTML/CSS",
        "CRM",
        "Web design",
      ],
      description: "Designed and implemented a crm solution for client communication and data management",
      logo:WakandiLogo,
      link: {
        label: "fanisiprogram.com",
        href: "https://fanisiprogram.com",
      },
    },
    {
      title: "AFL Insurance",
      techStack: [
        "Tailwind CSS",
        "JavaScript",
        "API design",
        "React",
      ],
      description: "Designed a dynamic website for client insurance services and coupled it with a crm solution for data management",
      logo:WakandiLogo,
      link: {
        label: "aflinsurance.co.tz",
        href: "https://aflinsurance.co.tz",
      },
    },
  ],
} as const;
