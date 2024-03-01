import { LANGUAGES, TECHNOLOGIES } from "../constants";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
	AOS.init({
		delay: 100,
		duration: 800,
		easing: "ease",
	});

	return (
		<div>
			<div id='about-me' className='scroll-anchor' />
			<div data-aos='fade-up'  className='section-container mt-3'>
				<h3>About Me</h3>
				<p className='lg:text-left md:px-16'>As a dedicated frontend developer, I specialize in crafting innovative, efficient, and scalable solutions that drive real value. My passion for technology and problem-solving drives me to constantly seek new challenges that expand my skill set and contribute to the success of the projects I'm involved in. I am self-taught and have always been interested in all types of logic and math related topics. I am a curious and passionate individual by nature that is never afraid to try new things out; for me, information and time are two of the most invaluable things in life.</p>
				<div className='flex flex-col gap-7'>
					<div>
						<h5 className='font-bold'>Programming Languages: </h5>
						<ul>
							{LANGUAGES.map(language => (
								<li key={`${language}`}>{language}</li>
							))}
						</ul>
					</div>
					<div>
						<h5 className='font-bold'>Technologies: </h5>
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
