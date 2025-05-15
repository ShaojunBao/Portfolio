import React from "react";
import "./Footer.css";
import call_icon from "../../assets/icons/call_icon.svg";
import email_icon from "../../assets/icons/email_icon.svg";
import location_icon from "../../assets/icons/location_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>Let’s talk</h2>
          <p>Open to new opportunities and collaborations — feel free to reach out!</p>
          <div className="footer-details">
            <div className="footer-detail">
              <img src={email_icon} width={24} alt="email" />
              <span>shaojunbao92@gmail.com</span>
            </div>
            <div className="footer-detail">
              <img src={call_icon} width={24} alt="phone" />
              <span>+1 515-218-2313</span>
            </div>
            <div className="footer-detail">
              <img src={location_icon} width={24} alt="location" />
              <span>Massachusetts, USA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
