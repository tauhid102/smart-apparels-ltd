import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Navbar = () => {
  return (
    <div className="header">
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="https://i.ibb.co/V9yvzyR/header-Logo.png"
              alt="Logo"
              width= "120%"
              height="40"
              className="d-inline-block me-2"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to='/' className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/aboutUs' className="nav-link" href="#">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/companies' className="nav-link" href="#">
                  Companies
                </Link>
              </li>
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  href="http://example.com"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  Products{" "}
                </span>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li className="dropdown-submenu">
                    <Link to=''
                      className="dropdown-item dropdown-toggle"
                    >
                      Knit
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to='/tShirt' className="dropdown-item" href="#">
                          T-Shirt
                        </Link>
                      </li>
                      <li>
                        <Link to='/poloShirt'a className="dropdown-item" href="#">
                          Polo Shirt
                        </Link>
                      </li>
                      <li className="dropdown-submenu">
                        <Link to='/hoody' className="dropdown-item" href="#">
                          Hoody
                        </Link>
                      </li>
                      <li className="dropdown-submenu">
                        <Link to='/sweatShirt' className="dropdown-item" href="#">
                          Sweat Shirt
                        </Link>
                      </li>
                      <li className="dropdown-submenu">
                        <Link to='/jogger' className="dropdown-item" href="#">
                          Jogger
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <Link to=''
                      className="dropdown-item dropdown-toggle"
                      href="http://google.com"
                    >
                      Woven
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to='/chino' className="dropdown-item" href="#">
                          Chino
                        </Link>
                      </li>
                      <li>
                        <Link to='/shorts'a className="dropdown-item" href="#">
                          Shorts
                        </Link>
                      </li>
                      <li className="dropdown-submenu">
                        <Link to='/shirts' className="dropdown-item" href="#">
                          Shirts
                        </Link>
                      </li>
                      <li className="dropdown-submenu">
                        <Link to='/jeans' className="dropdown-item" href="#">
                          Jeans
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <Link to='/sweater'
                      className="dropdown-item"
                    >
                      Sweater
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to='/services' className="nav-link" href="#">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/contact' className="nav-link" href="#">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
