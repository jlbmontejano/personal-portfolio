import IndividualWork from "../components/IndividualWork";
import { workExperience } from "../constants";

const WorkExperience = () => {
	return (
		<div className='section-container'>
			<hr id='work-experience' />
			<h3 className='py-7'>Work Experience</h3>
			<div className='flex flex-col gap-7 lg:flex-row'>
				{workExperience.map((work, workIdx) => (
					<IndividualWork work={work} key={workIdx} />
				))}
			</div>
		</div>
	);
};

export default WorkExperience;
