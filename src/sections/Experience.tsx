import IndividualExperience from "@/components/IndividualExperience";
import { EXPERIENCE } from "@/constants";

const Experience = () => {
	return (
		<section
			className='section-container'
			id='experience'
			aria-label='Experience'>
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
		</section>
	);
};

export default Experience;
