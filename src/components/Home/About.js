import React from "react"
import Data from "../../data/Data.json"

const About = props => {
  console.log(Data)
  return (
    <div className="px-5 md:px-0 my-10  dark:bg-transparent dark:text-gray-50 py-5">
      <div className="text-2xl md:text-3xl font-bold mb-2">
        {Data.about.title}
      </div>
      <div className="text-justify md:text-left mb-5 text-sm md:text-base">
        {Data.about.intro}{" "}
        <span className="text-blue-500 px-2 mx-1 font-bold hover:bg-cyan-500 hover:text-black">
          <a href={Data.about.link} target="_blank">
            {Data.about.company}
          </a>
        </span>
        {Data.about.aboutCompany}
      </div>
      <div className="text-justify md:text-left text-sm md:text-base">
        {Data.about.plan}
      </div>
    </div>
  )
}

export default About
