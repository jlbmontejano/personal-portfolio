import SocialNetworks from "../components/SocialNetworks";
import useAOS from "../customHooks/useAos";

const Home = () => {
	useAOS();

	return (
		<div className='section-container h-screen justify-center bg-off_white'>
			<div data-aos='fade-right'>
				<div>
					<p className='text-5xl font-bold'>HI,</p>
					<p className='text-4xl'>my name is</p>
					<p className='text-4xl font-bold'>Jorge Buenrostro</p>
				</div>
				<div className='text-xl'>
					<p>a Full Stack Developer </p>
				</div>
				<SocialNetworks />
			</div>
		</div>
	);
};

export default Home;
