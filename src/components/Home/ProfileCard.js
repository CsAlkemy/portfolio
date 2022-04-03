import React from "react"
import { BsFillMoonStarsFill } from "react-icons/bs"
import { MdOutlineWbSunny } from "react-icons/md"
import useDarkMode from "../../hooks/useDarkMode"
import ProfileImage from "../../images/profile.jpeg"

const ProfileCard = () => {
  const [themeColor, setTheme] = useDarkMode()
  return (
    <>
      <div className="dark:bg-black bg-white drop-shadow-md px-4 md:px-7 py-3 mx-3 md:mx-0 rounded-xl flex justify-between items-center">
        <div className="flex items-center gap-5">
          <img
            src={ProfileImage}
            alt="profile right face"
            className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover object-center border-4 border-emerald-400"
          />
          <div className="tracking-wide">
            <p className="dark:text-white text-xl md:text-3xl font-medium">
              Alkemy Hossain
            </p>
            <p className="dark:text-gray-100 text-sm md:text-lg font-normal">
              Software Engineer
            </p>
            <p className="dark:text-gray-400 text-sm md:text-xl font-medium">
              Dhaka, BD
            </p>
          </div>
        </div>
        <div className="mr-0 md:mr-3">
          <button
            onClick={() => setTheme(themeColor)}
            className="cursor-pointer"
          >
            {themeColor === "dark" ? (
              <BsFillMoonStarsFill className="bg-gray-900 h-9 w-9 md:h-10 md:w-10 text-white rounded-full p-2" />
            ) : (
              <MdOutlineWbSunny className="bg-white h-9 w-9 md:h-10 md:w-10 text-black rounded-full p-1" />
            )}
          </button>
        </div>
      </div>
    </>
  )
}

export default ProfileCard
