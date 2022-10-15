import React from "react"
import Nav from "./Nav"
import Home from "./Home"

const Layout = ({ props }) => {
  return (
    <div className="mx-6 md:max-w-2xl md:mx-auto bg-slate-50">
      <Nav />
      <Home />
      <main>{props}</main>
    </div>
  )
}

export default Layout
