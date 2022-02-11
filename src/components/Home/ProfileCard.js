import React from "react"
import { BsFillMoonStarsFill } from "react-icons/bs"
import { MdOutlineWbSunny } from "react-icons/md"
import useDarkMode from "../../hooks/useDarkMode"
import ProfileImage from "../../images/profile.jpeg"

const ProfileCard = () => {
  const [themeColor, setTheme] = useDarkMode()
  return (
    <>
      <div className="dark:bg-black bg-gray-100 px-4 md:px-7 py-3 rounded-xl border-4 border-blue-400 shadow-md flex justify-between items-center">
        <div className="flex items-center gap-5">
          <img
            src={ProfileImage}
            alt="profile right face"
            className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover object-center border-4 border-blue-400"
          />
          <div className="tracking-wide">
            <p className="dark:text-white text-2xl md:text-3xl font-medium">
              Alkemy Hossain
            </p>
            <p className="dark:text-gray-100 text-base md:text-lg font-normal">
              Software Engineer
            </p>
            <p className="dark:text-gray-400 text-lg md:text-xl font-medium">
              Dhaka, BD
            </p>
          </div>
        </div>
        <div className="mr-0 md:mr-3">
          <span onClick={() => setTheme(themeColor)}>
            {themeColor === "dark" ? (
              <BsFillMoonStarsFill className="bg-gray-900 h-12 w-12 text-white rounded-full p-2" />
            ) : (
              <MdOutlineWbSunny className="bg-white h-12 w-12 text-black rounded-full p-1" />
            )}
          </span>
        </div>
      </div>
    </>
  )
}

export default ProfileCard
