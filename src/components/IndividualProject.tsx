import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { Project } from "../types";
import Carousel from "./Carousel";

const IndividualProject = ({ project }: { project: Project }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div className='flex flex-col gap-4'>
			<div className='flex justify-between'>
				<button
					className='group flex items-center justify-center gap-2 hover:cursor-pointer'
					onClick={() => setIsOpen(!isOpen)}>
					<IoIosArrowUp
						aria-hidden
						className={`transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`}
					/>
					<h3 className='underline-animate group-hover:underline-animate-active text-lg font-semibold lg:text-2xl'>
						{project.title}
					</h3>
				</button>
				<div className='flex items-center justify-center gap-3'>
					<a href={project.liveLink} target='_blank' rel='noreferrer'>
						Live
					</a>
					<a
						href={project.githubLink}
						target='_blank'
						rel='noreferrer'>
						GitHub
					</a>
				</div>
			</div>
			<div
				className={`grid grid-cols-1 gap-2 transition-all duration-500 ease-in-out lg:grid-cols-2 ${
					isOpen
						? "pointer-events-auto max-h-full translate-y-0 opacity-100"
						: "pointer-events-none max-h-0 -translate-y-4 opacity-0"
				}`}>
				<p className='ml-6'>{project.description}</p>
				<Carousel liveLink={project.liveLink} images={project.images} />
			</div>
			<hr className='col-span-full my-4' />
		</div>
	);
};

export default IndividualProject;
