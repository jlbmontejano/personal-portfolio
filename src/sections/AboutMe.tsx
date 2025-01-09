import { LANGUAGES, TECHNOLOGIES } from "../constants";
import useAOS from "../customHooks/useAos";

const AboutMe = () => {
	useAOS();

	return (
		<div>
			<div id='about-me' className='scroll-anchor' />
			<div data-aos='fade-up' className='section-container mt-3'>
				<h3>About Me</h3>
				<p>
					Software Engineer with 2 years of full-stack web development
					experience specialized in React, Node and PostgreSQL. My passion for
					technology and problem-solving drives me to constantly seek new
					challenges that expand my skill set and contribute to the success of
					the projects I'm involved in.
				</p>
				<p>
					I am self-taught, powered by an endless fascination with logic, math,
					and the cool puzzles they throw my way. I'm naturally curious and
					pretty passionate about learning. For me, information and time are
					super precious, always making sure I'm learning something new or
					making something worthwhile. In short, I love what I do, and I'm
					always looking for the next cool project to get my hands on.
				</p>
				<div className='flex flex-col gap-7 xl:flex-row'>
					<div>
						<h4 className='font-bold'>Programming Languages: </h4>
						<ul>
							{LANGUAGES.map(language => (
								<li key={`${language}`}>{language}</li>
							))}
						</ul>
					</div>
					<div>
						<h4 className='font-bold'>Technologies: </h4>
						<ul>
							{TECHNOLOGIES.map(technology => (
								<li key={`${technology}`}>{technology}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
