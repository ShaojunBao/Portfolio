import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import profile_img from "../../assets/images/profile_img.png";
function Hero() {
  return (
    <div className="hero">
      <img src={profile_img} alt="" width={300} height={200} />
      <h1>
        <span>I'm Shaojun Bao,</span> I'm a full-stack developer based in USA
      </h1>
      <p>
        Hi, I’m Shaojun Bao. I’m a full-stack developer with over 5 years of
        experience building responsive, user-focused web applications.
      </p>
      <div className="hero-action">
        <Link to="/contact" className="hero-connect">
          Connect with Me
        </Link>
        <a
          href="/public/resume/Shaojun_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-resume"
        >
          My Resume
        </a>
      </div>
    </div>
  );
}

export default Hero;
