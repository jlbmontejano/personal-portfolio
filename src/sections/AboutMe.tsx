import { TECH_STACK } from "@/constants";
import useAOS from "@/hooks/useAos";

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
							Full-stack software engineer with hands-on
							experience across web, mobile, and backend
							development. Builds production-ready systems using
							TypeScript, React, Node.js, PostgreSQL, and modern
							.NET technologies, from responsive user interfaces
							to deployment pipelines, with a disciplined approach
							to testing and code quality.
						</p>
						<p>
							I value collaboration and enjoy being part of a team
							that shares knowledge and builds things that matter.
							I pick up new technologies quickly, take pride in
							writing code that others can maintain, and always
							keep the end user in mind.
						</p>
						<p>
							Outside of tech, I enjoy music, video games,
							gardening, and hanging out with my cats.
						</p>
					</div>
					<div className='grid w-full grid-cols-2'>
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
