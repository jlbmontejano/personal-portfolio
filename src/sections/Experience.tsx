import IndividualExperience from "../components/IndividualExperience";
import { EXPERIENCE } from "../constants";
import useAOS from "../customHooks/useAos";

const Experience = () => {
	useAOS();

	return (
		<div>
			<div id='experience' />
			<div className='section-container' data-aos='fade-up'>
				<p className='section-title'>── Experience</p>
				<div className='flex w-full flex-col gap-7'>
					{EXPERIENCE.map((work, workIdx) => (
						<IndividualExperience
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

export default Experience;
