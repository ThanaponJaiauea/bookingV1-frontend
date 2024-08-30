/** @format */
import React, {useState} from "react"
import {FaAirbnb} from "react-icons/fa"
import {IoSearchOutline} from "react-icons/io5"
import {TbWorld} from "react-icons/tb"
import {GiHamburgerMenu} from "react-icons/gi"
import defaultProfileUser from "../pictures/user/logo-user.png"
import {Link} from "react-router-dom"
import ModalLogin from "../components/Modal/modalLogin"
import ModalRegister from "../components/Modal/modalRegister"
import useAuth from "../hooks/useAuth"

export default function Header() {
  const {authenticatedUser} = useAuth()
  console.log("authenticatedUser:", authenticatedUser)

  const mocDataNavbar = [
    {id: 1, header: "สถานที่", title: "ค้นหาปลายทาง"},
    {id: 2, header: "เช็คอิน", title: "เพิ่มวันที่"},
    {id: 3, header: "เช็คเอาท์", title: "เพิ่มวันที่"},
    {id: 4, header: "ใคร", title: "เพิ่มผู้เข้าพัก"},
  ]

  const mocDataModal = [
    {id: 1, title: "ลงทะเบียน"},
    {id: 2, title: "เข้าสู่ระบบ"},
    {id: 3, title: "ลงทะเบียนให้เช่าที่พักกับ Airbnb"},
    {id: 4, title: "ลงทะเบียนศูนย์ช้วยเหลือ"},
  ]

  const [hoveredId, setHoveredId] = useState(null)
  // console.log("hoveredId", hoveredId)

  const [open, setOpen] = useState(false)
  const [openModalLogin, setOpenModalLogin] = useState(false)

  const [select, setSelect] = useState("ที่พัก")

  const [stateCheck, setStateCheck] = useState("login")

  const handleMouseEnter = (id) => {
    setHoveredId(id)
  }

  const handleMouseLeave = () => {
    setHoveredId(null)
  }

  const handleSelect = (select) => {
    setSelect(select)
  }

  const handleOnClose = () => {
    setOpenModalLogin(false)
    setStateCheck("login")
  }

  const shouldHideBorder = (hoveredId, id) => {
    if (hoveredId === 1 && id === 1) return true
    if (hoveredId === 2 && (id === 1 || id === 2)) return true
    if (hoveredId === 3 && (id === 2 || id === 3)) return true
    if (hoveredId === 4 && id === 3) return true
    return false
  }
  return (
    <div className="w-full h-[160px] flex items-center border-b-[1px]">
      {/* LEFT logo */}
      <Link className="w-2/12 h-full flex items-center justify-center text-[#ff385c]">
        <FaAirbnb className="w-16 h-16" />
        <p className="text-3xl font-bold">airbnb</p>
      </Link>

      {/* CENTER navbar */}
      <div className="w-7/12 h-full flex flex-col items-center gap-6 pt-5">
        {/* TOP */}
        <div className="w-full flex items-center justify-center gap-8">
          <button
            onClick={() => handleSelect("ที่พัก")}
            className={`text-base ${
              select === "เอ็กซ์พีเรียนซ์" ? "text-[#6A6A6A]" : ""
            } `}>
            <p>ที่พัก</p>
          </button>

          <button
            onClick={() => handleSelect("เอ็กซ์พีเรียนซ์")}
            className={`text-base ${
              select === "ที่พัก" ? "text-[#6A6A6A]" : ""
            } `}>
            <p>เอ็กซ์พีเรียนซ์</p>
          </button>
        </div>

        {/* BOTTOM */}
        <div className="w-10/12 h-[66px] border-2 rounded-full flex overflow-hidden shadow-md">
          {mocDataNavbar?.map((el, idx) => (
            <div
              onMouseEnter={() => handleMouseEnter(el.id)}
              onMouseLeave={handleMouseLeave}
              key={idx}
              className={`flex items-center justify-between cursor-pointer hover:bg-[#DDDDDD] hover:rounded-full  ${
                el?.id === 1 ? "flex-1" : "w-[15%]"
              } ${el?.id === 4 ? "flex-1" : null} `}>
              <div className={`${el?.id === 1 ? "ml-10" : "ml-5"}`}>
                <p className="text-xs">{el?.header}</p>
                {el.id === 1 ? (
                  <input
                    placeholder={el?.title}
                    className="bg-inherit outline-none"
                  />
                ) : (
                  <p className="text-xs text-[#6A6A6A]">{el?.title}</p>
                )}
              </div>

              {el.id !== 4 ? (
                <div
                  className={`border-r-2 ${
                    shouldHideBorder(hoveredId, el.id) ? "border-none" : ""
                  } h-[40px]`}></div>
              ) : (
                <div className="w-2/4 h-full p-2 flex items-center justify-end">
                  <button className="bg-[#FF385C] hover:bg-[#E00B41] w-[35%] h-full flex items-center justify-center rounded-full">
                    <IoSearchOutline className="text-white w-[16px] h-[16px]" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT login user */}
      <div className="w-3/12 h-full flex justify-center pt-5">
        <div className="h-10 flex items-center gap-8">
          <p>
            ให้เช่าที่พักกับ <span className="font-bold">Airbnb</span>
          </p>

          <i className="text-base">
            <TbWorld />
          </i>

          <button
            onClick={() => setOpen(!open)}
            className="relative w-[86px] h-12 flex items-center justify-around border-2 rounded-full hover:shadow-md  transition-shadow duration-300 ease-in-out">
            <GiHamburgerMenu className="w-4" />

            <img
              src={defaultProfileUser}
              className="w-8"
            />
          </button>

          {open && (
            <div className="absolute w-[14%] top-20 right-20 bg-white shadow-lg rounded-lg overflow-hidden z-[9999]">
              <div className="w-full flex flex-col">
                {mocDataModal?.map((el, idx) => (
                  <React.Fragment key={idx}>
                    <button
                      onClick={
                        el.title === "ลงทะเบียน"
                          ? () => {
                              setOpenModalLogin(!openModalLogin),
                                setOpen(false),
                                setStateCheck("register")
                            }
                          : () => {
                              setOpenModalLogin(!openModalLogin),
                                setOpen(false),
                                setStateCheck("login")
                            }
                      }
                      className="w-full h-[50px] text-start hover:bg-gray-100 p-4 flex items-center ">
                      {el?.title}
                    </button>
                    {idx === 1 && (
                      <div className="w-full border-[1px] mt-2 mb-2"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          {openModalLogin &&
            (stateCheck === "login" ? (
              <ModalLogin
                onClose={handleOnClose}
                setStateCheck={() => setStateCheck()}
              />
            ) : (
              <ModalRegister
                onClose={handleOnClose}
                setStateCheck={setStateCheck}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
