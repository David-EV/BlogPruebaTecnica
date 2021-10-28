import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Prueba Tecnica</h1>
    <p>Esta prueba busca evaluar las capacidades tecnicas del aplicante a desarrollador.</p>
    <p>Front End.</p>
    <StaticImage
      src="https://mexico.unir.net/wp-content/uploads/2019/09/dia-programador-ingenieria-unir-mexico.jpg"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/blog/">Ir al Blog</Link> <br />
      <Link to="/using-typescript/">Objetivo de la Prueba</Link> <br />


    </p>
  </Layout>
)

export default IndexPage
