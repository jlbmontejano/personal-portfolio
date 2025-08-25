import { WORK_EXPERIENCE } from "../constants";
import useAOS from "../customHooks/useAos";
import IndividualWork from "../components/IndividualWork";

const WorkExperience = () => {
	useAOS();

	return (
		<div data-aos='fade-up' className='section-container'>
			<h3>Work Experience</h3>
			<div className='work-projects-section'>
				{WORK_EXPERIENCE.map((work, workIdx) => (
					<IndividualWork work={work} key={workIdx} />
				))}
			</div>
		</div>
	);
};

export default WorkExperience;
