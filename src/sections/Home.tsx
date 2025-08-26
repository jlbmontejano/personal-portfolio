import SocialNetworks from '../components/SocialNetworks';

const Home = () => {
	return (
		<div className='section-container h-screen animate-fadeRight justify-center bg-off_white'>
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
	);
};

export default Home;
