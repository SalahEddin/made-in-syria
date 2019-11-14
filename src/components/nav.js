import React from "react"
import { Link } from "gatsby"
import "./nav.css"

const Nav = () => (
  <nav className="nav">
    <ul className="nav__list">
      <li>
        <Link
          className="nav__link"
          activeStyle={{ textDecoration: "underline" }}
          to="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className="nav__link"
          activeStyle={{ textDecoration: "underline" }}
          to="/thoughts"
        >
          Thoughts
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav
