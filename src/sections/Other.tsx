import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {
	AOS.init({
		delay: 100,
		duration: 800,
		easing: "ease",
	});

	return (
		<div>
			<div id='other' className='scroll-anchor' />
			<div data-aos='fade-up' className='section-container mt-3'>
				<h3>Other</h3>
				<div>
					<p className='font-bold'>Location:</p>
					<p> Mexicali, Mexico</p>
				</div>
				<div>
					<p className='font-bold'>Languages:</p>
					<ul>
						<li>Spanish (Native)</li>
						<li>English (Bilingual)</li>
					</ul>
				</div>
				<div>
					<p className='font-bold'>Education:</p>
					<p>Bachelor's Degree in Music</p>
					<p>Centro Universitario de Estudios Musicales</p>
					<p>Queretaro, MX; 2015 - 2019</p>
				</div>
			</div>
		</div>
	);
};

export default Education;
