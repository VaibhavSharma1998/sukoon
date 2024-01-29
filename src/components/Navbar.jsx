import React from "react";
import logo from "../Images/logo.jpeg";

import { MdAddCall, MdWatchLater } from "react-icons/md";

import "./navbar.css";

export const Navbar = () => {
  return (
    <>
    <header>
      <nav class="navbar">
        <div class="container">
          <img src={logo} alt="sukoon" className="logo " />

          <div class="d-flex">
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
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav border-top">
              <li class="nav-item">
                <a class="nav-link active font24" aria-current="page" href="#$">
                  Find Doctors
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link margin-lr-20" href="#$">
                  Video Consult
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link margin-lr-20" href="#$">
                  Medicines
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link margin-lr-20" href="#$">
                  Lab Tests
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link margin-lr-20" href="#$">
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
