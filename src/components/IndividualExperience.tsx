import { WorkExperience } from "../types";

type IndividualExperienceProps = {
	work: WorkExperience;
	zIndex: number;
};

const IndividualExperience = ({ work, zIndex }: IndividualExperienceProps) => {
	return (
		<div
			className='sticky top-[4rem] flex w-full flex-col bg-white py-[1rem] lg:flex-row'
			style={{ zIndex }}>
			<h2 className='text-3xl font-semibold lg:text-5xl'>
				{work.number}.
			</h2>
			<div className='pt-[1rem] lg:pl-[2rem] lg:pt-0'>
				<div>
					<h3 className='text-lg font-semibold lg:text-2xl'>
						{work.company}
					</h3>
					<h4>{work.position}</h4>
					<h4>
						{work.fromDate} - {work.toDate}
					</h4>
				</div>
				<ul className='mt-2 text-sm md:text-base'>
					{work.tasks.map(task => (
						<li key={task}>{task}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default IndividualExperience;
