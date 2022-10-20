import React from "react"
import { auth, db } from "../utils/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { toast } from "react-toastify"

export default function Notes() {
  const [note, setNote] = useState({ description: "" })
  const [title, setTitle] = useState({ name: "" })
  const [user, loading] = useAuthState(auth)
  const route = useRouter()

  const submitNote = async (e) => {
    e.preventDefault()
    //run the checks
    if (note.description == "") {
      toast.error("Please add a note (>‿◠)​")
      return
    }
    if (note.length > 300) {
      toast.error("The Note is too long (≖_≖)")
      return
    }

    //Make a new post
    const collectionRef = collection(db, "notes")
    await addDoc(collectionRef, {
      note,
      title,
      timestamp: serverTimestamp(),
      user: user.uid,
      avatar: user.photoURL,
      username: user.displayName,
    })
    setTitle({ name: "" })
    setNote({ description: "" })
    return route.push("/")
  }

  return (
    <div className=" h-fill my-20 p-12 dark:text-slate-100 text-slate-800 dark:bg-gray-900 bg-white shadow-lg rounded-lg max-w-md mx-auto">
      <form
        action=""
        onSubmit={submitNote}>
        <h1 className="text-2xl font-bold">Create a new Note</h1>
        <div className="py-2">
          <h3 className="text-lg font-medium py-2">Title</h3>
          <textarea
            value={title.name}
            onChange={(e) => setTitle(e.target.value)}
            className="dark:text-slate-100 text-slate-800 dark:bg-slate-800 bg-gray-200 h-12 w-full rounded-lg p-2 text-sm"></textarea>
          <h3 className="text-lg font-medium py-2">Description</h3>
          <textarea
            value={note.description}
            onChange={(e) => setNote(e.target.value)}
            className="dark:text-slate-100 text-slate-800 dark:bg-slate-800 bg-gray-200 h-48 w-full rounded-lg p-2 text-sm"></textarea>
          <p
            className={`py-2 text-orange-400 font-meduim text-sm ${
              note.length > 300 ? "text-red-500" : ""
            }`}>
            {note.length}/300
          </p>
          <button
            type="submit"
            className="w-full cursor-pointer mr-4 h-10 px-2 rounded-md text-lg tracking-[2px] font-bold text-white bg-gradient-to-r from-orange-400 to-orange-600 justify-center">
            Save
          </button>
        </div>
      </form>
    </div>
  )
}
