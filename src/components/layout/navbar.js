import { Link } from "gatsby";
import React from "react";
import Header from "./header";
import fbIcon from "../../assets/icons/Group 77.svg";
import twitterIcon from "../../assets/icons/Group.svg";
import pinterestIcon from "../../assets/icons/Group (1).svg";
const Navbar = ({ children }) => {
  return (
    <div className="page-container page-wrapper">
      {/* <h3>menu will be here</h3>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/blogs">blogs</Link> */}
      {/* <div className="page-container">
        <Header />
      </div>
      <div className="header-menu">
        <div className="page-container">
          <div className="menu-list">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Aout</a>
              </li>
              <li>
                <a href="#">Pages</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <div className="social-links">
              <img src={fbIcon} alt="facebook icon" />
              <img src={twitterIcon} alt="twitter icon" />
              <img src={pinterestIcon} alt="pinterest icon" />
              <img src={fbIcon} alt="facebook icon" />
            </div>
          </div>
        </div>
      </div> */}
      {children}
    </div>
  );
};

export default Navbar;
