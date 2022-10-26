import React from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";
const Footer = () => {
  return (
    <div className="bg-dark footer">
      <div className="content">
        <div className="container text-white">
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4">
            <div className="col">
              <h2>About us</h2>
              <hr />
              <p>
                Smart Apparel BD (SABD) is a 100% export oriented Garment
                Buying House and Sourcing agent. Smart Apparels BD. located
                in Dhaka, which is the hub of all the commercial and business
                activities of Bangladesh.
              </p>
            </div>
            <div className="col">
              <h2>Products</h2>
              <hr />
              <div className="products quickLinks">
                <ul>
                  <li>
                    <Link to="/tShirt">T-Shirt</Link>
                  </li>
                  <li>
                    <Link to="/poloShirt">Polo Shirt</Link>
                  </li>
                  <li>
                    <Link to="/hoody">Hoody</Link>
                  </li>
                  <li>
                    <Link to="/sweatShirt">Sweat Shirt</Link>
                  </li>
                  <li>
                    <Link to="/jogger">Jogger</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to="/chino">Chino</Link>
                  </li>
                  <li>
                    <Link to="/shorts">Short</Link>
                  </li>
                  <li>
                    <Link to="/shirts">Shirts</Link>
                  </li>
                  <li>
                    <Link to="/jeans">Jeans</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to="/sweater">Sweater</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <h2>Quick Links</h2>
              <hr />
              <div className="quickLinks">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/mission">Mission & Vision</Link>
                  </li>
                  <li>
                    <Link to="/services">Service</Link>
                  </li>
                  <li>
                    <a target="_blank" href="https://drive.google.com/file/d/1aDo3HkgpK8G4rOlwzNzRdvLsRDvvihyn/view?fbclid=IwAR04zkqzj52goM2xKQJBxp5tcJ4TF_nXB23VJHDrqCIpSpUeya3DMNcJ9ZY">Profile</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <h2>Contact</h2>
              <hr />
              {/* <div className="phone mb-3">
                <i className="fa-solid fa-location-dot p-1"></i>
                <span>
                  Mirpur-11, Block-C, Line-2,<br></br>{" "}
                  <span className="house">
                    House-41, Dhaka-1216, Bangladesh
                  </span>
                </span>
              </div> */}
              <div className="phone mb-3 d-flex">
                <i className="fa-solid fa-phone fs-6 me-2 mt-2"></i>
                <p>+88 01863-294433 <br></br>+88 01726-193502</p>
              </div>
              {/* <div className="e">
                <i className="fa-solid fa-envelope fs-6 text-lowercase"></i>
                <span className="email">rezamahamud333@gmail.com</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-menu">
        <p> Copyright © 2022 All rights reserved.</p>
        <ul className="social-icon">
          <li>
            <a
              href="#" target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="#" target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
