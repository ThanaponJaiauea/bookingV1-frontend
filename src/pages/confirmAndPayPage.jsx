/** @format */
import {IoChevronBackOutline} from "react-icons/io5"
import {FaAirbnb} from "react-icons/fa"

import {Link} from "react-router-dom"

export default function ConfirmAndPay() {
  return (
    <div className="bg-white h-screen flex flex-col gap-10">
      <header className="h-[80px] flex flex-col gap-4">
        <Link className="w-2/12 h-full flex items-center justify-center text-[#ff385c]">
          <FaAirbnb className="w-16 h-16" />
          <p className="text-3xl font-bold">airbnb</p>
        </Link>
        <div className="border-b-[1px]"></div>
      </header>

      <div className="w-full h-screen">
        <div className="w-8/12  m-auto h-screen border-2">
          <div className="w-full flex items-center gap-4">
            <Link to="/room">
              <button className="hover:bg-gray-100 rounded-full p-4">
                <IoChevronBackOutline className="w-4 h-4" />
              </button>
            </Link>

            <p className="text-2xl font-medium">ขอจอง</p>
          </div>

          <div className="w-full flex flex-wrap items-center justify-center gap-32">
            {/* LEFT Playment */}
            <div className="w-2/5 bg-red-200 h-[500px] border-2"></div>

            {/* RIGHT card */}
            <div className="w-2/5 bg-green-200 h-[500px]  border-2">
              <div>
                <div>
                  <img
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                    className="rounded-xl w-2/6"
                  />
                </div>

                <div>
                  <h1></h1>
                </div>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
