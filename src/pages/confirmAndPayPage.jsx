/** @format */
import {IoChevronBackOutline} from "react-icons/io5"
import {FaAirbnb, FaStar} from "react-icons/fa"

import {Link} from "react-router-dom"

export default function ConfirmAndPay() {
  const mocDetailsData = [
    {id: 1, label: "฿6,827.86 x 5 คืน", value: "฿34,139.30"},
    {id: 2, label: "ค่าทำความสะอาด", value: "฿6,718.90"},
    {id: 3, label: "ค่าบริการ Airbnb", value: "฿7,169.80"},
    {id: 4, label: "ภาษี", value: "฿5,664.22"},
  ]
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
            <div className="w-2/5 h-[500px] flex flex-col gap-6">
              <div className="border-[1px] border-gray-300 rounded-lg flex flex-col items-center p-4 gap-2">
                <div className="w-full flex items-center justify-between">
                  <p className="text-base">นี่เป็นสิ่งที่ไม่เกิดขึ้นบ่อยนัก</p>
                  <FaAirbnb className="w-8 h-8 text-[#ff385c]" />
                </div>

                <p className="text-base">
                  มีผู้สนใจจองที่พักของ Allison เป็นประจำ
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <div>
                  <p className="text-xl font-medium">การเดินทางของคุณ</p>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p>วันที่</p>
                    <p>12-17 พ.ย.</p>
                  </div>

                  <button className="underline">เปลี่ยน</button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p>ผู้เข้าพัก</p>
                    <p>ผู้เข้าพัก 1 คน</p>
                  </div>

                  <button className="underline">แก้ไข</button>
                </div>
              </div>

              <div className="border-b-[1px] mt-3"></div>
            </div>

            {/* RIGHT card */}
            <div className="w-2/5 border-[1px] p-6 rounded-xl">
              <div className="flex gap-4">
                <div className="w-2/6">
                  <img
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                    className="rounded-xl"
                  />
                </div>

                <div className="w-4/6 flex flex-col justify-center">
                  <h1 className="font-semibold">Serene Desert Retreat</h1>
                  <p>
                    ที่ <span className="font-semibold">Lake Powell</span>
                  </p>
                  <p>บ้านทั้งหลัง</p>

                  <div className="flex items-center gap-1">
                    <FaStar />
                    <p> 4.75</p>
                  </div>
                </div>
              </div>

              <div className="border-b-[1px] mt-6"></div>

              <div className="flex flex-col gap-4 mt-6">
                <p className="text-2xl font-medium">รายละเอียดราคา</p>

                <div className="flex flex-col gap-2">
                  {mocDetailsData?.map((el, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between">
                      <p className={`${el?.id === 1 ? "" : "underline"}`}>
                        {el?.label}
                      </p>
                      <p>{el?.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-b-[1px] mt-6"></div>

              <div className="flex items-center justify-between mt-4">
                <p className="underline">รวม (THB)</p>
                <p className="font-medium">฿53,692.22</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
