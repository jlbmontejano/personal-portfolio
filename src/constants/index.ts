export const headerOptions = [
	{ name: "ABOUT ME", scrollTo: "about-me" },
	{ name: "WORK EXPERIENCE", scrollTo: "work-experience" },
	{ name: "PROJECTS", scrollTo: "projects" },
	{ name: "EDUCATION", scrollTo: "education" },
];

export const languages = ["HTML, CSS & JavaScript", "Typescript", "Python", "SQL", "Swift"];

export const technologies = ["ReactJS", "Vue", "NodeJS", "Express", "GIT"];

export const workExperience = [
	{
		company: "Sportsminers",
		position: "Front End Developer",
		location: "Mexicali, MX",
		fromDate: "October 2023",
		toDate: "Present",
		technologies: "Typescript, ReactJS, React Query, TailwindCSS",
		tasks: ["Freelance project that is currently being developed.", "Webapp that allows coaches to better manage their sports teams by showcasing valuable information and statistics about each player."],
	},
	{
		company: "IT Nora",
		position: "Full Stack Developer",
		location: "Mexicali, MX",
		fromDate: "March 2022",
		toDate: "October 2023",
		technologies: "Typescript, Vue, NodeJS, Google Firebase",
		tasks: ["Main developer of the company’s website: www.itnora.com.", "Created components for a government app which required a vast number of forms and validation.", "Engineered and implemented new components to add and filter results from a client’s database.", "Enhanced core functionalities within a client's social media application, such as post creation, photo editing within posts, and user-initiated modifications to their own profile.", "Identified and rectified multiple technical issues within a client's website, contributing significantly to improved performance and user experience."],
	},
	{
		company: "Huard Technology Services",
		position: "iOS App Developer",
		location: "Mexicali, MX",
		fromDate: "August 2021",
		toDate: "March 2022",
		technologies: "Swift",
		tasks: ["Contract-based job, responsible of creating, maintaining, and deploying an iOS app according to the client’s needs.", "The app consisted of establishing communication between an iOS device and snow-making machines. This integration enabled the exchange of information and allowed for direct control of the machine's motor via the iOS device, enhancing operational efficiency and control."],
	},
];

export const projects = [
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

export const socialNetworks = [
	{ name: "GitHub", link: "https://github.com/jlbmontejano" },
	{ name: "LinkedIn", link: "https://www.linkedin.com/in/jlbmontejano/" },
];
