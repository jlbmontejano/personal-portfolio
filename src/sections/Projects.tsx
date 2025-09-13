import { PROJECTS } from "../constants";
import useAOS from "../customHooks/useAos";
import IndividualProject from "../components/IndividualProject";

const Projects = () => {
	useAOS();

	return (
		<div>
			<div id='projects' />
			<div className='section-container' data-aos='fade-up'>
				<p className='section-title'>── Projects</p>
				<div>
					{PROJECTS.map((project, projectIdx) => (
						<IndividualProject project={project} key={projectIdx} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
