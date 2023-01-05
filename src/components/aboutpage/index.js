import React from "react";
import Footer from "../../utils/footer";
import Footerlearn from "../../utils/footerlearn";
import Team from "../../utils/team";
import Aboutbackground from "./aboutbackground";
import Testimonal from "./testimonial";
import Innovation from "./innovation";
import "./style.scss";
const Index = () => {
  return (
    <>
      <Aboutbackground />
      <Innovation />
      <Testimonal />
      <Team />
      <Footerlearn />
      <Footer />
    </>
  );
};

export default Index;
