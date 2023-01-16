import { Link } from "gatsby";
import React from "react";
import Header from "./header";
import Footerlearn from "./footerlearn";
import Footer from "./footer";
import fbIcon from "../../assets/icons/Group 77.svg";
import twitterIcon from "../../assets/icons/Group.svg";
import pinterestIcon from "../../assets/icons/Group (1).svg";
const Layout = ({ children }) => {
  return (
    <div className="page-wrapper">
      <div className="page-container">
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
      </div>
      {children}
      <Footerlearn />
      <Footer />
    </div>
  );
};

export default Layout;
