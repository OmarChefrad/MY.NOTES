import React from "react"
import Nav from "./Nav"

import Head from "next/head"

const Layout = ({ children }) => {
  return (
    <div className="mx md:max-w-2xl md:mx-auto bg-slate-800 ">
      <Head>
        <title>My.Notes</title>
      </Head>
      <Nav />
      <main>{children}</main>
    </div>
  )
}

export default Layout
