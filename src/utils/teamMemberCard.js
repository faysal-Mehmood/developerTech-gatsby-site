import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import sharebutton from "../../src/assets/images/sharebutton.png";
const TeamMemberCard = ({ teamMemberphoto, teamMemberName, memberDesignation }) => {
  return (
    <div className="team-card-detail">
      <div className="member-pic">
        <img src={teamMemberphoto} alt="hwlll" className="res-seize" />
      </div>
      <div className="memberdetail">
        <div className="name-member">
          <Heading
            title={teamMemberName}
            className="services-heading3"
            color={"black"}
            size="26px"
          />
          <Paragraph text={memberDesignation} color="black" size="20px" />
        </div>
        <div className="member-social">
          <img src={sharebutton} alt="hwlll" className="" />
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
