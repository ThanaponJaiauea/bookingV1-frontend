/** @format */
import {FiShare} from "react-icons/fi"
import {FaHeart} from "react-icons/fa"
import {BsGrid3X3Gap} from "react-icons/bs"
import {FaStar} from "react-icons/fa6"
import {DiStackoverflow, DiApple, DiAtom} from "react-icons/di"
import {FaAngleDown, FaAngleUp} from "react-icons/fa6"

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

        {/*gallery  */}
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

            <button className="absolute flex items-center gap-2 bottom-8 right-8 border-[1px] border-black bg-white rounded-lg px-4 py-2 hover:bg-gray-100">
              <BsGrid3X3Gap />
              แสดงรูปทั้งหมด
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM Content */}
      <div className="flex">
        {/* LEFT */}
        <div className="w-2/4 flex flex-col gap-10">
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
        </div>

        {/* RIGHT from booking */}
        <div className="w-2/4 flex items-center justify-center">
          <div className="w-3/4 border-[1px] h-[500px] bg-white rounded-2xl drop-shadow-xl flex flex-col items-start justify-center p-4">
            <div className="w-full flex flex-col ">
              <h1 className="text-base">
                <span className="text-[22px] font-semibold">฿18,046 </span> คืน
              </h1>

              <div className="w-full flex flex-col items-center justify-center gap-5">
                <div className="w-full">
                  <div className="w-full flex">
                    <div className="border border-gray-500 w-2/4 h-[56px] rounded-tl-lg flex flex-col px-4 py-2">
                      <p className="text-xs font-bold">เช็คอิน</p>
                      <p>23/9/2024</p>
                    </div>

                    <div className="border border-gray-500 w-2/4 h-[56px] rounded-tr-lg border-l-0 flex flex-col px-4 py-2">
                      <p className="text-xs font-bold">เช็คเอาท์</p>
                      <p>23/9/2024</p>
                    </div>
                  </div>

                  <button className="border border-gray-500 w-full h-[56px] rounded-bl-lg rounded-br-lg border-t-0 flex items-center justify-between px-4 py-2">
                    <div className="text-start">
                      <p className="text-xs font-bold">ผู้เข้าพัก</p>
                      <p>ผู้เข้าพัก 1 คน</p>
                    </div>

                    <FaAngleDown className="text-xl" />
                  </button>
                </div>

                <button className="w-full  h-[48px] bg-[#ff385c] rounded-lg text-white">
                  จอง
                </button>

                <div>
                  <p className="font-light">ยังไม่มีการเรียกเก็บเงินจากคุณ</p>
                </div>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
