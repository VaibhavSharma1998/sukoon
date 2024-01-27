import React from "react";
import logo from "../Images/logo.jpeg";
import { MdAddCall, MdWatchLater } from "react-icons/md";

import "./navbar.css";

export const Navbar = () => {
  return (
    <header>
      <nav class="navbar">
        <div class="container">
          <a class="navbar-brand">
            <img src={logo} alt="sukoon" className="logo " />
          </a>
          <div class="d-flex">
            <div className="nav-left">
              <div className="navbar-number">
                <MdAddCall size={40} />
                <div className="navbar-phone-logo-right">
                  <p>9416499785</p>
                  <p>24/7 Emergency Phone</p>
                </div>
              </div>
              <div className="navbar-number margin-20">
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
    </header>
  );
};
