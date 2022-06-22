import React from "react";
import "./IndividualProject.css";

const IndividualProject = ({ title, image, description, link, code }) => {
  return (
    <div>
      <h4>{title}</h4>
      <a href={link} target="_blank" rel="noreferrer">
        <div className="individualCard">
          <img src={image} alt="one-project" />
          <p className="description">{description}</p>
        </div>
      </a>
      <a href={code} target="_blank" rel="noreferrer">
        <button className="code-button">CODE</button>
      </a>
    </div>
  );
};

export default IndividualProject;
