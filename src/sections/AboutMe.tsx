const AboutMe = () => {
	return (
		<div className='flex flex-col gap-3 p-7'>
			<h1>Jorge Buenrostro</h1>
			<h2>Frontend Developer</h2>
			<hr id='about-me' />
			<h3>About Me</h3>
			<p>As a dedicated frontend developer, I specialize in crafting innovative, efficient, and scalable solutions that drive real value. My passion for technology and problem-solving drives me to constantly seek new challenges that expand my skill set and contribute to the success of the projects I'm involved in. I am self-taught and have always been interested in all types of logic and math related topics. I am a curious and passionate individual by nature that is never afraid to try new things out; for me, information and time are two of the most invaluable things in life.</p>
			<div className="flex md:flex-col">
				<img src='/assets/my-photo.jpg' alt='jorge-photo' />

				<div className='flex flex-col'>
					<h4>Languages: </h4>
					<ul>
						<li>HTML, CSS, JavaScript</li>
						<li>Typescript</li>
						<li>SQL</li>
						<li>Swift</li>
						<li>Python</li>
					</ul>
				</div>
				<div className='flex flex-col'>
					<h4>Technologies: </h4>
					<ul>
						<li>ReactJS</li>
						<li>Vue</li>
						<li>NodeJS</li>
						<li>GIT</li>
						<li>SwiftUI</li>
					</ul>
				</div>
			</div>
			<hr id='projects' />
		</div>
	);
};

export default AboutMe;
