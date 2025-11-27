import { WorkExperience } from "@/types";

type IndividualExperienceProps = {
	work: WorkExperience;
	zIndex: number;
};

const IndividualExperience = ({ work, zIndex }: IndividualExperienceProps) => {
	return (
		<div
			className='sticky top-16 flex w-full flex-col bg-white py-4 lg:flex-row'
			style={{ zIndex }}>
			<h2 className='text-3xl font-semibold lg:text-5xl'>
				{work.number}.
			</h2>
			<div className='pt-4 lg:pt-0 lg:pl-8'>
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
