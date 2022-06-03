import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App" id="home">
      <Navigation />
      <Home />
      <div className="main-body">
        <AboutMe />
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default App;
