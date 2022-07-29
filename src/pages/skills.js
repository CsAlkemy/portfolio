import * as React from "react"

import Layout from "../components/layout/index"
import Seo from "../components/seo"
import HeaderNavigation from "../components/Common/headerNavigation"
import SkillsCard from "../components/Common/SkillsCard"

const Skills = () => (
  <Layout>
    <Seo title="Projects" />
    <HeaderNavigation />
    <div className="px-0">
      <SkillsCard />
    </div>
  </Layout>
)

export default Skills