import { PROJECTS } from '../constants';
import useAOS from '../customHooks/useAos';
import IndividualProject from '../components/IndividualProject';

const Projects = () => {
	useAOS();

	return (
		<div data-aos='fade-up' className='section-container'>
			<p className='section-title'>── Projects</p>
			<p>
				These are some of my personal projects that I've worked on so
				far. I am constantly updating and improving them.
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
