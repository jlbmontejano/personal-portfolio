import SocialNetworks from "../components/SocialNetworks";

const Home = () => {
	return (
		<div className='section-container mt-0 gap-0 h-screen justify-center animate-fadeRight'>
			<div id='home' className='scroll-anchor absolute top-0' />
			<div>
				<h1 className='font-bold text-6xl'>HI,</h1>
				<h2>
					my name is <span className='font-bold'>Jorge Buenrostro</span>
				</h2>
			</div>
			<div className='xl:mt-2'>
				<h4>a Frontend Developer </h4>
			</div>
			<SocialNetworks />
		</div>
	);
};

export default Home;