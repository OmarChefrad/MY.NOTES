import React from "react"
import Nav from "./Nav"

import Head from "next/head"

const Layout = ({ children }) => {
  return (
    <div className="mx-6 md:max-w-2xl md:mx-auto bg-slate-50">
      <Head>
        <title>My.Notes</title>
      </Head>
      <Nav />
      <main>{children}</main>
    </div>
  )
}

export default Layout
