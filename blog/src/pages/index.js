import * as React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../components/index.module.css";

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home"></Seo>
    <ul className={styles.list}>
      {
        data.allContentfulProjectBlog.edges.map(edge => (
          <li key={edge.node.id}>
            <Link to={edge.node.slug}>{edge.node.title}</Link>
            <div>
              <GatsbyImage image={edge.node.postImage.gatsbyImageData}></GatsbyImage>
            </div>
            <div>
              {edge.node.newBody.childMarkdownRemark.excerpt}
            </div>
          </li>
        ))
      }
    </ul>
  </Layout>
)

export const Head = () => <Seo title="Home"></Seo>

export default IndexPage

export const query = graphql`
  {
    allContentfulProjectBlog {
      edges {
        node {
          id
          title
          slug
          newBody {
            childMarkdownRemark {
              excerpt
            }
          }
          postImage {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 300)
          }
        }
      }
    }
  }
`

