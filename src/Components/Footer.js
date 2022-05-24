import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <a
        href="https://github.com/jlbmontejano"
        target="_blank"
        rel="noreferrer"
      >
        <span>GitHub</span>
      </a>
      <a
        href="https://www.linkedin.com/in/jlbmontejano/"
        target="_blank"
        rel="noreferrer"
      >
        <span>LinkedIn</span>
      </a>
      <a
        href={"/jlbm-cv.pdf"}
        download="Jorge Luis Buenrostro Montejano CV"
        target="_blank"
        rel="noreferrer"
      >
        <span>Resume</span>
      </a>
    </div>
  );
};

export default Footer;
