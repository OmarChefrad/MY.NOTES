import { BsGoogle } from "react-icons/bs"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { auth } from "../../utils/firebase"
import { useRouter } from "next/router"
import { useAuthState } from "react-firebase-hooks/auth"
import { useEffect } from "react"

export default function Login() {
  const route = useRouter()
  const [user, loading] = useAuthState(auth)
  //googleProvider is a var that holds the GoogleAuthProvider class
  const googleProvider = new GoogleAuthProvider()

  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      route.push("/")
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (user) {
      route.push("/")
    }
    if (user) {
      console.log("logged in")
    }
  }, [user, route])

  return (
    <div className="flex flex-col justify-center items-center shadow-xl w-[340px] ml-7 md:ml-48 mt-32 p-6 m-10 rounded-2xl dark:text-slate-100 dark:bg-slate-900 bg-white text-slate-800 ">
      <h2 className="text-2xl font-meduim">Start Writing Now</h2>
      <div>
        <h3 className="py-4 pl-2">Sign In with Google Here</h3>
        <button
          onClick={GoogleLogin}
          className="bg-gradient-to-r from-orange-400 to-orange-600 dark:text-slate-100  text-white shadow-lg w-full font-meduim rounded-lg flex align-middle p-4 gap-2">
          <BsGoogle className="text-2xl" />
          Sign In with Google
        </button>
      </div>
    </div>
  )
}
