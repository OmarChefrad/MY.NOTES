import Layout from "../components/Layout"
import "../styles/globals.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { ThemeProvider } from "next-themes"

function MyApp({ Component, pageProps }) {
  const contextClass = {
    success: "bg-slate-800",
    error: "bg-slate-800 ",
    info: "bg-gray-800",
    warning: "bg-orange-800",
    default: "bg-indigo-800",
    dark: "bg-slate-800",
  }
  return (
    <ThemeProvider
      enableSystem={true}
      attribute="class">
      <Layout>
        <ToastContainer
          toastClassName={({ type }) =>
            contextClass[type || "default"] +
            " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
          }
          bodyClassName={() => "text-md font-slate-100 font-med block p-3"}
          position="top-left"
          autoClose={3000}
          limit={1}
        />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
