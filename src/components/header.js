import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div
      style={{
        margin: `0px 1.0rem`,
        padding: `0.5rem 0rem`,
      }}
    >
      <h3 style={{ margin: 0 }}>
        <Link to="/" className="header__title">
          {siteTitle}
        </Link>
      </h3>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
