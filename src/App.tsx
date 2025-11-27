import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { Toaster } from "@/components/ui/sonner";
import AboutMe from "@/sections/AboutMe";
import ContactForm from "@/sections/ContactForm";
import Experience from "@/sections/Experience";
import Home from "@/sections/Home";
import Other from "@/sections/Other";
import Projects from "@/sections/Projects";

const App = () => {
	return (
		<main>
			<div className='absolute' id='home' />
			<Menu />
			<Home />
			<AboutMe />
			<Experience />
			<Projects />
			<div className='flex flex-col sm:flex-row'>
				<Other />
				<ContactForm />
			</div>
			<Footer />
			<Toaster />
		</main>
	);
};

export default App;
