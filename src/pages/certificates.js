import * as React from "react"

import Layout from "../components/layout/index"
import Seo from "../components/seo"
import HeaderNavigation from "../components/Common/headerNavigation"
import CertificateCard from "../components/Common/CertificateCard"

const Certificates = () => {
return(
    <Layout>
        <Seo title="Projects" />
        <HeaderNavigation />
        <div className="px-0">
        <CertificateCard />
        </div>
    </Layout>

)
}

export default Certificates