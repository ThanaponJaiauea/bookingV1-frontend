/** @format */
import {IoMdClose} from "react-icons/io"
import {IoMdArrowBack} from "react-icons/io"

export default function ModalRegister({onClose, setStateCheck}) {
  return (
    <div className="w-full fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center relatice z-[999]">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 flex flex-col gap-6">
        <div className="w-full flex items-center justify-between">
          <button onClick={() => setStateCheck("login")}>
            <i className="text-xl text-white">
              <IoMdArrowBack />
            </i>
          </button>

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
            Register
          </h5>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Register
          </button>
        </form>
      </div>
    </div>
  )
}
