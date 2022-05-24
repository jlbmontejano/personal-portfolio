import React from "react";
import imgSource from "./images/my-photo.jpg";

const AboutMe = () => {
  return (
    <div  id="about-me">
      <h3>About Me</h3>
      <p>
        I am a professional drummer from Baja California, Mexico seeking a
        career change to software engineering and development. I am self-taught
        and have always been interested in all types of logic and math related
        topics. I am a curious and passionate individual by nature that is never
        afraid to try new things out; to me, information and time are two of the
        most invaluable things in life.
      </p>
      <div className="image">
        <img src={imgSource} alt="myself" />
        <div>
          <h4>Languages: </h4>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>Python</li>
            <li>SQL</li>
          </ul>

          <h4>Technologies: </h4>
          <ul>
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>PostgreSQL</li>
            <li>GIT</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
