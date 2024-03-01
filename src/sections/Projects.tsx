import { PROJECTS } from "../constants";
import IndividualProject from "../components/IndividualProject";

const ProjectSection = () => {
	return (
		<div className='section-container'>
			<div id='projects' className='scroll-anchor' />
			<h3>Projects</h3>
			<p>These are some of the projects I've worked on so far. I am constantly updating and improving them.</p>
			<div className='flex flex-col gap-7 lg:flex-row'>
				{PROJECTS.map((project, projectIdx) => (
					<IndividualProject project={project} key={projectIdx} />
				))}
			</div>
		</div>
	);
};

export default ProjectSection;
