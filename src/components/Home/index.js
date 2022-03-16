import React from "react"
import ProfileCard from "./ProfileCard"
import About from "./About"
import {MdOutlineNavigateNext} from 'react-icons/md'
import TechnicalIcon from "../Common/technicalIcon";
import IconReact from '../../images/reactIcon.png'


const index = () => {
  const technicalData = [
    {
      name: "react",
      icon:IconReact
    },
    {
      name: "Gatsby",
      icon:IconReact
    },
    {
      name: "Netlify",
      icon:IconReact
    },
    {
      name: "TypeScript",
      icon:IconReact
    }
  ]
  return (
    <div>
      <ProfileCard />
      <About />
        <div className="flex flex-row justify-between dark:text-white text-black my-10 px-4 md:px-7 py-3 mx-3 md:mx-0">
            <div className="text-2xl font-bold">Technical Skills</div>
            <button className="py-1 px-3 border-2 border-cyan-500 rounded-full flex flex-row justify-self-end">More<MdOutlineNavigateNext className="my-auto"/><MdOutlineNavigateNext className="my-auto -ml-2"/></button>
        </div>
        <div>
          <TechnicalIcon Data = {technicalData}/>
        </div>
        <div className="flex flex-row justify-between dark:text-white text-black my-10 px-4 md:px-7 py-3 mx-3 md:mx-0">
            <div className="text-2xl font-bold">Experiences</div>
            <button className="py-1 px-3 border-2 border-cyan-500 rounded-full flex flex-row justify-self-end">More<MdOutlineNavigateNext className="my-auto"/><MdOutlineNavigateNext className="my-auto -ml-2"/></button>
        </div>
    </div>
  )
}

export default index
