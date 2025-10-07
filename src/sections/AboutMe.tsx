import { TECH_STACK } from "../constants";
import useAOS from "../customHooks/useAos";

const AboutMe = () => {
	useAOS();

	return (
		<>
			<div id='about-me' aria-hidden />
			<section
				className='section-container'
				data-aos='fade-up'
				aria-label='About Me'>
				<h2 className='section-title'>── About Me</h2>
				<div className='flex flex-col gap-10 xl:flex-row'>
					<div className='flex w-full flex-col gap-7 xl:pr-14'>
						<p>
							Full-stack developer skilled in building web and
							mobile applications using React, Node.js, and
							PostgreSQL. Proven ability to rapidly learn new
							technologies and solve complex technical challenges.
						</p>
						<p>
							I’m someone who values collaboration and enjoys
							being part of a team that shares knowledge and
							builds things that matter. I pay close attention to
							detail and take pride in writing code that's both
							clean and practical.
						</p>
						<p>
							Outside of tech, I enjoy music, video games,
							gardening, and hanging out with my cats.
						</p>
					</div>
					<div className='grid w-full grid-cols-1 sm:grid-cols-2'>
						{TECH_STACK.map(stack => (
							<div className='mb-2' key={stack.title}>
								<p className='font-bold'> {stack.title}: </p>
								<ul>
									{stack.data.map((tool, idx) => (
										<li key={idx}>{tool}</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default AboutMe;
