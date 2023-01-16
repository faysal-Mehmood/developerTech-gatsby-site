import React from "react";
import Heading from "../../utils/Heading";
import Paragraph from "../../utils/Paragraph";
import logofooter from "../../../src/assets/images/logofooter.png";
import twitter from "../../../src/assets/images/twitter.png";
import printre from "../../../src/assets/images/printre.png";
import facebook from "../../../src/assets/images/facebook.png";
import insta from "../../../src/assets/images/insta.png";
import mail from "../../../src/assets/images/mail.png";
import location from "../../../src/assets/images/location.png";
import call from "../../../src/assets/images/call.png";

const Footer = () => {
  return (
    <div className="page-container footer-section ">
      <div className="footer-section-1">
        <div className="footer-section-1-logo">
          <img src={logofooter} alt="hwlll" className="" />
        </div>
        <div className="footer-section-1-text">
          <Paragraph
            text="We work with a passion of 
            taking challenges and creating 
            new ones in advertising sector."
            color="White"
            className={"footer-1-text"}
          />

          <div className="footer-section-1-text-social">
            <div className="social-1">
              <img src={twitter} alt="hwlll" className="" />
            </div>

            <div className="social-2">
              <img src={facebook} alt="hwlll" className="" />
            </div>

            <div className="social-3">
              <img src={printre} alt="hwlll" className="" />
            </div>

            <div className="social-4">
              <img src={insta} alt="hwlll" className="" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-section-2">
        <Heading title={`Link`} className="footer-section-2-heading" />
        <div className="sectio-2-links">
          <div>
            <Heading title={`About`} className="footer-section-2-links" />
          </div>

          <div>
            <Heading title={`Meet our Team`} className="footer-section-2-links" />
          </div>

          <div>
            <Heading title={`News & Media`} className="footer-section-2-links" />
          </div>

          <div>
            <Heading title={`Our Projects`} className="footer-section-2-links" />
          </div>

          <div>
            <Heading title={`Contact`} className="footer-section-2-links" />
          </div>

          <div>
            <Heading title={`Link`} className="footer-section-2-links" />
          </div>
        </div>
      </div>
      <div className="footer-section-3">
        <Heading title={`News Letter`} className="footer-section-3-heading" />
        <div className="footer-sec-3-1-details">
          <div className="footer-sec-3-1">
            <Heading
              title={`Signup for our latest news & articles. We won’t give you spam mails.`}
              className="footer-section-3-text"
            />
          </div>
          <div className="footer-sec-3-2">
            <div className="text-input">
              <div class="input-text">
                <input type="text" placeholder="text" name="mail" required />
              </div>
              <div className="send-button"></div>
            </div>
          </div>
          <div className="footer-sec-3-3">
            <Heading
              title={`I agree to all terms and policies of the
          Company
          `}
              className="footer-section-3-text"
            />
          </div>
        </div>
      </div>
      <div className="footer-section-4">
        <Heading title={`Contact`} className="footer-section-4-heading" />
        <div className="contact-comp">
          <div className="contact-number">
            <div>
              <img src={call} alt="hwlll" className="" />
            </div>
            <div>
              <Heading title={`+88(9800)6802`} className="footer-section-4-contacts" />
            </div>
          </div>
          <div className="contact-number">
            <div>
              <img src={mail} alt="hwlll" className="" />
            </div>
            <div>
              <Heading title={`needhelp@company.com`} className="footer-section-4-contacts" />
            </div>
          </div>

          <div className="contact-number">
            <div>
              <img src={location} alt="hwlll" className="" />
            </div>
            <div>
              <Heading
                title={`88 Broklyn Golden Road 
              Street New York. USA`}
                className="footer-section-4-contacts"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
