import { SOCIAL_NETWORKS } from "../constants";

const Footer = () => {
	return (
		<div className='footer mt-9'>
			{SOCIAL_NETWORKS.map(network => (
				<a href={network.link} target='_blank' rel='noreferrer' key={`jorge-${network.name}`}>
					{network.name}
				</a>
			))}
			<a href='assets/CV-Jorge-Luis-Buenrostro-Montejano.pdf' target='_blank' rel='noreferrer'>
				Resume
			</a>
		</div>
	);
};

export default Footer;
