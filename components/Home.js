import React, { useState } from "react"

function HomeComp() {
  const [darkToggle, setDarkToggle] = useState(true)
  return (
    <div
      className={`h-screen w-full flex items-center justify-center dark:bg-slate-800 bg-gray-200 flex-col`}>
      <div className="max-w-sm rounded-xl overflow-hidden shadow-xl  bg-gray-100 p-5 mt-4 text-white dark:bg-gray-900">
        <div className="px-6 py-4">
          <div className="text-gray-800 dark:text-gray-200 font-bold text-xl mb-2">
            Note Card
          </div>
          <p className="text-gray-800 dark:text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 flex flex-col pt-4 pb-2">
          <span className="flex justify-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="flex justify-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="flex justify-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
          <span className="flex justify-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #summer
          </span>
        </div>
      </div>
    </div>
  )
}
export default HomeComp
