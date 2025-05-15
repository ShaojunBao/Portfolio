import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="navBar">
      <img className="nav-logo" src={logo} width={100} alt="Shaojun logo" />
      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
      </ul>
      <Link to="/contact" className="nav-connect">
        Connect With Me
      </Link>
    </div>
  );
};

export default Navbar;
