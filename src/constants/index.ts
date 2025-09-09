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
		data: ["HTML, CSS & JavaScript", "Typescript", "SQL"],
	},
	{
		title: "Frameworks & Libraries",
		data: ["ReactJS", "Vue", "NodeJS", "Express", "Prisma"],
	},
	{ title: "Databases", data: ["PostgreSQL", "Cloud Firestore"] },
	{ title: "Technical Skills", data: ["GIT", "CI/CD", "REST APIs"] },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
	{
		number: "01",
		company: "Sportsminers",
		position: "Full Stack Developer",
		fromDate: "Oct 2023",
		toDate: "Jan 2025",
		technologies:
			"Typescript, ReactJS, Node.js, Google Cloud Platform, PostgreSQL, Prisma, TailwindCSS",
		tasks: [
			"Led the development of this web app from inception, ensuring good coding practices, like maintainability, scalability and readability",
			"Advised the client on a better approach for his project, increasing development speed and reducing projected costs",
			"Implemented CI/CD pipelines greatly reducing code deployment time",
		],
	},
	{
		number: "02",
		company: "IT Nora",
		position: "Full Stack Developer",
		fromDate: "Mar 2023",
		toDate: "Oct 2023",
		technologies:
			"Typescript, Vue, Node.js, Google Cloud Playform, TailwindCSS",
		tasks: [
			"Led the development of company's official website, enhancing it’s online presence and client engagement through a modern, responsive design",
			"Incorporated extensive validation mechanisms to streamline data collection and ",
			"Developed advanced features for a social media application, significantly enhancing user interaction and increasing user satisfaction",
			"Diagnosed and resolved critical technical issues across various projects, leading to marked improvements in performance",
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
			"Contract-based job, responsible of creating, maintaining and deploying iOS apps according to the client’s needs",
			"Successfully delivered an application that facilitates real-time communication between iOS devices and snow-making machines, enabling efficient operational management and data exchange",
			"Demonstrated exceptional problem-solving skills in developing a user-friendly interface and ensuring seamless device integration",
		],
	},
];

export const PROJECTS = [];

export const SOCIAL_NETWORKS: SocialNetwork[] = [
	{ name: "LinkedIn", link: "https://www.linkedin.com/in/jlbmontejano/" },
	// { name: "GitHub", link: "https://github.com/jlbmontejano" },
];
