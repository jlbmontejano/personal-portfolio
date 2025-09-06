import { PROJECTS } from "../constants";
import useAOS from "../customHooks/useAos";
import IndividualProject from "../components/IndividualProject";

const Projects = () => {
	useAOS();

	return (
		<div className='section-container' data-aos='fade-up'>
			<p className='section-title'>── Projects</p>
			<p>
				These are some of the projects I've worked on so far. Feel free
				to look around.
			</p>
			<div className='grid grid-cols-2'>
				{PROJECTS.map((project, projectIdx) => (
					<IndividualProject project={project} key={projectIdx} />
				))}
			</div>
		</div>
	);
};

export default Projects;
