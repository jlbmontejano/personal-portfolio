import Footer from './components/Footer';
import Menu from './components/Menu';
import AboutMe from './sections/AboutMe';
import Home from './sections/Home';
import Other from './sections/Other';
import WorkExperience from './sections/WorkExperience';

const App = () => {
	return (
		<main>
			<div className='absolute' id='home' />
			<Menu />
			<Home />
			<AboutMe />
			<WorkExperience />
			<Other />
			<Footer />
		</main>
	);
};

export default App;
