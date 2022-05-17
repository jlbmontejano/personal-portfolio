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
        href="./images/jlbm-resume.pdf"
        target="_blank"
        rel="noreferrer"
        download="Jorge Luis Buenrostro Montejano CV"
      >
        <span>Resume</span>
      </a>
    </div>
  );
};

export default Footer;
