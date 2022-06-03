import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <a
        href="https://github.com/jlbmontejano"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={process.env.PUBLIC_URL + "/images/github.svg"}
          alt="github-logo"
          className="logo"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/jlbmontejano/"
        target="_blank"
        rel="noreferrer"
      >
               <img
          src={process.env.PUBLIC_URL + "/images/linkedin.svg"}
          alt="github-logo"
          className="logo"
        />
      </a>
    </div>
  );
};

export default Footer;
