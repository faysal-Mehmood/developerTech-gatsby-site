import { Link } from "gatsby";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import Header from "./header";
import Footerlearn from "./footerlearn";
import Footer from "./footer";
import fbIcon from "../../assets/icons/Group 77.svg";
import twitterIcon from "../../assets/icons/Group.svg";
import pinterestIcon from "../../assets/icons/Group (1).svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Layout = ({ children }) => {
  return (
    <div className="page-wrapper">
      <div className="page-container">
        <Header />
      </div>
      <div className="header-menu">
        <div className="page-container">
          <Navbar bg="light" expand="lg">
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <div className="menu-list">
                  <div className="menu-items">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                    <Nav.Link href="#home">Pages</Nav.Link>
                    <Nav.Link href="#link">Services</Nav.Link>
                    <Nav.Link href="#home">Contact</Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
                  </NavDropdown> */}
                  </div>
                  <div className="social-links">
                    <img src={fbIcon} alt="facebook icon" />
                    <img src={twitterIcon} alt="twitter icon" />
                    <img src={pinterestIcon} alt="pinterest icon" />
                    <img src={fbIcon} alt="facebook icon" />
                  </div>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          {/* <ul>
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
            </ul> */}
          {/* <div className="social-links">
              <img src={fbIcon} alt="facebook icon" />
              <img src={twitterIcon} alt="twitter icon" />
              <img src={pinterestIcon} alt="pinterest icon" />
              <img src={fbIcon} alt="facebook icon" />
            </div> */}
        </div>
      </div>
      {children}
      <Footerlearn />
      <Footer />
    </div>
  );
};

export default Layout;
