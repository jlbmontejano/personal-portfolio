import { useState, useEffect } from "react";
import Loading from "./Components/Loading";
import Navigation from "./Components/Navigation";
import AboutMe from "./Components/AboutMe";
import ProjectSection from "./Components/ProjectSection";
import Footer from "./Components/Footer";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      {loading === true ? (
        <Loading />
      ) : (
        <div className="App" id="home">
          <Navigation />
          <h1>Jorge Buenrostro</h1>
          <h2>Frontend Developer</h2>
          <hr id="about-me" />
          <div className="main-body">
            <AboutMe />
            <ProjectSection />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
