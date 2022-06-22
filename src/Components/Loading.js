import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-screen">
      <div className="rectangle-container">
        <div className="rectangle odd"></div>
        <div className="rectangle even"></div>
        <div className="rectangle odd"></div>
        <div className="rectangle even"></div>
        <div className="rectangle odd"></div>
      </div>
    </div>
  );
};

export default Loading;
