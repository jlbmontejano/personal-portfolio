import IndividualWork from "../components/IndividualWork";
import { workExperience } from "../constants";

const WorkExperience = () => {
	return (
		<div className='flex md:mobile'>
			<h3>Work Experience</h3>
			{workExperience.map((work, workIdx) => (
				<IndividualWork work={work} key={workIdx} />
			))}
		</div>
	);
};

export default WorkExperience;
