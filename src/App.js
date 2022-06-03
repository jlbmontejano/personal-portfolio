import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <div className="main-body">
        <AboutMe />
        <Projects />
      </div>
      <p>
        You can download my resume
        <a
          href={"/jlbm-cv.pdf"}
          download="Jorge Luis Buenrostro Montejano CV"
          target="_blank"
          rel="noreferrer"
          className="resume"
        >
          here
        </a>
        .
      </p>
      <Footer />
    </div>
  );
};

export default App;
