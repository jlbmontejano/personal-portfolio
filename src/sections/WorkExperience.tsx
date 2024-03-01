import { WORK_EXPERIENCE } from "../constants";
import IndividualWork from "../components/IndividualWork";
import AOS from "aos";
import "aos/dist/aos.css";

const WorkExperience = () => {
	AOS.init({
		delay: 100,
		duration: 800,
		easing: "ease",
	});

	return (
		<div>
			<div id='work-experience' className='scroll-anchor' />
			<div data-aos='fade-up' className='section-container mt-3'>
				<h3>Work Experience</h3>
				<div className='work-projects-section'>
					{WORK_EXPERIENCE.map((work, workIdx) => (
						<IndividualWork work={work} key={workIdx} />
					))}
				</div>
			</div>
		</div>
	);
};

export default WorkExperience;
