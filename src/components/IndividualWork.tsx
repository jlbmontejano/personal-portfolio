import { useState, Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

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
	const workTitleRef = useRef(null);

	return (
		<>
			<div className='flex flex-col w-full lg:w-1/3 text-white'>
				<div onClick={() => setIsOpen(true)} className='p-5 cursor-pointer bg-emerald-green hover:text-cream hover:bg-dark-emerald-green'>
					<h5>{work.company}</h5>
				</div>
			</div>
			<Transition show={isOpen} as={Fragment}>
				<Dialog onClose={() => setIsOpen(false)} initialFocus={workTitleRef} className='relative z-50'>
					{/* Backdrop */}
					<Transition.Child as={Fragment} enter='ease-out duration-300' enterFrom='opacity-0' enterTo='opacity-100' leave='ease-in duration-200' leaveFrom='opacity-100' leaveTo='opacity-0'>
						<div className='fixed inset-0 bg-black/30' aria-hidden='true' />
					</Transition.Child>

					{/* Full-screen scrollable container */}
					<Transition.Child as={Fragment} enter='ease-out duration-300' enterFrom='opacity-0' enterTo='opacity-100' leave='ease-in duration-200' leaveFrom='opacity-100' leaveTo='opacity-0'>
						<div className='fixed inset-0 p-4 overflow-y-auto'>
							<div className='flex min-h-full items-center justify-center p-4'>
								<Dialog.Panel className='p-10 bg-white rounded-xl xl:w-1/2'>
									<Dialog.Title className='mb-5' ref={workTitleRef}>
										{work.company}
									</Dialog.Title>
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
									<ul className='list-disc px-5'>
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
						</div>
					</Transition.Child>
				</Dialog>
			</Transition>
		</>
	);
};

export default IndividualWork;
