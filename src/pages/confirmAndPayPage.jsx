/** @format */
import {IoChevronBackOutline} from "react-icons/io5"
import {FaAngleDown, FaAngleUp} from "react-icons/fa6"
import {FaAirbnb, FaStar} from "react-icons/fa"
import {PiCreditCardThin} from "react-icons/pi"

import {Link} from "react-router-dom"
import {useState} from "react"

export default function ConfirmAndPay() {
  const mocDetailsData = [
    {id: 1, label: "฿6,827.86 x 5 คืน", value: "฿34,139.30"},
    {id: 2, label: "ค่าทำความสะอาด", value: "฿6,718.90"},
    {id: 3, label: "ค่าบริการ Airbnb", value: "฿7,169.80"},
    {id: 4, label: "ภาษี", value: "฿5,664.22"},
  ]

  const [choosePayment, setChoosePayment] = useState(true)
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
              {/* BOX 1 */}
              <div className="border-[1px] border-gray-300 rounded-lg flex flex-col items-center p-4 gap-2">
                <div className="w-full flex items-center justify-between">
                  <p className="text-base">นี่เป็นสิ่งที่ไม่เกิดขึ้นบ่อยนัก</p>
                  <FaAirbnb className="w-8 h-8 text-[#ff385c]" />
                </div>

                <p className="text-base">
                  มีผู้สนใจจองที่พักของ Allison เป็นประจำ
                </p>
              </div>

              {/* BOX 2 */}
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

              {/* BOX 3 */}
              <div className="flex flex-col gap-5">
                <div>
                  <p className="text-xl font-medium">เลือกวิธีชำระเงิน</p>
                </div>

                <div>
                  <div
                    onClick={() => setChoosePayment(true)}
                    className={`w-full border-2 ${
                      choosePayment ? "border-black" : "border-b-0"
                    }  rounded-t-lg flex items-center justify-between p-3`}>
                    <p>
                      จ่าย <span className="font-bold">฿53,692.22</span> ตอนนี้
                    </p>

                    <button
                      className={`w-6 h-6 border-2 rounded-full  ${
                        choosePayment ? "bg-black" : ""
                      }`}></button>
                  </div>

                  <div
                    onClick={() => setChoosePayment(false)}
                    className={`w-full border-2 ${
                      choosePayment ? "border-t-0" : "border-black"
                    } rounded-b-lg p-3 flex items-startt justify-between`}>
                    <p className="w-4/5 text-base">
                      ชำระครึ่งหนึ่งตอนนี้ อีกครึ่งภายหลัง จ่ายตอนนี้ ฿10,903.37
                      ส่วนอีก ฿10,903.37 จ่ายวันที่ 30 ต.ค.
                      2024ไม่มีค่าธรรมเนียมเพิ่มเติม{" "}
                      <span className="underline cursor-pointer">
                        ข้อมูลเพิ่มเติม
                      </span>
                    </p>

                    <button
                      className={`w-6 h-6 border-2 rounded-full ${
                        choosePayment ? "" : "bg-black"
                      }`}></button>
                  </div>
                </div>
              </div>

              <div className="border-b-[1px] mt-2"></div>

              {/* BOX 4 */}
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-4">
                  <p className="text-xl font-medium">จ่ายด้วย</p>

                  <div className="w-full flex flex-col gap-4">
                    <button className="w-full flex items-center justify-between p-3 border-2 rounded-lg">
                      <div className="flex items-center gap-2">
                        <PiCreditCardThin className="w-8 h-8" />
                        <p>บัตรเครดิตหรือบัตรเดบิต</p>
                      </div>

                      <FaAngleDown />
                    </button>

                    <div className="w-full h-14">
                      <input
                        className="w-full h-full border-2 focus:outline-none rounded-lg px-4"
                        placeholder="รหัสไปรษณีย์"
                      />
                    </div>
                  </div>
                </div>
              </div>
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
