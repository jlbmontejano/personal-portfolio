import { TECH_STACK } from '../constants';
import useAOS from '../customHooks/useAos';

const AboutMe = () => {
	useAOS();

	return (
		<div>
			<div id='about-me' />
			<div data-aos='fade-up' className='section-container'>
				<p className='section-title'>── About Me</p>
				<p>
					Software engineer with 2 years of full-stack web development
					experience specialized in modern technologies like React,
					Node and PostgreSQL. Passionate about building scalable,
					user-focused applications and solving real-world problems
					through clean, maintainable code.
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2'>
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
		</div>
	);
};

export default AboutMe;
