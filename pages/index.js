import Head from "next/head"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import HomeComp from "../components/HomeComp"
import { useEffect, useState } from "react"
import { db } from "../utils/firebase"
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"

export default function Home() {
  //create a state for all the posts

  const [allNotes, setAllNotes] = useState([])

  const getNotes = async () => {
    const collectionRef = collection(db, "notes")
    const q = query(collectionRef, orderBy("timestamp", "desc"))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setAllNotes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    })
    return unsubscribe
  }

  useEffect(() => {
    getNotes()
  }, [])

  const [text, count] = useTypewriter({
    words: [
      "There is no substitute for hard work.",
      "All limitations are self-imposed.",
      "Never Dream Of Success, Work for it.",
      "Develop Success From Failures.",
      "I am Done Running.",
      "Every moment is a fresh beginning.",
      "Be so good they can’t ignore you.",
    ],
    loop: true,
    cursor: <Cursor />,
    delaySpeed: 5000,
  })
  return (
    <div>
      <Head>
        <title>MY.NOTES</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <main className="text-gray-800 bg-gray-200 dark:bg-slate-800 dark:text-slate-100 overflow-scroll">
        <div className="flex flex-col items-center">
          <div className="pt-6 pb-2 text-lg font-[500]">
            {text}
            <Cursor cursorColor="orange" />
          </div>
          {allNotes.map((note) => (
            <HomeComp
              key={note.note}
              {...note}></HomeComp>
          ))}
        </div>
      </main>
    </div>
  )
}
