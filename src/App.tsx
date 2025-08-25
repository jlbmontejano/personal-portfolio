import { Route, Routes } from "react-router";
import Menu from "./components/Menu";
import AboutMe from "./sections/AboutMe";
import Home from "./sections/Home";
import Other from "./sections/Other";
import Projects from "./sections/Projects";
import WorkExperience from "./sections/WorkExperience";

const App = () => {
	return (
		<div className='flex flex-col h-screen'>
			<Menu />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about-me' element={<AboutMe />} />
				<Route path='/work-experience' element={<WorkExperience />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/other' element={<Other />} />
			</Routes>
		</div>
	);
};

export default App;
