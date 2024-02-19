import { socialNetworks } from "../constants";

const Footer = () => {
	return (
		<div className='footer'>
			{socialNetworks.map(network => (
				<a href={network.link} target='_blank' rel='noreferrer' key={`jorge-${network.name}`}>
					{network.name}
				</a>
			))}
		</div>
	);
};

export default Footer;
