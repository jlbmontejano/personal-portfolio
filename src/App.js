import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [currentInfo, setInfo] = useState("Home");
  return (
    <div className="App">
      <Navigation currentInfo={currentInfo} setInfo={setInfo} />
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
