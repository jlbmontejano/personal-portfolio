import { WorkExperience } from "../types";

type IndividualWorkProps = {
	work: WorkExperience;
	zIndex: number;
};

const IndividualWork = ({ work, zIndex }: IndividualWorkProps) => {
	return (
		<div
			className='sticky top-[4rem] flex w-full flex-col bg-white py-[1rem] lg:flex-row'
			style={{ zIndex }}>
			<div className='text-3xl font-semibold lg:text-5xl'>
				{work.number}.
			</div>
			<div className='pt-[1rem] lg:pl-[2rem] lg:pt-0'>
				<div>
					<p className='text-lg font-semibold lg:text-2xl'>
						{work.company}
					</p>
					<p>{work.position}</p>
					<p>
						{work.fromDate} - {work.toDate}
					</p>
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

export default IndividualWork;
