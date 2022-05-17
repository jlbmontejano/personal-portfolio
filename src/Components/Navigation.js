import React, { useRef } from "react";

const Navigation = ({ currentInfo, setInfo }) => {
  const myRef = useRef(currentInfo);
  const executeScroll = () => myRef.current.scrollIntoView();
  return (
    <div className="navigation">
      <span
        onClick={() => {
          setInfo("Home");
          executeScroll();
        }}
      >
        HOME
      </span>
      <span
        onClick={() => {
          setInfo("About Me");
          executeScroll();
        }}
      >
        ABOUT ME
      </span>
      <span
        onClick={() => {
          setInfo("Projects");
          executeScroll();
        }}
      >
        PROJECTS
      </span>
    </div>
  );
};

export default Navigation;
