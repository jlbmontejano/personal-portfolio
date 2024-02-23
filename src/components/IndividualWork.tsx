import { useState } from "react";
import { Dialog } from "@headlessui/react";

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
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className='flex flex-col w-full lg:w-1/3 text-white'>
				<div onClick={() => setIsOpen(true)} className='flex justify-between p-5 cursor-pointer bg-emerald-green'>
					<h5 className='text-left'>{work.company}</h5>
					<h5>+</h5>
				</div>
			</div>
			<Dialog open={isOpen} onClose={() => setIsOpen(false)} className='relative z-50'>
				<div className='fixed inset-0 bg-black/30' aria-hidden='true' />
				<div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
					<Dialog.Panel className='p-10 bg-white rounded-xl xl:w-1/2'>
						<Dialog.Title className='mb-5'>{work.company}</Dialog.Title>
						<Dialog.Description className='text-left'>
							<span className='font-bold'>Position: </span>
							{work.position}
							<br />
							<span className='font-bold'>Location: </span>
							{work.location}
							<br />
							<span className='font-bold'>Duration: </span>
							{work.fromDate} - {work.toDate}
							<br />
							<span className='font-bold'>Technologies: </span>
							{work.technologies}
							<br />
						</Dialog.Description>
						<ul className='list-disc list-inside px-5'>
							{work.tasks.map(task => (
								<li className='text-left' key={task}>
									{task}
								</li>
							))}
						</ul>
						<button onClick={() => setIsOpen(false)} className='mt-5'>
							Close
						</button>
					</Dialog.Panel>
				</div>
			</Dialog>
		</>
	);
};

export default IndividualWork;
