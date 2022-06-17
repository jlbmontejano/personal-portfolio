import React from "react";
import "./IndividualProject.css";

const IndividualProject = ({ image, description, link, code }) => {
  return (
    <div>
      <div className="individualCard">
        <a href={link} target="_blank" rel="noreferrer">
          <img src={image} alt="one-project" />
          <p className="description">{description}</p>
        </a>
      </div>
      <a href={code} target="_blank" rel="noreferrer">
        <button>CODE</button>{" "}
      </a>
    </div>
  );
};

export default IndividualProject;
