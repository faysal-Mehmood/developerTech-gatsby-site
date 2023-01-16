import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo/seo";
import HomePage from "../components/homepage";
import "./style.scss";
const IndexPage = () => {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home Page" />;
