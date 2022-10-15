import React from "react"
import Link from "next/link"

const Nav = () => {
  return (
    <div className="flex justify-between items-center">
      <Link href="/">
        <button>MY NOTES</button>
      </Link>
      <ul>
        <Link href={"/auth/login"}>
          <a
            className="cursor-pointer pt-[3px] pb-[1.5px] px-4 text-sm tracking-[2px] font-bold text-white bg-[#f3851d]"
            href="">
            Take A Note
          </a>
        </Link>
      </ul>
    </div>
  )
}

export default Nav
