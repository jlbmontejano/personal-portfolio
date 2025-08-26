import { TECH_STACK } from '../constants';
import useAOS from '../customHooks/useAos';

const AboutMe = () => {
	useAOS();

	return (
		<div>
			<div id='about-me' />
			<div data-aos='fade-up' className='section-container'>
				<p className='section-title'>── About Me</p>
				<div className='flex flex-col gap-10 xl:flex-row'>
					<div className='w-full xl:pr-14'>
						<p>
							Software engineer with 2 years of full-stack web
							development experience specialized in modern
							technologies like React, Node and PostgreSQL.
							Passionate about building scalable, user-focused
							applications and solving real-world problems through
							clean, maintainable code.
						</p>
						<p className='pt-7'>
							Outside of tech, I enjoy music, video games,
							gardening, and hanging out with my cats. These
							hobbies help me stay creative and grounded, and I’ve
							found they often influence how I think about problem
							solving and user experience.
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
			</div>
		</div>
	);
};

export default AboutMe;
