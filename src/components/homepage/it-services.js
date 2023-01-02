import React from "react";
import Heading from "../../utils/Heading";
import Paragraph from "../../utils/Paragraph";
import productdev from "../../assets/images/productdev.png";
import digitalmarket from "../../assets/images/digitalmarket.png";
import systemsecurity2 from "../../assets/images/systemsecurity2.png";
import systemsecurity from "../../assets/images/systemsecurity.png";
import dataanalysis from "../../assets/images/dataanalysis.png";
const Itservices = () => {
  return (
    <div className="service-section">
      <div className="page-container service-top-3">
        <div className="block-1">
          <div className="blocks-text">
            <Heading
              title={`Tech Solutions`}
              size="24px"
              className={"lineheight"}
            />
            <Heading
              title={`Design/Ideas`}
              size="18px"
              className={"lineheight"}
            />
          </div>
        </div>
        <div className="block-2">
          <div className="blocks-text">
            <Heading
              title={`Plateform Intigration`}
              size="24px"
              className={"lineheight"}
            />
            <Heading
              title={`Design/Ideas`}
              size="18px"
              className={"lineheight"}
            />
          </div>
        </div>
        <div className="block-3">
          <div className="blocks-text">
            <Heading
              title={`Virtual Reality`}
              size="24px"
              className={"lineheight"}
            />
            <Heading
              title={`Design/Ideas`}
              size="18px"
              className={"lineheight"}
            />
          </div>
        </div>
      </div>
      <div className="services-back">
        <div className="page-container services-cont">
          <div className="text-services">
            <div className="text-services-1">
              <Paragraph
                text="What We’re Offering"
                color="#7100FF"
                size="18px"
              />
              <Heading
                title={`Dealing in all Professional IT Services`}
                className="services-heading"
              />
            </div>
            <div className="text-services-2">
              <Paragraph
                text="We offers a full-cycle software development services that meet varied business requirements from IT strategy consulting to the end-to-end development of 
scalable solutions."
                color="white"
                size="16px"
              />
            </div>
          </div>
          <div className="detail-services">
            <div className="detail-1">
              <img src={productdev} alt="hwlll" className="picloc" />
              <Heading
                title={`Product Development`}
                className="details-heading"
              />
              <Paragraph
                className={"detail-description"}
                text="Providing the best IT 
                solutions for non-IT 
                businesses."
                color="white"
                size="16px"
              />
            </div>
            <div className="detail-1">
              <img src={digitalmarket} alt="hwlll2" className="picloc" />
              <Heading
                title={`Digital Marketing`}
                className="details-heading"
              />

              <Paragraph
                className={"detail-description"}
                text="Providing the best IT 
                solutions for non-IT 
                businesses."
                color="white"
                size="16px"
              />
            </div>
            <div className="detail-1">
              <img src={systemsecurity} alt="hwlll2" className="picloc" />
              <Heading title={`Security System`} className="details-heading" />
              <Paragraph
                className={"detail-description"}
                text="Providing the best IT 
                solutions for non-IT 
                businesses."
                color="white"
                size="16px"
              />
            </div>
            <div className="detail-1">
              <img src={systemsecurity2} alt="hwlll2" className="picloc" />
              <Heading title={`Security System`} className="details-heading" />
              <Paragraph
                className={"detail-description"}
                text="Providing the best IT 
                solutions for non-IT 
                businesses."
                color="white"
                size="16px"
              />
            </div>
            <div className="detail-1">
              <img src={dataanalysis} alt="hwlll5" className="picloc" />
              <Heading title={`Data Analysis`} className="details-heading" />
              <Paragraph
                className={"detail-description"}
                text="Providing the best IT 
                solutions for non-IT 
                businesses."
                color="white"
                size="16px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Itservices;
