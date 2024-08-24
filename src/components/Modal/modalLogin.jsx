/** @format */
import {IoMdClose} from "react-icons/io"

export default function ModalLogin({onClose}) {
  return (
    <div className="w-full fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center relatice z-[999]">
      <div className="bg-white w-2/5 h-[600px]">
        {/* TOP Header */}
        <div className="flex p-2 border-b-[1px] border-gray-200">
          <div className="w-[5%] flex items-center justify-start">
            <button onClick={onClose}>
              <IoMdClose className="text-lg" />
            </button>
          </div>

          <div className="w-full flex items-center justify-center font-bold">
            <p>เข้าสู่ะบบหรือลงทะเบียน</p>
          </div>
        </div>

        {/* BOTTTOM FROM LOGIN */}
        <div className="bg-red-200 w-full h-full p-6">
          <div>
            <h1 className="text-xl font-bold">ยินดีต้อนรับสู่ Airbnb</h1>
          </div>

          <div className="flex flex-col gap-2">
            <input
              placeholder="email"
              type="email"
              className="p-1"
            />
            <input
              placeholder="password"
              className="p-1"
            />

            <div className="w-full flex items-center justify-center">
              <button
                type="button"
                className="w-2/4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                เข้าสู่ระบบ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
