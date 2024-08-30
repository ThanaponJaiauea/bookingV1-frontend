/** @format */

import {Slide, ToastContainer} from "react-toastify"
import Router from "./routes/router"

function App() {
  return (
    <>
      <Router />
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
    </>
  )
}

export default App
