import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlog(sort: {fields: createdAt, order: DESC}) {
          edges {
            node {
              title
              id
              slug
              author
              createdAt(formatString: "DD MMMM, YYYY")
              image {
                fluid {
                  src
                }
              }
              content
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <SEO title="Blog" />
      <p>
        <Link to="/">Regresar a Inicio</Link>
      </p>
      <ul className="posts">
        {data.allContentfulBlog.edges.map(edge => {
          return (
            <li className="post" key={edge.node.id}>
              <h2>
                <Link to={`/blog/${edge.node.slug}/`}>{edge.node.title}</Link>
              </h2>
              <div className="meta">
                <span>Creado el: {edge.node.createdAt}</span>
              </div>
              {edge.node.image && (
                <Img
                  className="featured"
                  fluid={edge.node.image.fluid}
                  alt={edge.node.title}
                />
              )}
              <p className="excerpt">
                {edge.node.content}
              </p>
              <div className="button">
                <Link to={`/blog/${edge.node.slug}/`}>Leer Mas</Link>
              </div>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Blog