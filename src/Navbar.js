import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />{" "}
          </Link>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/career" className="nav-link">
              Careers
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
