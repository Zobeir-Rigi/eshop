import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <i className="myname">Created By @Zobeir</i>
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <GitHubIcon className="githubIcon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
