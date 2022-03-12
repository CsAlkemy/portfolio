import React from "react"
import Data from "../../data/Data.json"
import { FaTwitterSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa"
import { MdOutlineAttachFile } from "react-icons/md"
import { SiUpwork } from "react-icons/si"

const About = props => {
  return (
    <div className="px-5 my-10 mx-3 md:mx-0 bg-gray-100  dark:bg-transparent border-2 border-gray-700 dark:text-gray-50 py-5 rounded-md">
      <div className="text-2xl md:text-3xl font-bold mb-2">
        {Data.about.title}
      </div>

      <div className="text-justify md:text-left mb-5 text-base md:text-lg">
        {Data.about.intro}{" "}
        <span className="text-cyan-500 px-2 mx-1 font-bold hover:bg-cyan-500 hover:text-black">
          <a href={Data.about.link} target="_blank" rel="noreferrer">
            {Data.about.company}
          </a>
        </span>
        {Data.about.aboutCompany}
      </div>

      <div className="text-justify md:text-left text-base md:text-lg">
        {Data.about.plan}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
        <div className="p-4 rounded-md dark:bg-black bg-white dark:shadow-none shadow-sm border-l-4 border-cyan-500">
          <div className="text-2xl font-bold">Let's Connect</div>
          <div className="flex gap-x-2 items-center my-3">
            <a
              href="https://www.upwork.com/workwith/alkemyhossain"
              target="_blank"
              rel="noreferrer"
            >
              <SiUpwork className="h-6 w-6 text-white dark:text-gray-900 dark:bg-cyan-500 bg-black px-1 rounded-sm" />
            </a>
            <a
              href="https://github.com/CsAlkemy"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare className="h-7 w-7 dark:text-cyan-500 text-black " />
            </a>
            <a
              href="https://www.linkedin.com/in/aalkemy/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="h-7 w-7 dark:text-cyan-500 text-black " />
            </a>
            <a
              href="https://twitter.com/HossainAlkemy"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitterSquare className="h-7 w-7 dark:text-cyan-500 text-black" />
            </a>
          </div>
        </div>
        <div className="p-4 rounded-md dark:bg-black bg-white dark:shadow-none shadow-sm border-l-4 border-cyan-500">
          <div className="text-2xl font-bold">Download CV</div>
          <button className="flex flex-row py-2 px-4 dark:bg-cyan-500 bg-black hover:bg-cyan-500 hover:text-white dark:hover:bg-gray-800 dark:hover:text-white dark:text-black text-white rounded-sm font-bold mt-2 shadow-md">
            <span>Download</span>
            <MdOutlineAttachFile className="w-5 my-auto h-5 ml-2 dark:text-black rotate-45" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
