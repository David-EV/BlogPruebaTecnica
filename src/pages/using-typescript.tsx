// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <Seo title="Using TypeScript" />
    <h1>El Objetivo de esta prueba!</h1>
    <p>
    Esta prueba busca evaluar las capacidades técnicas del aplicante a <b>desarrollador web </b>fullstack
    </p>
    <p>
    <b>Algunos de los puntos a evaluar son: </b>
    </p>
    <p>
    Nivel actual de manejo con las tecnologías de react y Node.js
    </p>
    <p>
    Capacidad de autoaprendizaje al abordar el uso de nuevas tecnologías como Gatsby y Netlify.
    </p>
    <p>Capacidad para afrontar escenarios con cierto nivel de estrés y entregas con deadlines específicos.</p>
    <Link to="/">Regresar a Inicio</Link>
  </Layout>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
