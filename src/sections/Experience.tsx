import IndividualExperience from "../components/IndividualExperience";
import { EXPERIENCE } from "../constants";
import useAOS from "../customHooks/useAos";

const Experience = () => {
	useAOS();

	return (
		<section aria-label='Experience'>
			<div id='experience' />
			<div className='section-container' data-aos='fade-up'>
				<h2 className='section-title'>── Experience</h2>
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
		</section>
	);
};

export default Experience;
