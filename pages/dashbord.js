import React, { useEffect, useState } from "react"
import { auth, db } from "../utils/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import Link from "next/link"

export default function Dashbord() {
  const route = useRouter()
  const [user, loading] = useAuthState(auth)

  console.log(user)
  const getData = async () => {
    if (loading) return
    if (!user) return route.push("/auth/login")
  }

  useEffect(() => {
    getData()
  }, [user, loading])

  return (
    <div className="h-[300px] my-20 p-12 w-[350px] dark:text-slate-100 text-slate-800 dark:bg-gray-900 bg-white shadow-lg rounded-xl max-w-md mx-auto flex justify-center flex-col">
      <h1 className="cursor-pointer h-8 px-2 rounded-md text-sm tracking-[2px] font-bold text-slate-900 dark:text-gray-200 mt-2 pl-20">
        Dashbord
      </h1>
      <Link href="/notes">
        <div className="cursor-pointer h-8 mt-2 px-2 rounded-md text-sm tracking-[2px] font-bold  text-slate-900 dark:text-gray-200 pl-24">
          Notes
        </div>
      </Link>
      <button
        className="cursor-pointer h-8 mt-2 rounded-md text-sm tracking-[2px] font-bold text-slate-900 dark:text-gray-200"
        onClick={() => auth.signOut()}>
        Sign Out
      </button>
      <p className="font-mono text-xs pl-8 pt-6 ">
        MY NOTES DESIGNED BY UMAR @2022
      </p>
    </div>
  )
}
