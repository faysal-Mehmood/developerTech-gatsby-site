import React from "react";
// import Team from "../../utils/team";
import Aboutbackground from "./aboutbackground";
import Testimonal from "./testimonial";
import Innovation from "./innovation";
import "./style.scss";
import TeamMemberCard from "../../utils/teamMemberCard";
import Christine from "../../assets/images/eve.png";
import hardson from "../../assets/images/hardson.png";
import Jessica from "../../assets/images/brown.png";
const Index = () => {
  return (
    <>
      <Aboutbackground />
      <Innovation />
      <Testimonal />
      <div className="page-container">
      <TeamMemberCard
            teamMemberphoto={Christine}
            teamMemberName="Christine Eve "
            memberDesignation="Developer"
      />
      <TeamMemberCard
            teamMemberphoto={hardson}
            teamMemberName="Mike Hardson"
            memberDesignation="Developer"
      />
      <TeamMemberCard
            teamMemberphoto={Jessica}
            teamMemberName="Jessica Brown"
            memberDesignation="Developer"
      />
      </div>
      {/* <Team /> */}
    </>
  );
};

export default Index;
