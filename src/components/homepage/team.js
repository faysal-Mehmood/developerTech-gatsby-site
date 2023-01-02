import React from "react";
import Heading from "../../utils/Heading";
import Paragraph from "../../utils/Paragraph";
import eve from "../../assets/images/eve.png";
import line from "../../assets/images/line.png";
import hardson from "../../assets/images/hardson.png";
import brown from "../../assets/images/brown.png";
import sharebutton from "../../assets/images/sharebutton.png";
const Team = () => {
  return (
    <div className="page-container team-section">
      <div className=" text-services">
        <div className="text-services-1">
          <div className="line-head">
            <div className="line-first">
              <img src={line} alt="hwlll" className="" />
            </div>
            <div className="line-text">
              <Paragraph text="Our Expert People" color="#7100FF" size="18px" />
            </div>
          </div>
          <Heading
            title={`Meet Our Professional Team
            Member`}
            className="services-heading2"
            color={"black"}
          />
        </div>
        <div className="text-services-2">
          <Paragraph
            text="Meet a team of experienced & knowledgeable professionals who make our 
            customers pleased with their ability to create the best IT solutions to improve 
            performance of clients."
            color="black"
            size="16px"
          />
        </div>
      </div>
      <div className="team-cards">
        <div className="team-card-detail">
          <div className="member-pic">
            <img src={eve} alt="hwlll" className="" />
          </div>
          <div className="memberdetail">
            <div className="name-member">
              <Heading
                title={`Christine Eve`}
                className="services-heading3"
                color={"black"}
                size="26px"
              />
              <Paragraph text="Developer" color="black" size="20px" />
            </div>
            <div className="member-social">
              <img src={sharebutton} alt="hwlll" className="" />
            </div>
          </div>
        </div>

        <div className="team-card-detail">
          <div className="member-pic">
            <img src={hardson} alt="hwlll" className="" />
          </div>
          <div className="memberdetail">
            <div className="name-member">
              <Heading
                title={`Mike Hardson`}
                className="services-heading3"
                color={"black"}
                size="26px"
              />
              <Paragraph text="Developer" color="black" size="20px" />
            </div>
            <div className="member-social">
              <img src={sharebutton} alt="hwlll" className="" />
            </div>
          </div>
        </div>

        <div className="team-card-detail">
          <div className="member-pic">
            <img src={brown} alt="hwlll" className="" />
          </div>
          <div className="memberdetail">
            <div className="name-member">
              <Heading
                title={`Jessica Brown`}
                className="services-heading3"
                color={"black"}
                size="26px"
              />
              <Paragraph text="Developer" color="black" size="20px" />
            </div>
            <div className="member-social">
              <img src={sharebutton} alt="hwlll" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
