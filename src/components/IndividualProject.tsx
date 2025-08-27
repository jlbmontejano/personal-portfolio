import { Project } from "../types";

const IndividualProject = ({ project }: { project: Project }) => {
	return (
		<div className='flex flex-col gap-3'>
			<p className='text-3xl font-semibold lg:text-5xl'>
				{project.title}
			</p>
			<a href={project.link} target='_blank' rel='noreferrer'>
				<img src={project.image} alt={`${project.title}-project`} />
			</a>
			<p className=''>{project.description}</p>
			<a href={project.link} target='_blank' rel='noreferrer'>
				<button>CODE</button>
			</a>
		</div>
	);
};

export default IndividualProject;
