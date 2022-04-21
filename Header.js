import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-md navbar-light bg-light px-5 navbar-inverse fixed-top py-lg-0 "
        style={{ padding: "15px", height: "inherit" }}
      >
        <div className="container" style={{ display: "inline" }}>
          <Link
            to="/home"
            className="navbar-brand"
            style={{
              float: "left",
            }}
          >
            <img src="https://sarithm.com/images/logo.png" alt="logo" />
          </Link>

          <button
            className="navbar-toggler me-5"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{
              float: "right",
              padding: "5px",
              color: "#333333",
              // border: "#333333 1px solid",
              margintop: "10px",
              marginRight: "20px",
              backgroundcolor: "#f4f4f4",
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end mt-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  to="/products"
                  className="nav-link active"
                  style={{
                    textDecoration: "none",
                    color: "#666666",
                  }}
                >
                  PRODUCTS
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "#787171", textDecoration: "none" }}
                >
                  SERVICES
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link
                      to="/mobile"
                      className="dropdown-item"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontSize: "14px",
                      }}
                    >
                      Mobile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/development"
                      className="dropdown-item"
                      style={{
                        color: "white",
                        fontSize: "14px",
                        textDecoration: "none",
                      }}
                    >
                      SOFTWARE <br /> DEVELOPMENT
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/consulting"
                      className="dropdown-item"
                      style={{
                        color: "white",
                        fontSize: "14px",
                        textDecoration: "none",
                      }}
                    >
                      IT Consulting
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/infra"
                      className="dropdown-item"
                      style={{
                        color: "white",
                        fontSize: "14px",
                        textDecoration: "none",
                      }}
                    >
                      INFRASTRUCTURE <br /> MAINTENANCE
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  to="/learn"
                  className="nav-link active"
                  style={{
                    color: "#666666",
                    textDecoration: "none",
                  }}
                >
                  LEARN
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    color: "#666666",
                    textDecoration: "none",
                  }}
                >
                  COMPANY
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link
                      to="/about"
                      className="dropdown-item"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontSize: "14px",
                      }}
                    >
                      ABOUT US
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="dropdown-item"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontSize: "14px",
                      }}
                    >
                      CONTACT US
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
