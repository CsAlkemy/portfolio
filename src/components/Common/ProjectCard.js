import React from 'react'
import { Modal } from 'antd'
import {MdOutlineNavigateNext} from 'react-icons/md'
import {FiGithub} from 'react-icons/fi'
import {AiOutlineEye} from 'react-icons/ai'


//assets
import ProjectOne from '../../images/project1.png'
import ProjectTwo from '../../images/project2.png'
import ProjectThree from '../../images/project3.png'
import IconReact from '../../images/reactIcon.png'
import IconVue from '../../images/vue.png'

const ProjectCard = () => {
    const [visible, setVisible] = React.useState(false);
    const [selectedProject, setSelectedProject] = React.useState();

    const bigCardClickHandller = (data) => {
        setVisible(true);
        setSelectedProject(data);
    }
    const projects = [
        {
          id:1,
          projectName:"Tourgo",
          subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, officia?",
          stackIcons:[IconReact,IconVue],
          demoLink:"present",
          gitLink:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, officia?",
          projectBanner:ProjectThree,
          projectType:"fullStack"
        },{
          id:2,
          projectName:"Tourgo",
          subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, officia?",
          stackIcons:[IconReact,IconReact],
          demoLink:"present",
          gitLink:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, officia?",
          projectBanner:ProjectTwo,
          projectType:"fullStack"
        },{
          id:3,
          projectName:"Tourgo",
          subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, officia?",
          stackIcons:[IconReact,IconReact],
          demoLink:"present",
          gitLink:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, officia?",
          projectBanner:ProjectOne,
          projectType:"fullStack"
        }
      ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-4 md:px-7 py-3 mx-3 md:mx-0'>
        {projects.map((project) => 
            <div key={project.id} onMouseDown={()=>bigCardClickHandller(project)} role='button' tabIndex='0' className='dark:text-white text-black relative transform duration-500 hover:-translate-y-1 hover:cursor-pointer border-2 dark:border-gray-900 border-gray-100 dark:shadow-none shadow-emerald-50'>
                <div className='p-2 bg-gray-700 rounded-t-sm'>
                    <img src={project.projectBanner} alt={project.projectName} className="object-cover rounded-lg" />
                </div>
                <div className='bg-white dark:bg-black  p-4 pb-5'>
                    <div className=''>
                        <h3 className='text-xl font-bold'>{project.projectName}</h3>
                        <p className='text-sm font-thin my-1'>{project.subtitle}</p>
                    </div>
                    <div className="flex gap-2 my-2">
                        {project.stackIcons.map((icon, index)=>
                            <img key={index} src={icon} alt={icon} className="h-7 w-7 object-cover" />
                        )}
                    </div>
                    <div className='flex gap-3'>
                        <button className="py-1 px-2 border-2 border-emerald-500 rounded-full flex flex-row justify-self-end text-sm hover:bg-emerald-500 hover:text-black">Demo<MdOutlineNavigateNext className="my-auto"/><MdOutlineNavigateNext className="my-auto -ml-2"/></button>
                        <button className="py-1 px-2 border-2 border-emerald-500 rounded-full flex flex-row justify-self-end text-sm hover:bg-emerald-500 hover:text-black">Git<MdOutlineNavigateNext className="my-auto"/><MdOutlineNavigateNext className="my-auto -ml-2"/></button>
                    </div>
                </div>
            </div>

        )}
        <Modal
            className=''
            centered
            visible={visible}
            onCancel={() => setVisible(false)}
            footer={null}
            title='Project Details'
        >   
        {
            selectedProject && (
            <div className='px-5 sm:px-10 py-5'>
                <div>
                    <img src={selectedProject.projectBanner} alt={selectedProject.projectName} className="object-cover rounded-lg max-h-72" />
                </div>
                <div className='my-5 text-2xl tracking-wide'>
                    {selectedProject.projectName}
                </div>
                <div className="flex gap-2 my-2">
                        {selectedProject.stackIcons.map((icon, index)=>
                            <img key={index} src={icon} alt={icon} className="h-7 w-7 object-cover" />
                        )}
                    </div>
                <div className='mt-5 text-justify text-base'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quasi modi dolores rem tenetur ab dolore facere hic illum esse? Voluptate nostrum, veniam et quisquam accusantium beatae, ea, accusamus earum optio nulla tenetur? Vel magni voluptates assumenda omnis provident minus modi ullam laborum corporis corrupti, obcaecati ab tempora consequatur tempore sed incidunt dicta, architecto recusandae delectus pariatur facilis expedita vero. Accusantium doloribus alias, maiores totam in vero quas suscipit id provident explicabo deserunt veniam commodi aperiam adipisci. Assumenda doloremque quos qui. Officiis rerum quam dignissimos ipsa consequuntur, ipsum, reiciendis corporis nemo asperiores possimus illum, cupiditate aperiam quibusdam nulla sint tempore.
                </div>
                <div className='grid grid-cols-2 gap-5 my-6'>
                    <button className='btn-contained'>
                        Github
                        <FiGithub className='my-auto'/>
                    </button>
                    <button className='btn-outline'>
                        Demo
                        <AiOutlineEye className='my-auto'/>
                    </button>
                   
                </div>
            </div>
            )
        }
           
        </Modal>
    </div>

  )
}

export default ProjectCard