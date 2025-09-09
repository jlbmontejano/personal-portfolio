import useAOS from "../customHooks/useAos";

const Other = () => {
	useAOS();

	return (
		<div>
			<div id='other' />
			<div className='section-container'>
				<p className='section-title' data-aos='fade-up'>
					── Other
				</p>
				<div data-aos='fade-up'>
					<p className='font-bold'>Education:</p>
					<p>Centro Universitario de Estudios Musicales</p>
					<p>Bachelor of Music</p>
					<p>Dec 2019</p>
				</div>
				<div data-aos='fade-up'>
					<p className='font-bold'>Languages:</p>
					<ul className='list-none pl-0'>
						<li>Spanish (Native)</li>
						<li>English (Bilingual)</li>
					</ul>
				</div>

				<div data-aos='fade-up'>
					<p className='font-bold'>Location:</p>
					<p>Auckland, New Zealand</p>
				</div>
			</div>
		</div>
	);
};

export default Other;
