import * as React from "react"

import Layout from "../components/layout/index"
import Seo from "../components/seo"
import HeaderNavigation from "../components/Common/headerNavigation"
import ExperienceCard from "../components/Common/ExperienceCard"

const Experiences = () => {
return(
    <Layout>
        <Seo title="Projects" />
        <HeaderNavigation />
        <div className="px-0">
        <ExperienceCard />
        </div>
    </Layout>

)
}

export default Experiences