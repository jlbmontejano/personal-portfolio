import { projects } from "../constants";
import IndividualProject from "../components/IndividualProject";

const ProjectSection = () => {
	return (
		<div>
			<h3>Projects</h3>
			<p>These are some of the projects I've worked on so far. I am constantly updating and improving them.</p>
			<div className='flex md:flex-col gap-3'>
				{projects.map((project, projectIdx) => (
					<IndividualProject project={project} key={projectIdx} />
				))}
			</div>
		</div>
	);
};

export default ProjectSection;
