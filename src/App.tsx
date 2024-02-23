import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./sections/AboutMe";
import WorkExperience from "./sections/WorkExperience";
// import Projects from "./sections/Projects";
import Other from "./sections/Other";

const App = () => {
	return (
		<div>
			<Header />
			<AboutMe />
			<WorkExperience />
			{/* <Projects /> */}
			<Other />
			<Footer />
		</div>
	);
};

export default App;
