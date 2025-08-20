import { useState } from "react";
import Menu from "./components/Menu";
import AboutMe from "./sections/AboutMe";
import Home from "./sections/Home";
import Other from "./sections/Other";
import WorkExperience from "./sections/WorkExperience";
import { MenuNavigation } from "./types";

const App = () => {
	const [current, setCurrent] = useState<MenuNavigation>("home");

	const displayPage = () => {
		switch (current) {
			case "home":
				return <Home />;
			case "about-me":
				return <AboutMe />;
			case "work-experience":
				return <WorkExperience />;
			case "other":
				return <Other />;
			default:
		}
	};

	return (
		<div className='flex flex-col h-screen'>
			<Menu setCurrent={setCurrent} />
			{displayPage()}
		</div>
	);
};

export default App;
