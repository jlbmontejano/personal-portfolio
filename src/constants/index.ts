export const MENU_OPTIONS = [
	{ name: "HOME", scrollTo: "home" },
	{ name: "ABOUT ME", scrollTo: "about-me" },
	{ name: "WORK EXPERIENCE", scrollTo: "work-experience" },
	// { name: "PROJECTS", scrollTo: "projects" },
	{ name: "OTHER", scrollTo: "other" },
];

export const LANGUAGES = [
	"HTML, CSS & JavaScript",
	"Typescript",
	"SQL",
	"Python",
];

export const TECHNOLOGIES = [
	"ReactJS",
	"Vue",
	"NodeJS",
	"Express",
	"PostgreSQL",
	"GIT",
	"Google Cloud Platform",
];

export const WORK_EXPERIENCE = [
	{
		company: "Sportsminers",
		position: "Full Stack Developer",
		location: "Mexicali, MX",
		fromDate: "October 2023",
		toDate: "Present",
		technologies: "Typescript, ReactJS, Node.js, PostgreSQL, TailwindCSS",
		tasks: [
			"Led the development of this web app from inception, ensuring good coding practices, like maintainability, scalability and readability; app is still in development",
			"Advised the client on a better approach for his project, increasing development speed and reducing projected costs by 10%",
			"Implemented CI/CD pipelines which reduced code deployment time from ~15 minutes to ~5 minutes",
			"Created a robust codebase that will allow users to create fantasy leagues to play with friends and other community members, featuring real time updates",
		],
	},
	{
		company: "IT Nora",
		position: "Full Stack Developer",
		location: "Mexicali, MX",
		fromDate: "March 2023",
		toDate: "October 2023",
		technologies: "Typescript, Vue, Node.js, Google Firebase, TailwindCSS",
		tasks: [
			"Led the development of IT Nora's official website, enhancing the company’s online presence and client engagement through a modern, responsive design",
			"Incorporated extensive validation mechanisms to streamline data collection and ",
			"Developed advanced features for a social media application, significantly enhancing user interaction and increasing user satisfaction",
			"Diagnosed and resolved critical technical issues across various projects, leading to marked improvements in performance",
		],
	},
	{
		company: "Huard Technology Services",
		position: "iOS App Developer",
		location: "Mexicali, MX",
		fromDate: "August 2022",
		toDate: "March 2023",
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
	{
		title: "Rock Paper Scissors",
		image: "assets/rock-paper-scissors.png",
		description: "Classic rock, paper, scissors game made with React.",
		link: "https://steady-biscochitos-582e33.netlify.app/",
		code: "https://github.com/jlbmontejano/rock-paper-scissors",
	},
	{
		title: "Advice Generator",
		image: "assets/advice-generator.png",
		description: "Small project that fetches a random advice from an API.",
		link: "https://shimmering-bunny-4c923a.netlify.app/",
		code: "https://github.com/jlbmontejano/advice-generator-app",
	},
];

export const SOCIAL_NETWORKS = [
	{ name: "GitHub", link: "https://github.com/jlbmontejano" },
	{ name: "LinkedIn", link: "https://www.linkedin.com/in/jlbmontejano/" },
];
