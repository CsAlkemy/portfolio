import React from 'react'
import {MdOutlineNavigateNext} from 'react-icons/md'

const SmallHeader = (props) => {
  return (
        <div className="flex flex-row justify-between dark:text-white text-black my-10 px-4 md:px-7 py-3 mx-3 md:mx-0">
            <div className="text-2xl font-bold">{props.title}</div>
            <button className="py-1 px-3 border-2 border-emerald-500 rounded-full flex flex-row justify-self-end">More<MdOutlineNavigateNext className="my-auto"/><MdOutlineNavigateNext className="my-auto -ml-2"/></button>
        </div>
  )
}

export default SmallHeader