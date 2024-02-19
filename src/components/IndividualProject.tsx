type IndividualProjectProps = {
	project: {
		title: string;
		image: string;
		description: string;
		link: string;
		code: string;
	};
};

const IndividualProject = ({ project }: IndividualProjectProps) => {
	return (
		<div className="flex flex-col gap-3">
			<h4>{project.title}</h4>
			<a href={project.link} target='_blank' rel='noreferrer'>
				<img src={project.image} alt={`${project.title}-project`} />
			</a>
			<p className=''>{project.description}</p>
			<a href={project.code} target='_blank' rel='noreferrer'>
				<button>CODE</button>
			</a>
		</div>
	);
};

export default IndividualProject;
