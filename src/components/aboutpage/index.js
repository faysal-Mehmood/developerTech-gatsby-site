import React from "react";
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
    </>
  );
};

export default Index;
