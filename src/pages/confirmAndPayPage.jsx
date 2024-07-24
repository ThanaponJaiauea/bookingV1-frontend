/** @format */
import {IoChevronBackOutline, IoClose} from "react-icons/io5"
import {FaAngleDown, FaAngleUp, FaCheck, FaLock} from "react-icons/fa6"

import {FaAirbnb, FaStar} from "react-icons/fa"
import {PiCreditCardThin} from "react-icons/pi"

import {Link} from "react-router-dom"
import {useState} from "react"
import Modal from "../components/Modal/modal"

export default function ConfirmAndPay() {
  const mocDetailsData = [
    {id: 1, label: "฿6,827.86 x 5 คืน", value: "฿34,139.30"},
    {id: 2, label: "ค่าทำความสะอาด", value: "฿6,718.90"},
    {id: 3, label: "ค่าบริการ Airbnb", value: "฿7,169.80"},
    {id: 4, label: "ภาษี", value: "฿5,664.22"},
  ]

  const mocDataCountries = [
    "ประเทศไทย",
    "สหรัฐอเมริกา",
    "สหราชอาณาจักร",
    "แคนาดา",
    "ออสเตรเลีย",
    "ญี่ปุ่น",
    "จีน",
    "เยอรมนี",
    "ฝรั่งเศส",
    "อินเดีย",
    "บราซิล",
    "รัสเซีย",
    "เกาหลีใต้",
    "อิตาลี",
    "เม็กซิโก",
    "สเปน",
    "อินโดนีเซีย",
    "ซาอุดีอาระเบีย",
    "แอฟริกาใต้",
    "ตุรกี",
  ]

  const mocDataModalContent = [
    {
      id: 1,
      title1: "ชำระเงินบางส่วนตอนนี้เลย",
      title2: "ยืนยันการจองด้วยการชำระเงินบางส่วน",
    },
    {
      id: 2,
      title1: "ชำระเงินส่วนที่เหลือก่อนเช็คอิน",
      title2:
        "จะมีการเรียกเก็บเงินสำหรับการชำระเงินครั้งที่ 2 ไปทางวิธีชำระเงินเดิมที่คุณใช้",
    },
    {
      id: 3,
      title1: "การชำระเงินจะทำโดยอัตโนมัติ",
      title2:
        "ไม่ต้องกลัวจะลืม เราจะส่งข้อความเตือน 3 วันก่อนถึงกำหนดชำระเงินครั้งถัดไป",
    },
  ]

  const [choosePayment, setChoosePayment] = useState(true)
  const [openModal, setOpenModal] = useState(false)
  const [modalAdditionalInformation, setModalAdditionalInformation] =
    useState(false)
  const [selectCountry, setSelectCountry] = useState("ไทย")
  return (
    <div className="bg-white flex flex-col gap-10">
      <header className="h-[80px] flex flex-col gap-4">
        <Link
          to="/"
          className="w-2/12 h-full flex items-center justify-center text-[#ff385c]">
          <FaAirbnb className="w-16 h-16" />
          <p className="text-3xl font-bold">airbnb</p>
        </Link>
        <div className="border-b-[1px]"></div>
      </header>

      <div className="w-full h-full mb-20 ">
        <div className="w-8/12 h-full  m-auto ">
          <div className="w-full flex items-center gap-4">
            <Link to="/room">
              <button className="hover:bg-gray-100 rounded-full p-4">
                <IoChevronBackOutline className="w-4 h-4" />
              </button>
            </Link>

            <p className="text-2xl font-medium">ขอจอง</p>
          </div>

          <div className="w-full flex flex-wrap items-start justify-center gap-32">
            {/* LEFT Playment */}
            <div className="w-2/5  flex flex-col gap-6">
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
                      <span
                        onClick={() =>
                          setModalAdditionalInformation(
                            !modalAdditionalInformation
                          )
                        }
                        className="underline cursor-pointer">
                        ข้อมูลเพิ่มเติม
                      </span>
                    </p>

                    <button
                      className={`w-6 h-6 border-2 rounded-full ${
                        choosePayment ? "" : "bg-black"
                      }`}></button>

                    {modalAdditionalInformation && (
                      <Modal>
                        <div className="w-3/5 bg-white rounded-xl">
                          <div className="p-4 md:p-5 border-b rounded-t dark:border-gray-300">
                            <button
                              onClick={() =>
                                setModalAdditionalInformation(false)
                              }
                              type="button"
                              className="bg-transparent hover:bg-gray-100 rounded-full text-sm w-8 h-8 ms-auto inline-flex justify-center items-center ">
                              <IoClose className="w-5 h-5" />
                            </button>
                          </div>

                          <div className="w-full h-full p-6 flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                              <h1 className="text-xl">
                                ชำระครึ่งหนึ่งตอนนี้ อีกครึ่งภายหลัง
                              </h1>
                              <p>
                                คุณสามารถชำระค่าที่พักบางส่วนได้ตั้งแต่ตอนนี้
                                และชำระส่วนที่เหลือภายหลังโดยไม่ต้องเสียค่าธรรมเนียมเพิ่มเติม
                              </p>
                            </div>

                            {mocDataModalContent?.map((el, idx) => (
                              <div
                                key={idx}
                                className="flex flex-col">
                                <p>{el?.title1}</p>
                                <p>{el?.title2}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Modal>
                    )}
                  </div>
                </div>
              </div>

              <div className="border-b-[1px] mt-2"></div>

              {/* BOX 4 */}
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-4">
                  <p className="text-xl font-medium">จ่ายด้วย</p>

                  <div className="w-full flex flex-col gap-4">
                    {/* credit card */}
                    <button className="w-full flex items-center justify-between p-3 border-2 rounded-lg">
                      <div className="flex items-center gap-2">
                        <PiCreditCardThin className="w-8 h-8" />
                        <p>บัตรเครดิตหรือบัตรเดบิต</p>
                      </div>

                      <FaAngleDown />
                    </button>

                    {/* number card */}
                    <div className="w-full h-full">
                      <div className="w-full h-14 border-2 rounded-t-lg px-4 flex items-center justify-start">
                        <p>เลขบัตร</p>

                        <i>
                          <FaLock className="w-8 h-4 text-gray-600" />
                        </i>
                      </div>

                      <div className="w-full h-14 border-2 rounded-b-lg border-t-0 flex">
                        <input
                          className="w-2/4 h-full border-r-2 px-4"
                          placeholder="วันหมดอายุ"
                        />
                        <input
                          className="w-2/4 h-full border-l-0 border-r-0 px-4"
                          placeholder="CVV"
                        />
                      </div>
                    </div>

                    {/* zip code */}
                    <div className="w-full h-14">
                      <input
                        className="w-full h-full border-2 focus:outline-none rounded-lg px-4"
                        placeholder="รหัสไปรษณีย์"
                      />
                    </div>

                    {/* selectCountry */}
                    <button
                      onClick={() => setOpenModal(!openModal)}
                      className="relative w-full h-14 flex items-center justify-between p-3 border-2 rounded-lg z-[0]">
                      <div className="w-full text-start">
                        <p className="text-sm">ประเท/ภูมิภาค</p>
                        <p className="text-lg">{selectCountry}</p>
                      </div>

                      <div>{openModal ? <FaAngleUp /> : <FaAngleDown />}</div>
                    </button>

                    {openModal && (
                      <Modal>
                        <div className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                          <div className="relative w-3/5 bg-white rounded-lg shadow">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-300">
                              <button
                                onClick={() => setOpenModal(false)}
                                type="button"
                                className="bg-transparent hover:bg-gray-100 rounded-full text-sm w-8 h-8 ms-auto inline-flex justify-center items-center ">
                                <IoClose className="w-5 h-5" />
                              </button>

                              <h3 className="flex-1 text-center text-lg font-semibold">
                                ประเทศ/ภูมิภาค
                              </h3>
                            </div>

                            <div
                              style={{
                                maxHeight: "800px",
                                overflowY: "auto",
                              }}>
                              {mocDataCountries.map((el, idx) => (
                                <div
                                  key={idx}
                                  className="p-4 md:p-5 space-y-4">
                                  <button
                                    onClick={() => {
                                      setSelectCountry(el), setOpenModal(false)
                                    }}
                                    className="w-full text-xl text-start flex items-center justify-between">
                                    <p
                                      className={`${
                                        selectCountry === el ? "font-bold" : ""
                                      }`}>
                                      {el}
                                    </p>

                                    {selectCountry === el && <FaCheck />}
                                  </button>
                                  <div className="border-b-2"></div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Modal>
                    )}
                  </div>
                </div>
              </div>

              <div className="border-b-[1px] mt-2"></div>

              <div>
                <button
                  type="button"
                  className="text-white bg-[#ff385c] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                  ขอจอง
                </button>
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
