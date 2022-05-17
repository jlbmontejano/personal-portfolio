import React from "react";
import "./Individual.css";

const Individual = ({ image, description, link }) => {
  return (
    <div className="individualCard">
      <a href={link}>
        <img src={image} alt="one-project" />
        <p className="description">{description}</p>
      </a>
    </div>
  );
};

export default Individual;
