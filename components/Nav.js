/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react"
import Link from "next/link"
import { auth } from "../utils/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { FaSun, FaMoon } from "react-icons/fa"
import { useTheme } from "next-themes"

const Nav = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [user, loading] = useAuthState(auth)

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null

    const currentTheme = theme === "system" ? systemTheme : theme

    if (currentTheme === "dark") {
      return (
        <FaMoon
          className="text-gray-900 dark:text-gray-100 text-2xl cursor-pointer"
          onClick={() => setTheme("light")}
        />
      )
    } else {
      return (
        <FaSun
          className="text-gray-900 dark:text-gray-100 text-2xl cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      )
    }
  }

  return (
    <div className="flex dark:bg-gray-900 bg-slate-100 h-16 justify-between items-center  ">
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
        {renderThemeChanger()}
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
                  alt="user"
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
