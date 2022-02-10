import * as React from "react"
import PropTypes from "prop-types"

const Layout = ({ children }) => {
  return (
    <>
      <div className="max-w-4xl mx-auto my-10">
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
