import React from 'react'
import GitHubIcon from "@mui/icons-material/GitHub";
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <i className="myname">Created By @Zobeir</i>
        <a href="https://github.com/" target="_blank">
          <GitHubIcon className="githubIcon" />
        </a>
      </div>
    </div>
  );
}

export default Footer