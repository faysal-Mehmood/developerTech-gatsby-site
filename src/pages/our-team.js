import React from "react";
import Layout from "../components/layout";
import TeamMemberCard from "../utils/teamMemberCard";
import eve from "../assets/images/eve.png";
import hardson from "../assets/images/hardson.png";
import brown from "../assets/images/brown.png";

const OurTeam = () => {
  return (
    <Layout>
      <div className="page-wrapper">
        <div className="team-hero-section">
          <h2 className="hero-sec-title"> Our Team</h2>
        </div>
        <div className="page-container flex-between py-5 flex-wrap">
          <TeamMemberCard
            teamMemberphoto={eve}
            teamMemberName="Chris Joye"
            memberDesignation="Developer"
          />
          <TeamMemberCard
            teamMemberphoto={hardson}
            teamMemberName="Mike Hardson"
            memberDesignation="Developer"
          />
          <TeamMemberCard
            teamMemberphoto={brown}
            teamMemberName="Jessica Brown"
            memberDesignation="Developer"
          />
          <TeamMemberCard
            teamMemberphoto={eve}
            teamMemberName="Chris Joye"
            memberDesignation="Developer"
          />
          <TeamMemberCard
            teamMemberphoto={hardson}
            teamMemberName="Mike Hardson"
            memberDesignation="Developer"
          />
          <TeamMemberCard
            teamMemberphoto={brown}
            teamMemberName="Jessica Brown"
            memberDesignation="Developer"
          />
        </div>
      </div>
    </Layout>
  );
};

export default OurTeam;
