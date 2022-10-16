import { FcGoogle } from "react-icons/fc"
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
    <div className="shadow-xl text-slate-100 mt-32 p-10 text-gray-7 bg-slate-800">
      <h2 className="text-2xl font-meduim">Start Writing Now</h2>
      <div className="py-4">
        <h3 className="py-4">Sign in with one of the providers</h3>
        <button
          onClick={GoogleLogin}
          className="text-slate-100 shadow-lg bg-gray-900 w-full font-meduim rounded-lg flex align-middle p-4 gap-2">
          <FcGoogle className="text-2xl" />
          Sign In with Google
        </button>
      </div>
    </div>
  )
}
