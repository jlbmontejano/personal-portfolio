import React from "react";
import IndividualProject from "./IndividualProject";
import "./ProjectSection.css";

const ProjectSection = () => {
  const AdviceGenerator = {
    src: `${process.env.PUBLIC_URL}/images/advice-generator.jpg`,
    description:
      "Small project that fetches an advice from an API every time the button is pressed.",
    link: "https://jlbm-advice-generator.herokuapp.com/",
    code: "https://github.com/jlbmontejano/advice-generator-app",
    key: 0,
  };
  const Robofriends = {
    src: `${process.env.PUBLIC_URL}/images/robofriends.png`,
    description:
      "Displays all your robofriends from an API, you can then filter your search through the search box.",
    link: "https://jlbm-robofriends.herokuapp.com/",
    code: "https://github.com/jlbmontejano/robofriends",
    key: 1,
  };
  const FaceRecognition = {
    src: `${process.env.PUBLIC_URL}/images/face-recognition.png`,
    description:
      "Full stack project: you can register, sign in, sign out and upload a photo for an API to identify the faces within it.",
    link: "https://face-rec-pro.herokuapp.com/",
    code: "https://github.com/jlbmontejano/faceRecognitionFrontEnd",
    key: 2,
  };
  const imageSource = [FaceRecognition, Robofriends, AdviceGenerator];
  return (
    <div>
      <h3>Projects</h3>
      <p className="note">
        Note: these projects are hosted on Heroku, they may take a few seconds
        to load.
      </p>
      <div className="project-section">
        {imageSource.map(image => (
          <IndividualProject
            image={image.src}
            description={image.description}
            link={image.link}
            code={image.code}
            key={image.key}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
