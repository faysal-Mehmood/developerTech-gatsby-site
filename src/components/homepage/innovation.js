import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Heading from "../../utils/Heading";
import Paragraph from "../../utils/Paragraph";
import PrimaryButton from "../../utils/primarybutton";
import ITsolutionLogo from "../../assets/images/it_logo_home 1.svg";
import maskgroup from "../../assets/images/Maskgroup.svg";
import maskgroup1 from "../../assets/images/Maskgroup1.svg";
import tickMark from "../../assets/icons/tickmark.svg";
const Innovation = () => {
  return (
    <div className="page-container">
      <div className="partner-of-innovation">
        <div className="it-solution-busi">
          <StaticImage src="../../assets/images/Group 158.svg" alt=" it solution images" />
          <img className="it-sol-logo" src={ITsolutionLogo} alt=" it solution logo" />
          <div className="total-client-count">
            <span>6800</span>
            <p>Satisfied Clients</p>
          </div>
        </div>
        <div className="company-partner">
          <div className="about-Your-company">
            <div className="top-bt-line"></div>
            <Paragraph text="About Your Company" color="#7100FF" size="14px" />
          </div>
          <Heading title={`We're Partner of Your Innovations`}  className="partner-heading" />
          <Paragraph
            text="Infetech is a provider of IT consulting and software development services. We have
            helped organizations and companies improve business performance & enhance their
            competitiveness."
            className="innovate-para"
          />

          <div className="web-networking">
            <div className="web-development">
              <img src={maskgroup1} alt="website development" />
              <h4 className="web-heading">Website Development</h4>
            </div>
            <div className="web-development">
              <img src={maskgroup} alt="website development" />
              <h4 className="web-heading">Internal Networking</h4>
            </div>
          </div>
          <div className="web-dev-para">
            <img src={tickMark} alt="tick mark icon" />
            <Paragraph text="Bringing new IT solutions to the market" />
          </div>
          <div className="web-dev-para">
            <img src={tickMark} alt="tick mark icon" />
            <Paragraph text="To be included the list of the best 100 IT companies" />
          </div>
          <div className="web-dev-para" style={{ marginBottom: "40px" }}>
            <img src={tickMark} alt="tick mark icon" />
            <Paragraph text="Our company have 300 IT senior professionals." />
          </div>
          <PrimaryButton btnText="Learn more" />
        </div>
      </div>
    </div>
  );
};

export default Innovation;
