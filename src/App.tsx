import Menu from "./components/Menu";
import Home from "./sections/Home";
import AboutMe from "./sections/AboutMe";
import WorkExperience from "./sections/WorkExperience";
// import Projects from "./sections/Projects";
import Other from "./sections/Other";

const App = () => {
	return (
		<div className='flex flex-col xl:flex-row'>
			<Menu />
			<div className='main-content'>
				<Home />
				<AboutMe />
				<WorkExperience />
				{/* <Projects /> */}
				<Other />
			</div>
		</div>
	);
};

export default App;
