import React from "react"
import { auth, db } from "../utils/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Notes() {
  const [note, setNote] = useState({ description: "" })

  const submitNote = async (e) => {
    e.preventDefault()
  }

  return (
    <div className=" h-screen my-20 p-12 text-slate-100  bg-gray-900 shadow-lg rounded-lg max-w-md mx-auto">
      <form
        action=""
        onSubmit={submitNote}>
        <h1 className="text-2xl font-bold">Create a new Note</h1>
        <div className="py-2">
          <h3 className="text-lg font-medium py-2">Title</h3>
          <textarea
            value={note.description}
            onChange={(e) => setNote(e.target.value)}
            className="bg-gray-700 h-12 w-full text-white rounded-lg p-2 text-sm"></textarea>
          <h3 className="text-lg font-medium py-2">Description</h3>
          <textarea
            value={note.description}
            onChange={(e) => setNote(e.target.value)}
            className="bg-gray-700 h-48 w-full text-white rounded-lg p-2 text-sm"></textarea>
          <p className="py-2">{note.description.length}/300</p>
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
