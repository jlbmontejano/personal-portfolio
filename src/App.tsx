import Footer from "./components/Footer";
import Menu from "./components/Menu";
import AboutMe from "./sections/AboutMe";
import Experience from "./sections/Experience";
import Home from "./sections/Home";
import Other from "./sections/Other";
import Projects from "./sections/Projects";

const App = () => {
	return (
		<main>
			<div className='absolute' id='home' />
			<Menu />
			<Home />
			<AboutMe />
			<Experience />
			<Projects />
			<Other />
			<Footer />
		</main>
	);
};

export default App;
