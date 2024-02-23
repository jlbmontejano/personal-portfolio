import { languages, technologies } from "../constants";

const AboutMe = () => {
	return (
		<div className='section-container'>
			<h1>Jorge Buenrostro</h1>
			<h2>Frontend Developer</h2>

			<hr id='about-me' />
			<h3 className='py-7'>About Me</h3>
			<p className='md:px-16'>As a dedicated frontend developer, I specialize in crafting innovative, efficient, and scalable solutions that drive real value. My passion for technology and problem-solving drives me to constantly seek new challenges that expand my skill set and contribute to the success of the projects I'm involved in. I am self-taught and have always been interested in all types of logic and math related topics. I am a curious and passionate individual by nature that is never afraid to try new things out; for me, information and time are two of the most invaluable things in life.</p>
			<div className='flex flex-col gap-7 items-center justify-center lg:flex-row lg:px-16'>
				<img src='assets/my-photo.jpg' alt='jorge-photo' className='sm:w-2/5' />
				<div className='flex flex-col gap-7'>
					<div className='flex flex-col'>
						<h5>Programming Languages: </h5>
						<ul>
							{languages.map(language => (
								<li key={`${language}`}>{language}</li>
							))}
						</ul>
					</div>
					<div className='flex flex-col'>
						<h5>Technologies: </h5>
						<ul>
							{technologies.map(technology => (
								<li key={`${technology}`}>{technology}</li>
							))}
						</ul>
					</div>
					<div>
						<h5>Location:</h5>
						<p> Mexicali, Mexico</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
