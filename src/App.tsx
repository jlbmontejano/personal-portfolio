import Header from "./sections/Header";
import AboutMe from "./sections/AboutMe";
import WorkExperience from "./sections/WorkExperience";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";
import "./App.css";

const App = () => {
	return (
		<div>
			<Header />
			<AboutMe />
			<WorkExperience />
			<Projects />
			<Footer />
		</div>
	);
};

export default App;
