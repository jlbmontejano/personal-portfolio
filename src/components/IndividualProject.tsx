import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Project } from "../types";

const IndividualProject = ({ project }: { project: Project }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div className='flex flex-col gap-2'>
			<div className='flex justify-between'>
				<div
					className='group flex items-center justify-center gap-1 hover:cursor-pointer'
					onClick={() => setIsOpen(!isOpen)}>
					<IoIosArrowDown
						className={`transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`}
					/>

					<p className='underline-animate group-hover:underline-animate-active text-lg font-semibold lg:text-2xl'>
						{project.title}
					</p>
				</div>
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
				className={`grid grid-cols-1 gap-2 transition-all duration-500 ease-in-out md:grid-cols-2 ${
					isOpen
						? "max-h-screen translate-y-0 opacity-100"
						: "max-h-0 -translate-y-4 opacity-0"
				}`}>
				<p className='pl-5'>{project.description}</p>
				<a
					href={project.liveLink}
					target='_blank'
					rel='noopener noreferrer'
					className='block pl-5 transition-opacity duration-200 hover:opacity-80 md:pl-0'>
					<img
						src={project.image}
						alt={`${project.title}-project`}
						className='rounded-xl'
					/>
				</a>
			</div>
			<hr className='mt-4' />
		</div>
	);
};

export default IndividualProject;
