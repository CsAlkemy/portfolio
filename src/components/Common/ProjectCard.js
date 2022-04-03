import React from 'react'
import {MdOutlineNavigateNext} from 'react-icons/md'

const ProjectCard = (props) => {
    console.log(props)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-4 md:px-7 py-3 mx-3 md:mx-0'>
    {props?.projects.map((project) => 
        <div key={project.id} className='dark:text-white text-black'>
            <div className='p-2 bg-gray-700 rounded-t-sm'>
                <img src={project.projectBanner} alt={project.projectName} className="object-cover rounded-lg" />
            </div>
            <div className='bg-black p-4 pb-5'>
                <div className=''>
                    <h3 className='text-xl font-bold'>{project.projectName}</h3>
                    <p className='text-sm font-thin my-1'>{project.subtitle}</p>
                </div>
                <div className="flex gap-2 my-2">
                    {project.stackIcons.map((icon)=>
                        <img key={icon} src={icon} alt={icon} className="h-7 w-7 object-cover" />
                    )}
                </div>
                <div className='flex gap-3'>
                    <button className="py-1 px-2 border-2 border-emerald-500 rounded-full flex flex-row justify-self-end text-sm hover:bg-emerald-500 hover:text-black">Demo<MdOutlineNavigateNext className="my-auto"/><MdOutlineNavigateNext className="my-auto -ml-2"/></button>
                    <button className="py-1 px-2 border-2 border-emerald-500 rounded-full flex flex-row justify-self-end text-sm hover:bg-emerald-500 hover:text-black">Git<MdOutlineNavigateNext className="my-auto"/><MdOutlineNavigateNext className="my-auto -ml-2"/></button>
                </div>
            </div>
            
            
        </div>

    )}
        
    </div>

  )
}

export default ProjectCard