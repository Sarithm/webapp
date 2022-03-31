import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="col solution">
            <h6>Solutions</h6>

            <ul>
              <li>
                <Link to="/rs" className="link">
                  Recruiting Services
                </Link>
              </li>
            </ul>
          </div>

          <div className="col support">
            <h6>Support</h6>

            <ul>
              <li>
                <Link to="/" className="link">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div className="col Company">
            <h6>Company</h6>

            <ul>
              <li>
                <Link to="/about" className="link">
                  About
                </Link>
              </li>

              <li>
                <Link to="/career" className="link">
                  Jobs
                </Link>
              </li>
            </ul>
          </div>

          <div className="col legal">
            <h6>Legal</h6>

            <ul>
              <li>
                <Link to="/" className="link">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="content">
            <div className="rights">
              <p>© 2022 Sarithm Technologies. All rights reserved.</p>
            </div>
          </div>
          <a href="https://www.facebook.com/sarithm.co">
            <FaFacebook
              size={20}
              style={{ color: "#d3d3d3", marginRight: "10px" }}
            />
          </a>
          <a href="https://www.linkedin.com/company/sarithm">
            <FaLinkedin
              size={20}
              style={{ color: "#d3d3d3", marginRight: "10px" }}
            />
          </a>
          <a href="https://twitter.com/SarithmLimited">
            <FaTwitter
              size={20}
              style={{ color: "#d3d3d3", marginRight: "10px" }}
            />
          </a>
          <a href="https://github.com/Sarithm">
            <FaGithub
              size={20}
              style={{ color: "#d3d3d3", marginRight: "10px" }}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
