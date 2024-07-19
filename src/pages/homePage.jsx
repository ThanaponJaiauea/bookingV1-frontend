/** @format */
import {FaStar, FaHeart} from "react-icons/fa"
import {Link} from "react-router-dom"

export default function HomePage() {
  const dataกImages = [
    {
      id: 1,
      imageUrl:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    },
    // {
    //   id: 2,
    //   imageUrl: "https://picsum.photos/300/200",
    // },
    // {
    //   id: 3,
    //   imageUrl: "https://picsum.photos/300/300",
    // },
    // {
    //   id: 4,
    //   imageUrl: "https://picsum.photos/300/400",
    // },
    // {
    //   id: 5,
    //   imageUrl: "https://picsum.photos/300/500",
    // },
    // {
    //   id: 6,
    //   imageUrl: "https://picsum.photos/300/600",
    // },
    // {
    //   id: 7,
    //   imageUrl: "https://picsum.photos/300/700",
    // },
    // {
    //   id: 8,
    //   imageUrl: "https://picsum.photos/300/800",
    // },
    // {
    //   id: 9,
    //   imageUrl: "https://picsum.photos/300/90",
    // },
    // {
    //   id: 10,
    //   imageUrl: "https://picsum.photos/300/10",
    // },
  ]

  return (
    <div className="h-screen flex  justify-center">
      <div className="mt-10 flex flex-col gap-3">
        <Link
          to="/room"
          target="_blank">
          <div className="relative w-[280px] h-[265px] rounded-2xl bg-gray-200 overflow-hidden">
            <FaHeart className="text-lg absolute z-[1] top-5 right-6" />

            <div className="w-full">
              {dataกImages?.map((el, idx) => (
                <img
                  src={el?.imageUrl}
                  key={idx}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <p className="text-base">เกาะสมุยไทย</p>

              <p className="flex items-center gap-1">
                <FaStar /> 5.0
              </p>
            </div>

            <p className="text-[#6A6A6A] text-sm">ห่างออกไป 469 กิโลเมตร</p>
            <p className="text-[#6A6A6A] text-sm">22-27 สค</p>
            <p className="text-base">
              <span className="font-medium">฿16,410</span> คืน
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}
