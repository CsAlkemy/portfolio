import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/index"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Link to="/projects">Projects</Link> <br />
  </Layout>
)

export default IndexPage
