
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Manuel Galindez",
  initials: "MG",
  location: "Bogotá, Colombia, CO",
  locationLink: "https://www.google.com/maps/place/Bogotá",
  about: "Frontend and React Native developer.",
  summary: (
    <>
      Frontend-focused developer with 7+ years of experience building web and
      mobile applications. Passionate about performance, accessibility, and user
      experience. Strong advocate for remote work and open source software.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/12010942?v=4",
  personalWebsiteUrl: "https://jgalianoz-website.vercel.app/",
  contact: {
    email: "jgalianoz.dev@gmail.com",
    tel: "+57 319 717 5522",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/jgalianoz",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jgalianoz/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/jgalianoz",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: 'UPTP "JJ Montilla"',
      degree: "Advanced technician degree in informatics",
      start: "2015",
      end: "2017",
    },
    {
      school: "Platzi",
      degree: "Frontend Developer",
      start: "2016",
      end: "2017",
    },
  ],
  work: [
    {
      company: "Monoku",
      link: "https://monoku.com",
      badges: [
        "Remote",
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "AI",
        "React Native",
      ],
      title: "Frontend Developer",
      logo: "ConsultlyLogo",
      start: "2017",
      end: null,
      description: (
        <>
          Led teams and contributed to the success of various projects for
          clients across diverse industries. My responsibilities include:
          <ul className="list-inside list-disc">
            <li>
              Coordinating development teams to ensure efficient and
              high-quality project deliveries.
            </li>
            <li>
              Developing modern, scalable user interfaces using technologies
              like React and Remix.
            </li>
            <li>
              Mentoring developers, fostering technical and professional growth.
            </li>
            <li>
              Optimizing applications to maximize performance and enhance user
              experience.
            </li>
            <li>
              Collaborating with cross-functional teams to define and implement
              technical solutions.
            </li>
            <li>
              Integrating backend solutions with tools like Node.js and REST
              APIs.
            </li>
            <li>
              Applying the latest development trends and technologies to
              innovative projects.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "React/React Native/Next.js/Remix",
    "TypeScript",
    "Tailwind CSS",
    "Design Systems",
    "WebSockets",
    "React Query",
    "Zustand",
    "Jest/Testing Library",
    "Storybook",
    "Git",
    "Agile/Scrum",
  ],
  projects: [
    {
      title: "Jgalianoz Website",
      techStack: ["Astro", "Tailwind", "Vercel"],
      description: "A personal website showcasing my portfolio.",
      link: {
        label: "jgalianoz-website",
        href: "https://jgalianoz-website.vercel.app/",
      },
    },
    {
      title: "QR Code Generator",
      techStack: ["Javascript"],
      description: "An extension that you can use to generate a QR Code.",
      link: {
        label: "qr-code-generator",
        href: "https://marketplace.visualstudio.com/items?itemName=jgalianoz.qr-generator",
      },
    },
  ],
} as const;
