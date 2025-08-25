import { PROJECTS } from "../constants";
import useAOS from "../customHooks/useAos";
import IndividualProject from "../components/IndividualProject";

const Projects = () => {
	useAOS();

	return (
		<div data-aos='fade-up' className='section-container'>
			<h3>Projects</h3>
			<p>
				These are some of my personal projects that I've worked on so far. I am
				constantly updating and improving them.
			</p>
			<div className='flex flex-col gap-7 lg:flex-row'>
				{PROJECTS.map((project, projectIdx) => (
					<IndividualProject project={project} key={projectIdx} />
				))}
			</div>
		</div>
	);
};

export default Projects;
