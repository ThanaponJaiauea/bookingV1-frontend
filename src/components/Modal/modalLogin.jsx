/** @format */
import {IoMdClose} from "react-icons/io"
import InputLogReg from "../input/inputLogReg"
import {useState} from "react"

export default function ModalLogin({onClose, setStateCheck}) {
  const [input, setInput] = useState({
    email: "",
    password: "",
  })

  const handleChangeInput = (e) => {
    setInput({...input, [e.target.name]: e.target.value})
  }
  return (
    <div className="w-full fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center relatice z-[999]">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 flex flex-col gap-6">
        <div className="w-full flex items-center justify-end">
          <button
            onClick={() => {
              onClose()
            }}>
            <IoMdClose className="w-5 h-5 text-lg text-white hover:bg-white hover:text-black hover:rounded-full" />
          </button>
        </div>

        <form
          className="space-y-6"
          action="#">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign in to our platform
          </h5>

          <div>
            <InputLogReg
              htmlFor="email"
              title="email"
              type="email"
              placeholder="email"
              name="email"
              value={input.email}
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <InputLogReg
              htmlFor="password"
              title="password"
              placeholder="password"
              name="password"
              value={input.password}
              onChange={handleChangeInput}
            />
          </div>

          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">
              Lost Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Login to your account
          </button>

          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <button
              onClick={() => setStateCheck("register")}
              className="text-blue-700 hover:underline dark:text-blue-500">
              Create account
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
