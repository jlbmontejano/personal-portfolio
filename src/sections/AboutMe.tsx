import { TECH_STACK } from "../constants";
import useAOS from "../customHooks/useAos";

const AboutMe = () => {
	useAOS();

	return (
		<div>
			<div id='about-me' className='scroll-anchor' />
			<div data-aos='fade-up' className='section-container mt-3'>
				<h3>About Me</h3>
				<p>
					Software engineer with 2 years of full-stack web development
					experience specialized in modern technologies like React, Node and
					PostgreSQL. Passionate about building scalable, user-focused
					applications and solving real-world problems through clean,
					maintainable code.
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4'>
					{TECH_STACK.map(stack => (
						<div>
							<h4 className='font-bold'> {stack.title}: </h4>
							<ul>
								{stack.data.map((tool, idx) => (
									<li key={`${tool}-${idx}`}>{tool}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
