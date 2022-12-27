import * as React from "react";
import Navbar from "../components/layout/navbar";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo/seo";
import HomePage from "../components/homepage";
import "./style.scss";
const IndexPage = () => {
  return (
    <Navbar>
      <HomePage />
    </Navbar>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home Page" />;
