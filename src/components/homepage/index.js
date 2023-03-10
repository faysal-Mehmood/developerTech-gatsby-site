import React from "react";
import HeroSection from "./heroSection";
import Innovation from "./innovation";
import Itservices from "./it-services";
import Learnmore from "./learnmore";
import Projectsection from "./project-section";
import Videosection from "./videosection";
import Newarticle from "./newarticle";
import ExpertTeam from "./expertTeam";
import "./style.scss";
const Index = () => {
  return (
    <>
      <HeroSection />
      <Innovation />
      <Itservices />
      <Learnmore />
      <Projectsection />
      <ExpertTeam />
      <Videosection />
      <Newarticle />
    </>
  );
};

export default Index;
