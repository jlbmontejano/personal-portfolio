import { useState } from "react";

type IndividualWorkProps = {
	work: {
		company: string;
		position: string;
		location: string;
		fromDate: string;
		toDate: string;
		technologies: string;
		tasks: string[];
	};
};

const IndividualWork = ({ work }: IndividualWorkProps) => {
	const [hidden, setHidden] = useState(true);

	return (
		<div className='flex flex-col w-full lg:w-1/3 text-white'>
			<div onClick={() => setHidden(!hidden)} className={`flex justify-between p-5 cursor-pointer ${hidden ? "bg-emerald-green" : "bg-dark-emerald-green text-cream "}`}>
				<h5 className={`text-left ${hidden ? "" : "underline"}`}>{work.company}</h5>
				<h5>+</h5>
			</div>
			<div className={`flex flex-col p-5 bg-emerald-green ${hidden && "hidden"}`}>
				<p className='text-left'>
					<span className='font-bold'>Position: </span>
					{work.position}
				</p>
				<p className='text-left'>
					<span className='font-bold'>Location: </span>
					{work.location}
				</p>
				<p className='text-left'>
					<span className='font-bold'>Duration: </span>
					{work.fromDate} - {work.toDate}
				</p>
				<p className='text-left'>
					<span className='font-bold'>Technologies: </span>
					{work.technologies}
				</p>
				<p className='text-left'>
					<span className='font-bold'>Tasks: </span>
				</p>
				<ul className='list-disc px-5'>
					{work.tasks.map(task => (
						<li className='text-left' key={task}>
							{task}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default IndividualWork;
