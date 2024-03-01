import { PROJECTS } from "../constants";
import IndividualProject from "../components/IndividualProject";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectSection = () => {
	AOS.init({
		delay: 100,
		duration: 800,
		easing: "ease",
	});

	return (
		<div>
			<div id='projects' className='scroll-anchor' />
			<div data-aos='fade-up'  className='section-container mt-3'>
				<h3>Projects</h3>
				<p>These are some of the projects I've worked on so far. I am constantly updating and improving them.</p>
				<div className='flex flex-col gap-7 lg:flex-row'>
					{PROJECTS.map((project, projectIdx) => (
						<IndividualProject project={project} key={projectIdx} />
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectSection;
