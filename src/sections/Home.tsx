import SocialNetworks from "../components/SocialNetworks";

const Home = () => {
	return (
		<div className='section-container gap-0 h-full justify-center animate-fadeRight'>
			<div>
				<p className='font-bold text-5xl'>HI,</p>
				<p className='text-4xl'>my name is</p>
				<p className='text-4xl font-bold'>Jorge Buenrostro</p>
			</div>
			<div className='text-xl xl:mt-2'>
				<p>a Full Stack Developer </p>
			</div>
			<SocialNetworks />
		</div>
	);
};

export default Home;
