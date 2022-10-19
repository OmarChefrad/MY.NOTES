import React, { useEffect } from "react"
import { auth } from "../utils/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"

export default function dashbord() {
  const route = useRouter()
  const [user, loading] = useAuthState(auth)

  const getData = async () => {
    if (loading) return
    if (!user) return route.push("/auth/login")
  }
  useEffect(() => {
    getData()
  }, [user, loading])

  return (
    <div className="h-screen dark:bg-slate-800 bg-slate-100 dark:text-slate-100 text-gray-900 ">
      <h1>Your Notes</h1>

      <div>Notes</div>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  )
}
