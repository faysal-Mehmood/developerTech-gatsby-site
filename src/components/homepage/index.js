import React from "react";
import HeroSection from "./heroSection";
import Innovation from "./innovation";
import Itservices from "./it-services";
import Learnmore from "./learnmore";
import Projectsection from "./project-section";
import Videosection from "./videosection";
import Newarticle from "./newarticle";
import Footerlearn from "../../utils/footerlearn";
import Team from "../../utils/team";
import Footer from "../../utils/footer";
import "./style.scss";
const Index = () => {
  return (
    <>
      {/* <HeroSection />
      <Innovation /> 
 */}
      <Itservices />

      <Learnmore />
      <Projectsection />

      <Team />
      <Videosection />
      <Newarticle />
      <Footerlearn />
      <Footer />
    </>
  );
};

export default Index;
