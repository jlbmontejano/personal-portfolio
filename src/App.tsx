import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Home from "./sections/Home";
import AboutMe from "./sections/AboutMe";
import WorkExperience from "./sections/WorkExperience";
// import Projects from "./sections/Projects";
import Other from "./sections/Other";
import Footer from "./components/Footer";

const App = () => {
	AOS.init({
		delay: 100,
		duration: 800,
		easing: "ease",
	});

	return (
		<div>
			<Header />
			<div className='main-content'>
				<Home />
				<AboutMe />
				<WorkExperience />
				{/* <Projects /> */}
				<Other />
			</div>
			<Footer />
		</div>
	);
};

export default App;
