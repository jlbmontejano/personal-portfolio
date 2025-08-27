import { WORK_EXPERIENCE } from "../constants";
import useAOS from "../customHooks/useAos";
import IndividualWork from "../components/IndividualWork";

const WorkExperience = () => {
	useAOS();

	return (
		<div>
			<div id='work-experience' />
			<div data-aos='fade-up' className='section-container'>
				<p className='section-title'>── Work Experience</p>
				<div className='flex w-full flex-col gap-7'>
					{WORK_EXPERIENCE.map((work, workIdx) => (
						<IndividualWork
							work={work}
							zIndex={workIdx + 5}
							key={workIdx}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default WorkExperience;
