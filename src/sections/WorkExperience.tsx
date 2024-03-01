import IndividualWork from "../components/IndividualWork";
import { WORK_EXPERIENCE } from "../constants";

const WorkExperience = () => {
	return (
		<div className='section-container'>
			<div id='work-experience' className='scroll-anchor' />
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
