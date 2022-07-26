import React from "react";
import {NavLink } from "react-router-dom";
import "./style.scss";
import bgImage from "../../assets/Images/simple-house-01.jpg";
import logo from "../../assets/Images/simple-house-logo.png";
import "../../assets/Styles/Global.scss";

const Header = () => {
  return (
    <div className=" header " style={{ backgroundImage: `url('${bgImage}')` ,  }}>
        <div className="headerContainer">
          <div className=" logoBlock">
            <div
              className="logo"
              style={{ backgroundImage: `url('${logo}')` }}
            />
            <div className=" logoTitle">
              <h1>Simple House</h1>
              <h4>new restaurant template</h4>
            </div>
          </div>
          <div className="links">
            <NavLink className="link" to="/Home" >
              Home
            </NavLink>
            <NavLink className="link" to="/about">
              About
            </NavLink>
            <NavLink className="link" to="/contact">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
  );
};

export default Header;
