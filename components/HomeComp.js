/* eslint-disable @next/next/no-img-element */
import { Timestamp } from "firebase/firestore"
import React from "react"
import { AiFillEdit } from "react-icons/ai"
import Link from "next/link"

function HomeComp({ children, avatar, username, note, title, timestamp }) {
  return (
    <div className="pb-6 w-full flex flex-col items-center dark:bg-slate-800 bg-gray-200 overflow-scroll">
      <div className="max-w-sm rounded-xl overflow-hidden shadow-xl bg-gray-100 p-5 mt-4 text-white dark:bg-gray-900">
        <div className="pl-[5px] py-4">
          <div className="text-gray-800 dark:text-gray-200 font-bold text-xl mb-2 flex  ">
            <img
              src={avatar}
              alt="user"
              className="w-8 rounded-full mr-12"
            />
            {title}
          </div>

          <p className="text-gray-800 mt-4 dark:text-gray-200">{note}</p>
          <div className="flex items-center">
            <p className="font-mono text-xs mt-4 text-gray-600 dark:text-gray-200">
              By {username}. At {new Date(timestamp.toDate()).toDateString()}.
            </p>
            <Link href="/notes">
              <AiFillEdit className="ml-20 mt-4 text-orange-400  cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomeComp
