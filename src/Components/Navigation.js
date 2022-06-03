import React from "react";

const Navigation = () => {
  return (
    <div className="navigation">
      <a href="#home">
        <span>HOME</span>
      </a>
      <a href="#about-me">
        <span>ABOUT ME</span>
      </a>
      <a href="#projects">
        <span>PROJECTS</span>
      </a>
      <a
        href={`${process.env.PUBLIC_URL}/Jorge Luis Buenrostro Montejano CV.pdf`}
        target="_blank"
        rel="noreferrer"
        className="resume"
      >
        <span>RESUME</span>
      </a>
    </div>
  );
};

export default Navigation;
