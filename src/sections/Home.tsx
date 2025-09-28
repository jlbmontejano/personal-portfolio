import SocialNetworks from "../components/SocialNetworks";
import useAOS from "../customHooks/useAos";

const Home = () => {
	useAOS();

	return (
		<div className='section-container h-screen justify-center bg-off_white'>
			<div data-aos='fade-right'>
				<h1>
					<span className='block text-5xl font-bold'>HI,</span>
					<span className='block text-4xl'>my name is</span>
					<span className='block text-4xl font-bold'>
						Jorge Buenrostro
					</span>
				</h1>
				<div className='text-xl'>
					<p>a Full Stack Developer </p>
				</div>
				<SocialNetworks />
			</div>
		</div>
	);
};

export default Home;
