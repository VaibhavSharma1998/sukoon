import React from "react";
import logo from "../Images/logo.jpeg";

import { MdAddCall, MdWatchLater } from "react-icons/md";

import "./styles.css";

export const Navbar = () => {
  return (
    <>
    <header>
      <nav className="navbar">
        <div className="container">
          <img src={logo} alt="sukoon" className="logo " />

          <div className="d-flex">
            <div className="nav-left">
              <div className="navbar-number">
                <MdAddCall size={40} />
                <div className="navbar-phone-logo-right">
                  <p>9416499785</p>
                  <p>24/7 Emergency Phone</p>
                </div>
              </div>
              <div className="navbar-number margin-50">
                <MdWatchLater size={40} />
                <div className="navbar-phone-logo-right">
                  <p>Monday - Friday</p>
                  <p>9AM - 9PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* navbar 2 start */}
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav border-top">
              <li className="nav-item">
                <a className="nav-link active font24" aria-current="page" href="#$">
                  Find Doctors
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link margin-lr-20" href="#$">
                  Video Consult
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link margin-lr-20" href="#$">
                  Medicines
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link margin-lr-20" href="#$">
                  Lab Tests
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link margin-lr-20" href="#$">
                  Surgeries
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* navbar 2 ends */}
    </header>

     
    </>
    
  );
};
