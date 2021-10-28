import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      createdAt(formatString: "Do MMMM, YYYY")
      image {
        fluid(maxWidth: 750) {
          ...GatsbyContentfulFluid
        }
      }
      content
    }
  }
`

const BlogPost = props => {
    return (
        <Layout>
            <SEO title={props.data.contentfulBlog.title} />
            <Link to="/blog/">Regresar al Blog</Link>
            <div className="content">
                <h1>{props.data.contentfulBlog.title}</h1>
                <span className="meta">
                    Creado el: {props.data.contentfulBlog.createdAt}
                </span>

                {props.data.contentfulBlog.image && (
                    <Img
                        className="featured"
                        fluid={props.data.contentfulBlog.image.fluid}
                        alt={props.data.contentfulBlog.title}
                    />
                )}
                <p>
                    <h4>
                        {props.data.contentfulBlog.content}
                    </h4>
                </p>
            </div>
        </Layout>
    )
}

export default BlogPost