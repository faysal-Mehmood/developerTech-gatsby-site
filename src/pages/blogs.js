import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Seo from "../components/seo/seo";
import Layout from "../components/layout";
const Blogs = ({ data }) => {
  console.log("data", data);
  return (
    <>
      <Layout>
        <h2>My blogs</h2>
        {data?.allMdx.nodes.map((blog, key) => {
          return (
            <>
              <h4>{blog.frontmatter.title}</h4>
              <p>{blog.frontmatter.date}</p>
              <p>{blog.excerpt}</p>
            </>
          );
        })}
      </Layout>
    </>
  );
};
export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`;
export const Head = () => <Seo title="My Blog Posts" />;
export default Blogs;
