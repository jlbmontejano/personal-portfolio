import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div>
      <h3>About Me</h3>
      <p>
        I am a professional drummer from Baja California, Mexico seeking a
        career change to software engineering and development. I am self-taught
        and have always been interested in all types of logic and math related
        topics. I am a curious and passionate individual by nature that is never
        afraid to try new things out; to me, information and time are two of the
        most invaluable things in life.
      </p>
      <div className="image-technologies">
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/images/my-photo.jpg`}
            alt="myself"
          />
        </div>
        <div>

          <div className="technologies-list">
            <h4>Languages: </h4>
            <p>HTML, CSS, JavaScript</p>
            <p>Python</p>
            <p>SQL</p>
          </div>

          <div className="technologies-list">
            <h4>Technologies: </h4>
            <p>ReactJS</p>
            <p>NodeJS</p>
            <p>PostgreSQL</p>
            <p>GIT</p>
          </div>

        </div>
      </div>
      <hr id="projects" style={{ visibility: "hidden" }} />
    </div>
  );
};

export default AboutMe;
