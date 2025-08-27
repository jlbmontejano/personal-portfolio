import { SOCIAL_NETWORKS } from '../constants';

const SocialNetworks = () => {
	return (
		<div className='mt-2 flex w-full gap-3 md:gap-5 xl:mt-4'>
			{SOCIAL_NETWORKS.map(network => (
				<a
					href={network.link}
					target='_blank'
					rel='noreferrer'
					key={`jorge-${network.name}`}>
					{network.name}
				</a>
			))}
			<a
				href='assets/CV-Jorge-Luis-Buenrostro-Montejano.pdf'
				target='_blank'
				rel='noreferrer'>
				Resume
			</a>
			<a
				href='mailto:jlbmontejano@gmail.com'
				target='_blank'
				rel='noreferrer'>
				Contact Me
			</a>
		</div>
	);
};

export default SocialNetworks;
