/* eslint-disable @next/next/no-img-element */
import React from "react"
import Link from "next/link"
import { auth } from "../utils/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { CgDarkMode } from "react-icons/cg"

const Nav = () => {
  const [user, loading] = useAuthState(auth)

  console.log(user)
  return (
    <div className="flex bg-gray-900 h-16 justify-between items-center shadow-lg">
      <Link href="/">
        <button
          className="pl-4 md:pl-4 text-transparent text-2xl
          tracking-[-0.75px]
          bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600"
          style={{ fontWeight: "900" }}>
          MY NOTES
        </button>
      </Link>

      <ul className="flex items-center gap-4">
        <CgDarkMode className="w-7 h-7 text-slate-200 cursor-pointer" />
        {!user && (
          <Link href={"/auth/login"}>
            <a
              className="cursor-pointer mr-4 h-10 px-2 rounded-md text-xs tracking-[2px] font-bold text-white bg-gradient-to-r from-orange-400 to-orange-600 flex flex-col justify-center"
              href="">
              Take A Note
            </a>
          </Link>
        )}
        {user && (
          <div className="flex item-center gap-4">
            <Link href="/collection">
              <button className="cursor-pointer h-10 mt-2 px-2 rounded-md text-xs tracking-[2px] font-bold text-white bg-gradient-to-r from-orange-400 to-orange-600">
                Collection
              </button>
            </Link>
            <Link href="/dashbord">
              <div className="flex items-center pr-3">
                <img
                  src={user.photoURL}
                  alt="profilePhoto"
                  className="cursor-pointer rounded-full m-1 object-fill w-12 h-12"
                />
              </div>
            </Link>
          </div>
        )}
      </ul>
    </div>
  )
}

export default Nav
