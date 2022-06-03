import React from "react";

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
      <div className="image">
        <img
          src={process.env.PUBLIC_URL + "images/my-photo.jpg"}
          alt="myself"
        />
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
      <hr id="projects" style={{ visibility: "hidden" }} />
    </div>
  );
};

export default AboutMe;
