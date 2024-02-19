type IndividualWorkProps = {
	work: {
		company: string;
		position: string;
		location: string;
		fromDate: string;
		toDate: string;
		technologies: string[];
		tasks: string[];
	};
};

const IndividualWork = ({ work }: IndividualWorkProps) => {
	return (
		<div className='flex flex-col'>
			<h2>{work.company}</h2>
			<h4>
				{work.position} - {work.location}
			</h4>
			<h6>
				{work.fromDate} - {work.toDate}
			</h6>
			<p>Technologies: </p>
			<ul>
				{work.technologies.map(technology => (
					<li>{technology}</li>
				))}
			</ul>
			<ul>
				{work.tasks.map(task => (
					<li>{task}</li>
				))}
			</ul>
		</div>
	);
};

export default IndividualWork;
