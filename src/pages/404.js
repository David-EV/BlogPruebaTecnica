import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404: Pagina no encontrada</h1>
    <p>Intento acceder a un sitio que no existe &#39;... Lo sentimos.</p>
  </Layout>
)

export default NotFoundPage
