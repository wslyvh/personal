import React from "react"
import { Link } from "gatsby"

import Footer from "../components/footer"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = <div className="block h-6"></div>
  } else {
    header = (
      <Link to={`/`} className="text-sm">
        ← home
      </Link>
    )
  }

  return (
    <div className="container mx-auto max-w-4xl">
      <header>{header}</header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
