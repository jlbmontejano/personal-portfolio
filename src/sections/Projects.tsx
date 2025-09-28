import { PROJECTS } from "../constants";
import useAOS from "../customHooks/useAos";
import IndividualProject from "../components/IndividualProject";

const Projects = () => {
	useAOS();

	return (
		<section aria-label='Projects'>
			<div id='projects' />
			<div className='section-container' data-aos='fade-up'>
				<h2 className='section-title'>── Projects</h2>
				<div>
					{PROJECTS.map((project, projectIdx) => (
						<IndividualProject project={project} key={projectIdx} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
