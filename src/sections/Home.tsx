const Home = () => {
	return (
		<div>
			<div id='home' className='scroll-anchor absolute' />
			<div className='flex flex-col w-full items-center h-screen justify-center'>
				<div className='text-left'>
					<h1 className='italic'>Hi, my name is</h1>
					<h1 className='font-bold'>Jorge Buenrostro</h1>
				</div>
				<div className='mt-2'>
					<h5>I am a Frontend Developer </h5>
					<h5>from Mexico</h5>
				</div>
			</div>
		</div>
	);
};

export default Home;
