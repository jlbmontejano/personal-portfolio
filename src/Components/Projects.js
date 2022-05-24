import React from "react";
import Individual from "./Individual";
import SourceAdvice from "./images/advice-generator.jpg";
import SourceRobo from "./images/robofriends.png";
import SourceFace from "./images/face-recognition.png";
import "./Project-Section.css";

const Projects = () => {
  const AdviceGenerator = {
    src: SourceAdvice,
    description:
      "Small project that fetches an advice from an API every time the button is pressed.",
    link: "https://jlbm-advice-generator.herokuapp.com/",
    key: 0,
  };
  const Robofriends = {
    src: SourceRobo,
    description:
      "Displays all your robofriends from an API, you can then filter your search through the search box.",
    link: "https://jlbm-robofriends.herokuapp.com/",
    key: 1,
  };
  const FaceRecognition = {
    src: SourceFace,
    description:
      "Full stack project: you can register, sign in, sign out and upload a photo for an API to identify the faces within it.",
    link: "https://face-rec-pro.herokuapp.com/",
    key: 2,
  };
  const imageSource = [FaceRecognition, Robofriends, AdviceGenerator];
  return (
    <div id="projects">
      <h3>Projects</h3>
      <div className="project-section">
        {imageSource.map(image => (
          <Individual
            image={image.src}
            description={image.description}
            link={image.link}
            key={image.key}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
