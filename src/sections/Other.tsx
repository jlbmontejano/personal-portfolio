import useAOS from "../customHooks/useAos";

const Education = () => {
	useAOS();

	return (
		<div>
			<div id='other' className='scroll-anchor' />
			<div data-aos='fade-up' className='section-container'>
				<h3>Other</h3>
				<div>
					<p className='font-bold'>Location:</p>
					<p> Mexicali, Mexico</p>
				</div>
				<div>
					<p className='font-bold'>Languages:</p>
					<ul className='list-none pl-0'>
						<li>Spanish (Native)</li>
						<li>English (Bilingual)</li>
					</ul>
				</div>
				<div>
					<p className='font-bold'>Education:</p>
					<p>Bachelor's Degree in Music</p>
					<p>Centro Universitario de Estudios Musicales</p>
					<p>Queretaro, MX</p>
				</div>
			</div>
		</div>
	);
};

export default Education;
