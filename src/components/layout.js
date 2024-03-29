/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Nav from "./nav"

const Layout = ({ children }) => {
  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: "100%",
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <div className="main__content">
          <Nav className="nav__part" />
          <main className="main__part">{children}</main>
        </div>
        <footer>🐐 {new Date().getFullYear()}, Salah Eddin Alshaal, you can reach me on salshaal [@] gmail [.] com</footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
