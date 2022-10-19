/* eslint-disable @next/next/no-img-element */
import { Timestamp } from "firebase/firestore"
import React from "react"

function HomeComp({ children, avatar, username, note, title, timestamp }) {
  return (
    <div className="pb-6 w-full flex flex-col items-center dark:bg-slate-800 bg-gray-200">
      <div className="max-w-sm rounded-xl overflow-hidden shadow-xl  bg-gray-100 p-5 mt-4 text-white dark:bg-gray-900">
        <div className="px-6 py-4">
          <div className="text-gray-800 dark:text-gray-200 font-bold text-xl mb-2 flex justify-center gap-20">
            {title}
            <img
              src={avatar}
              alt="user"
              className="w-8 rounded-full"
            />
          </div>
          <p className="text-gray-800 dark:text-gray-200">{note}</p>
          <p className="font-mono text-xs mt-4">
            At {new Date(timestamp.toDate()).toDateString()}.
          </p>
        </div>
      </div>
    </div>
  )
}
export default HomeComp
