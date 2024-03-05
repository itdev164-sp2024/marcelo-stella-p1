import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const BlogPost = ({ data }) => {
    const {title, newBody} = data.contentfulProjectBlog;

    return (
        <Layout>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{__html: newBody.childMarkdownRemark.html}}></div>
        </Layout>
    );
}

export default BlogPost

export const pageQuery = graphql`
    query projectBlogPostQuery($slug: String!) {
        contentfulProjectBlog(slug: {eq: $slug}) {
            title
            slug
            newBody {
                childMarkdownRemark{
                    html
                }
            }
        }
    }
`