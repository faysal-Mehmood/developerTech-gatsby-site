import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Vector from "../assets/images/Group127.svg";
import "./utils.scss";

const ProjectCard = ({projectCardImage , projectCardTitle , projectCardText ,  projectCardBorder}) => {
  return (
    <div className="cards">
    <div className="card-dtail">
      <img src={projectCardImage} alt="This is the image of a boy" />
     {projectCardBorder?<img src={Vector} alt="Vector" className="Vector" />:null} 
      <div className="cards-dtail">
        <Heading
          title={projectCardTitle}
          className="cards-dtail-heading"
        />
        <Paragraph text={projectCardText} className="cards-dtail-para"/>
      </div>
    </div>
  </div>
  )
};
export default ProjectCard;
