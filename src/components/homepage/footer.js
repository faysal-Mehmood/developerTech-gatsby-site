import React from "react";
import Heading from "../../utils/Heading";
import Paragraph from "../../utils/Paragraph";
import logofooter from "../../assets/images/logofooter.png";
import twitter from "../../assets/images/twitter.png";
import printre from "../../assets/images/printre.png";
import facebook from "../../assets/images/facebook.png";
import insta from "../../assets/images/insta.png";
import mail from "../../assets/images/mail.png";
import location from "../../assets/images/location.png";
import call from "../../assets/images/call.png";

const Footer = () => {
  return (
    <div className="footer-section ">
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
            <Heading
              title={`Meet our Team`}
              className="footer-section-2-links"
            />
          </div>

          <div>
            <Heading
              title={`News & Media`}
              className="footer-section-2-links"
            />
          </div>

          <div>
            <Heading
              title={`Our Projects`}
              className="footer-section-2-links"
            />
          </div>

          <div>
            <Heading title={`Contact`} className="footer-section-2-links" />
          </div>

          <div>
            <Heading title={`Link`} className="footer-section-2-links" />
          </div>
        </div>
      </div>
      <div className="footer-section-3"></div>
      <div className="footer-section-4">
        <Heading title={`Contact`} className="footer-section-4-heading" />
        <div className="contact-comp">
          <div className="contact-number">
            <div>
              <img src={call} alt="hwlll" className="" />
            </div>
            <div>
              <Heading
                title={`+88(9800)6802`}
                className="footer-section-4-contacts"
              />
            </div>
          </div>
          <div className="contact-number">
            <div>
              <img src={mail} alt="hwlll" className="" />
            </div>
            <div>
              <Heading
                title={`needhelp@company.com`}
                className="footer-section-4-contacts"
              />
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
