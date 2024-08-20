/** @format */
import {FiShare} from "react-icons/fi"
import {FaHeart} from "react-icons/fa"
import {BsGrid3X3Gap} from "react-icons/bs"
import {FaStar} from "react-icons/fa6"
import {DiStackoverflow, DiApple, DiAtom} from "react-icons/di"
import {FaAngleDown, FaAngleUp} from "react-icons/fa6"
import {useEffect, useRef, useState} from "react"
import {Link} from "react-router-dom"

export default function RoomPage() {
  const data = [
    {id: 1, icon: <FiShare />, title: "แชร์"},
    {id: 2, icon: <FaHeart />, title: "บันทึก"},
  ]

  const dataImages = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
  ]

  const dataDescription = [
    {
      id: 1,
      icon: <DiStackoverflow className="w-6 h-6" />,
      header: "ออกแบบโดย",
      title: "Ibuku Bamboo Architecture and Design",
    },
    {
      id: 2,
      icon: <DiApple className="w-6 h-6" />,
      header: "แนะนำใน",
      title: "Condé Nast Traveler, October 2019 Home Crux, August 2019",
    },
    {
      id: 3,
      icon: <DiAtom className="w-6 h-6" />,
      header: "ยกเลิกฟรีก่อนวันที่ 24 ส.ค",
      title: "รับเงินคืนเต็มจำนวนหากเปลี่ยนใจ",
    },
  ]

  const guestsData = [
    {id: 1, title1: "ผู้ใหญ่", title2: "อายุ 13 ขึ้นไป"},
    {id: 2, title1: "เด็ก", title2: "อายุ 2-12 ปี"},
    {id: 3, title1: "ทารก", title2: "อายุน้อยกว่า 2 ปี"},
    {
      id: 4,
      title1: "สัตว์เลี้ยง",
      title2: "เดินทางมากับสัตว์ช่วยเหลือใช่ไหม?",
    },
  ]

  const [openModal, setOpenModal] = useState(false)

  const [adult, setAdult] = useState(1)
  const [child, setChild] = useState(0)
  const [infant, setInfant] = useState(0)
  const [quantity, setQuantity] = useState()
  const [scores, setScores] = useState(5)
  const [openGallery, setOpenGallery] = useState(false)

  const incrementGuests = (type) => {
    if (type === "adult" && adult < 4 - child - infant) setAdult(adult + 1)
    if (type === "child" && child < 4 - adult - infant) setChild(child + 1)
    if (type === "infant" && infant < 4 - adult - child) setInfant(infant + 1)
  }

  const decrementGuests = (type) => {
    if (type === "adult" && adult > 1) setAdult(adult - 1)
    if (type === "child" && child > 0) setChild(child - 1)
    if (type === "infant" && infant > 0) setInfant(infant - 1)
  }

  useEffect(() => {
    setQuantity(adult + child + infant)
  }, [adult, child, infant])

  const buttonRef = useRef()
  const modalRef = useRef()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target) &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        setOpenModal(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [buttonRef, modalRef])

  return (
    <div className="w-8/12 m-auto mt-5 mb-20 flex flex-col gap-8">
      {/* TOP  */}
      <div className="flex flex-col gap-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-[26px] font-medium">
            Aura House 2bds Eco Bamboo House, สระว่ายน้ำ, วิวแม่น้ำ
          </h1>

          <div className="flex items-center gap-4">
            {data?.map((el, idx) => (
              <button
                key={idx}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
                <i>{el?.icon}</i>
                <p className="text-sm underline">{el?.title}</p>
              </button>
            ))}
          </div>
        </div>

        {/* gallery  */}
        <div className="flex gap-2 ">
          <div className="w-[50%] h-full">
            <img
              className="rounded-l-2xl"
              src={dataImages[0]}
              loading="lazy"
            />
          </div>

          <div className="relative w-[50%] grid grid-cols-2 gap-2">
            {dataImages.slice(1).map((src, idx) => (
              <div key={idx}>
                <img
                  className={`h-auto max-w-full ${
                    idx % 2 !== 0 ? "rounded-r-2xl" : ""
                  }`}
                  src={src}
                  loading="lazy"
                />
              </div>
            ))}

            <button
              onClick={() => setOpenGallery(!openGallery)}
              className="absolute flex items-center gap-2 bottom-8 right-8 border-[1px] border-black bg-white rounded-lg px-4 py-2 hover:bg-gray-100">
              <BsGrid3X3Gap />
              แสดงรูปทั้งหมด
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM Content */}
      <div className="flex">
        {/* LEFT */}
        <div className="w-3/4 flex flex-col gap-10">
          <div>
            <h1 className="text-[22px] font-medium">
              วิลล่าทั้งหลัง ใน <span className="font-bold">Abiansemal</span>{" "}
              อินโดนีเซีย
            </h1>

            <p>4 คน 2 ห้องนอน 2 เตียงห้องน้ำ 2 ห้อง</p>

            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <i>
                  <FaStar />
                </i>
                <p>4.83</p>
              </div>

              <div className="flex items-center gap-2">
                <p>286 รีวิว</p>
              </div>
            </div>
          </div>

          <div className="w-full border-b-2"></div>

          <div className="flex items-center gap-6">
            <div>
              <img
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                className="rounded-full w-14 h-14"
              />
            </div>

            <div>
              <p className="text-base">
                โฮสต์โดย <span className="font-semibold">Wayan</span>
              </p>

              <p className="text-[#6A6A6A]">
                เจ้าของที่พักดีเด่นให้เช่าที่พักมา 5 ปี
              </p>
            </div>
          </div>

          <div className="w-full border-b-2"></div>

          {dataDescription?.map((el, idx) => (
            <div
              key={idx}
              className="flex items-center gap-6">
              <i>{el?.icon}</i>

              <div>
                <p>{el?.header}</p>
                <p className="text-[#6A6A6A]">{el?.title}</p>
              </div>
            </div>
          ))}

          <div className="w-full border-b-2"></div>

          <div className="w-full h-full flex flex-col gap-4">
            {/* container comment */}
            <dvi className="flex h-full items-center justify-between flex-wrap gap-2">
              {/* BOX comment */}
              <div className="w-5/12 h-[200px] p-2 flex flex-col justify-center gap-2">
                <div className="flex items-center gap-2">
                  <div>
                    <img className="w-14 h-14 bg-red-600 rounded-full" />
                  </div>

                  <div className="text-base">
                    <p>namessssss</p>
                    <p>เข้าร่วมกับ Airbnb มาแล้ว 1 ปี</p>
                  </div>
                </div>

                <div className="w-full pl-2">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {Array.from({length: scores}).map((_, index) => (
                        <FaStar
                          key={index}
                          className="text-xs"
                        />
                      ))}
                    </div>

                    <p>1 สัปดาห์ที่แล้ว</p>
                  </div>

                  <p className="text-base break-words">
                    commentssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                  </p>
                </div>
              </div>

              <div className="w-5/12  h-[200px] p-2 flex flex-col justify-center gap-2">
                <div className="flex items-center gap-2">
                  <div>
                    <img className="w-14 h-14 bg-red-600 rounded-full" />
                  </div>

                  <div className="text-base">
                    <p>namessssss</p>
                    <p>เข้าร่วมกับ Airbnb มาแล้ว 1 ปี</p>
                  </div>
                </div>

                <div className="w-full pl-2">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {Array.from({length: scores}).map((_, index) => (
                        <FaStar
                          key={index}
                          className="text-xs"
                        />
                      ))}
                    </div>

                    <p>1 สัปดาห์ที่แล้ว</p>
                  </div>

                  <p className="text-base break-words">
                    commentssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                  </p>
                </div>
              </div>
            </dvi>

            {/* BOX button */}
            <button className="w-1/5 border-[1px] border-black p-2.5 rounded-lg hover:bg-black hover:text-white">
              <p className="text-sm">แสดงหมดทั้ง 10 รีวิว</p>
            </button>
          </div>

          <div className="w-full border-b-2"></div>
        </div>

        {/* RIGHT from booking */}
        <div className="w-2/4 flex items-center justify-end">
          <div className="w-3/4 border-[1px] bg-white rounded-2xl drop-shadow-xl flex flex-col items-start justify-center p-4 gap-6">
            <div className="w-full flex flex-col mt-4 gap-7">
              <h1 className="text-base">
                <span className="text-[22px] font-semibold">฿18,046 </span> คืน
              </h1>

              <div className="w-full flex flex-col items-center justify-center gap-5">
                <div className="w-full cursor-pointer">
                  <div className="w-full flex">
                    <div className="border border-gray-500 w-2/4 h-[56px] rounded-tl-lg flex flex-col px-4 py-2 $">
                      <p className="text-xs font-bold">เช็คอิน</p>
                      <p>23/9/2024</p>
                    </div>

                    <div className="border border-gray-500 w-2/4 h-[56px] rounded-tr-lg border-l-0 flex flex-col px-4 py-2">
                      <p className="text-xs font-bold">เช็คเอาท์</p>
                      <p>23/9/2024</p>
                    </div>
                  </div>

                  <button
                    ref={buttonRef}
                    onClick={() => setOpenModal(!openModal)}
                    className="border w-full h-[56px] rounded-bl-lg border-gray-500 rounded-br-lg border-t-0 flex items-center justify-between px-4 py-2">
                    <div className="text-start">
                      <p className="text-xs font-bold">ผู้เข้าพัก</p>
                      <p>ผู้เข้าพัก {quantity} คน</p>
                    </div>

                    {openModal ? (
                      <FaAngleUp className="text-xl" />
                    ) : (
                      <FaAngleDown className="text-xl" />
                    )}
                  </button>

                  {openModal && (
                    <div
                      ref={modalRef}
                      onClick={(e) => e.stopPropagation()}
                      className="absolute border-2 w-full bg-white z-[99] top-52 right-0 left-0 rounded-md p-3 flex flex-col gap-8">
                      {guestsData?.map((el, idx) => (
                        <div
                          key={idx}
                          className="flex itenms-center justify-between">
                          <div className="flex flex-col text-start">
                            <p className="text-sm">{el?.title1}</p>
                            <p className="text-sm">{el?.title2}</p>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                decrementGuests(
                                  el.id === 1
                                    ? "adult"
                                    : el.id === 2
                                    ? "child"
                                    : "infant"
                                )
                              }
                              className="border-2 rounded-full w-8 h-8"
                              disabled={
                                (el.id === 1 && adult === 1) ||
                                (el.id === 2 && child === 0) ||
                                (el.id === 3 && infant === 0)
                              }>
                              -
                            </button>

                            <p>
                              {el.id === 1
                                ? adult
                                : el.id === 2
                                ? child
                                : el.id === 3
                                ? infant
                                : 0}
                            </p>

                            <button
                              onClick={() =>
                                incrementGuests(
                                  el.id === 1
                                    ? "adult"
                                    : el.id === 2
                                    ? "child"
                                    : "infant"
                                )
                              }
                              className="border-2 rounded-full w-8 h-8"
                              disabled={
                                (el.id === 1 && adult === 4) ||
                                (el.id === 2 && child === 4) ||
                                (el.id === 3 && infant === 4)
                              }>
                              +
                            </button>
                          </div>
                        </div>
                      ))}

                      <p className="text-start">
                        ที่พักนี้รับผู้เข้าพักได้สูงสุด 4 คน ไม่รวมทารก
                        และห้ามนำสัตว์เลี้ยงเข้า
                      </p>

                      <button
                        onClick={() => setOpenModal(false)}
                        className="flex items-center justify-end underline">
                        ปิด
                      </button>
                    </div>
                  )}
                </div>
                <Link
                  to="/confirmAndPay"
                  className="w-[99%] h-[48px] bg-[#ff385c] rounded-lg text-white">
                  <button className="w-full h-full">จอง</button>
                </Link>

                <div>
                  <p className="font-light">ยังไม่มีการเรียกเก็บเงินจากคุณ</p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col gap-6 mb-2">
              <div className="flex items-center justify-between">
                <p>฿18,000 x 2 คืน</p>
                <p>฿36,000</p>
              </div>

              <div className="w-full border-b-2"></div>

              <div className="flex items-center justify-between">
                <p>ยอดรวม(ไม่รวมภาษี)</p>
                <p>฿36,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {openGallery && (
        <div
          id="default-modal"
          tabindex="-1"
          className="w-full h-full fixed top-0 right-0 left-0 z-50 flex justify-center items-center md:inset-0 h-[calc(100%-1rem)] bg-black bg-opacity-30 backdrop-blur-sm">
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Terms of Service
                </h3>
                <button
                  onClick={() => setOpenGallery(false)}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="default-modal">
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  With less than a month to go before the European Union enacts
                  new consumer privacy laws for its citizens, companies around
                  the world are updating their terms of service agreements to
                  comply.
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  The European Union’s General Data Protection Regulation
                  (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                  common set of data rights in the European Union. It requires
                  organizations to notify users as soon as possible of high-risk
                  data breaches that could personally affect them.
                </p>
              </div>
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  data-modal-hide="default-modal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  I accept
                </button>
                <button
                  data-modal-hide="default-modal"
                  type="button"
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
