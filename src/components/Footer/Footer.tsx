import React from "react";
import "./Footer.style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <p className="copyright">
        {"Łukasz Cybulski - " + new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
