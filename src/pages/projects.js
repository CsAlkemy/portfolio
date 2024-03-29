import * as React from "react"

import Layout from "../components/layout/index"
import Seo from "../components/seo"
import HeaderNavigation from "../components/Common/headerNavigation"
import ProjectCard from "../components/Common/ProjectCard"

const SecondPage = () => (
  <Layout>
    <Seo title="Projects" />
    <HeaderNavigation />
    <div className="px-0">
      <ProjectCard />
    </div>
  </Layout>
)

export default SecondPage
