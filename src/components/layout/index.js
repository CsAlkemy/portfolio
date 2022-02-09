import * as React from "react"
import PropTypes from "prop-types"

import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <>
      <div dark>
        <Header />
        <h1 className="text-black dark:text-white">hello</h1>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
