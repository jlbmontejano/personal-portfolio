import { MenuOption, SocialNetwork, TechStack, WorkExperience } from "../types";

export const MENU_OPTIONS: MenuOption[] = [
	{ name: "About Me", scrollTo: "about-me" },
	{ name: "Work Experience", scrollTo: "work-experience" },
	// { name: "PROJECTS", scrollTo: "projects" },
	{ name: "Other", scrollTo: "other" },
];

export const TECH_STACK: TechStack[] = [
	{
		title: "Languages",
		data: ["HTML, CSS & JavaScript", "Typescript", "SQL", "Swift"],
	},
	{
		title: "Frameworks & Libraries",
		data: [
			"React",
			"Vue",
			"NodeJS",
			"Express",
			"SwiftUI",
			"Tailwind",
			"Prisma",
		],
	},
	{ title: "Databases", data: ["PostgreSQL", "Cloud Firestore"] },
	{
		title: "Technical Skills",
		data: ["Git", "GitHub Actions", "DigitalOcean", "REST APIs"],
	},
];

export const WORK_EXPERIENCE: WorkExperience[] = [
	{
		number: "01",
		company: "Sportsminers",
		position: "Full Stack Developer",
		fromDate: "Oct 2023",
		toDate: "Jan 2025",
		technologies:
			"Typescript, React, Node.js, PostgreSQL, Prisma, TailwindCSS",
		tasks: [
			"Architected the foundational structure for an internal basketball player scouting application",
			"Implemented secure user authentication system and responsive multi-page UI from the ground up",
			"Recommended simplified tech stack over complex cloud services, reducing infrastructure costs and improving development velocity",
			"Set up automated GitHub Actions CI/CD pipeline for seamless deployment to DigitalOcean, reducing deployment time by 80%",
		],
	},
	{
		number: "02",
		company: "IT Nora",
		position: "Full Stack Developer",
		fromDate: "Mar 2023",
		toDate: "Oct 2023",
		technologies: "Typescript, Vue, Node.js, Google Firestore, TailwindCSS",
		tasks: [
			"Developed key components for company's landing page including interactive contact forms and client portfolio showcase implementing a responsive design",
			"Incorporated extensive validation mechanisms to streamline data collection and ",
			"Digitized complex government forms for Army veteran aid application system, implementing comprehensive validation logic to ensure data integrity and compliance",
			"Built profile editing interface for published social media app Catch Zone, enabling users to update and manage their account information",
		],
	},
	{
		number: "03",
		company: "Huard Technology Services",
		position: "iOS App Developer",
		fromDate: "Aug 2022",
		toDate: "Mar 2023",
		technologies: "Swift, SwiftUI",
		tasks: [
			"Contract-based job; self-taught iOS development using Swift/SwiftUI to deliver client project, transitioning from web technologies with no prior mobile development experience",
			"Developed iOS application for snow-making machine monitoring, implementing Bluetooth communication protocol to parse and display real-time binary data from industrial equipment",
			"Designed intuitive interface with streamlined navigation to make complex machine data accessible to non-technical operators ",
		],
	},
];

export const PROJECTS = [];

export const SOCIAL_NETWORKS: SocialNetwork[] = [
	{ name: "LinkedIn", link: "https://www.linkedin.com/in/jlbmontejano/" },
	// { name: "GitHub", link: "https://github.com/jlbmontejano" },
];
