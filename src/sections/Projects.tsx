import IndividualProject from "@/components/IndividualProject";
import { PROJECTS } from "@/constants";

const Projects = () => {
	return (
		<section
			className='section-container'
			id='projects'
			aria-label='Projects'>
			<h2 className='section-title'>── Projects</h2>
			<div>
				{PROJECTS.map((project, projectIdx) => (
					<IndividualProject project={project} key={projectIdx} />
				))}
			</div>
		</section>
	);
};

export default Projects;
