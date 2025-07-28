export const MENU_OPTIONS = [
	{ name: "HOME", scrollTo: "home" },
	{ name: "ABOUT ME", scrollTo: "about-me" },
	{ name: "WORK EXPERIENCE", scrollTo: "work-experience" },
	// { name: "PROJECTS", scrollTo: "projects" },
	{ name: "OTHER", scrollTo: "other" },
];

export const TECH_STACK = [
	{ title: "Languages", data: ["HTML, CSS & JavaScript", "Typescript", "SQL"] },
	{
		title: "Frameworks & Libraries",
		data: ["ReactJS", "Vue", "NodeJS", "Express", "Prisma"],
	},
	{ title: "Databases", data: ["PostgreSQL", "Cloud Firestore"] },
	{ title: "Technical Skills", data: ["GIT", "CI/CD", "REST APIs"] },
];

export const WORK_EXPERIENCE = [
	{
		company: "Sportsminers",
		position: "Full Stack Developer",
		location: "Mexicali, MX",
		fromDate: "10/2023",
		toDate: "01/2025",
		technologies:
			"Typescript, ReactJS, Node.js, Google Cloud Platform, PostgreSQL, Prisma, TailwindCSS",
		tasks: [
			"Led the development of this web app from inception, ensuring good coding practices, like maintainability, scalability and readability; app is still in development",
			"Advised the client on a better approach for his project, increasing development speed and reducing projected costs by 10%",
			"Implemented CI/CD pipelines which reduced code deployment time from ~15 minutes to ~5 minutes",
		],
	},
	{
		company: "IT Nora",
		position: "Full Stack Developer",
		location: "Mexicali, MX",
		fromDate: "03/2023",
		toDate: "10/2023",
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
		company: "Huard Technology Services",
		position: "iOS App Developer",
		location: "Mexicali, MX",
		fromDate: "08/2022",
		toDate: "03/2023",
		technologies: "Swift, SwiftUI",
		tasks: [
			"Contract-based job, responsible of creating, maintaining and deploying iOS apps according to the client’s needs",
			"Successfully delivered an application that facilitates real-time communication between iOS devices and snow-making machines, enabling efficient operational management and data exchange",
			"Demonstrated exceptional problem-solving skills in developing a user-friendly interface and ensuring seamless device integration",
		],
	},
];

export const PROJECTS = [
	{
		title: "Pokemon-API",
		image: "assets/pokemon-api.png",
		description: "Webapp that uses the PokeAPI to display pokemon information.",
		link: "https://relaxed-frangipane-1bb52e.netlify.app/",
		code: "https://github.com/jlbmontejano/pokemon-api",
	},
];

export const SOCIAL_NETWORKS = [
	{ name: "LinkedIn", link: "https://www.linkedin.com/in/jlbmontejano/" },
	{ name: "GitHub", link: "https://github.com/jlbmontejano" },
];
