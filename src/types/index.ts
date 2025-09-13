export type MenuOption = {
	name: string;
	scrollTo: string;
};

export type TechStack = {
	title: string;
	data: string[];
};

export type WorkExperience = {
	number: string;
	company: string;
	position: string;
	fromDate: string;
	toDate: string;
	technologies: string;
	tasks: string[];
};

export type Project = {
	title: string;
	image: string;
	description: string;
	liveLink: string;
	githubLink: string;
};

export type SocialNetwork = {
	name: string;
	link: string;
};
