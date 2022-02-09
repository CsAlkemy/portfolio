import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/index"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Projects" />
    <h1>Hi from the Projects</h1>
    <p>Welcome to Projects</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
