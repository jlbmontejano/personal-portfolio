import React from "react";
import "./IndividualProject.css";

const IndividualProject = ({ title, image, description, link }) => {
  return (
    <div>
      <h4>{title}</h4>
      <a href={link} target="_blank" rel="noreferrer">
        <div className="individualCard">
          <img src={image} alt="one-project" />
          <p className="description">{description}</p>
        </div>
      </a>
    </div>
  );
};

export default IndividualProject;
