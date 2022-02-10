import React from "react"
import { BsFillMoonStarsFill } from "react-icons/bs"
import ProfileImage from "../../images/profile.jpeg"

const ProfileCard = () => {
  return (
    <>
      <div className="bg-black  px-4 md:px-7 py-3 rounded-xl border-4 border-blue-400 shadow-md flex justify-between items-center">
        <div className="flex items-center gap-5">
          <img
            src={ProfileImage}
            alt="profile right face"
            className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover object-center border-4 border-blue-400"
          />
          <div className="tracking-wide">
            <p className="text-white text-2xl md:text-3xl font-medium">
              Alkemy Hossain
            </p>
            <p className="text-gray-100 text-base md:text-lg font-normal">
              Software Engineer
            </p>
            <p className="text-gray-400 text-lg md:text-xl font-medium">
              Dhaka, BD
            </p>
          </div>
        </div>
        <div className="mr-0 md:mr-3">
          <BsFillMoonStarsFill className="bg-white h-10 w-10 md:h-14 md:w-14 text-black rounded-full p-2 md:p-4" />
        </div>
      </div>
    </>
  )
}

export default ProfileCard
