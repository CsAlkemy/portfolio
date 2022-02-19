import * as React from "react"
import PropTypes from "prop-types"

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-10 transition duration-700 font-mono">
      <div className="max-w-3xl mx-auto min-h-screen">
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
