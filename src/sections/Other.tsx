import useAOS from '../customHooks/useAos';

const Other = () => {
	useAOS();

	return (
		<div>
			<div id='other' />
			<div data-aos='fade-up' className='section-container'>
				<p className='section-title'>── Other</p>
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
					<p>Queretaro, Mexico</p>
				</div>
				<div>
					<p className='font-bold'>Location:</p>
					<p>Auckland, New Zealand</p>
				</div>
			</div>
		</div>
	);
};

export default Other;
