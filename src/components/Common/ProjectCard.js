import React from 'react'
import {Modal} from 'antd'
import {MdOutlineNavigateNext} from 'react-icons/md'
import {FiGithub} from 'react-icons/fi'
import {AiOutlineEye} from 'react-icons/ai'


//assets
import VerifyPlus from '../../images/verifyPlus.png'
import ConnectStudio from '../../images/connectStudio.png'
import TechRev from '../../images/techrev.png'
import FrontGo from '../../images/frontGo.png'
import EasyWebcast from '../../images/easyWebcast.png'
import PresenterCon from '../../images/presenterCon.png'
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
          projectName:"ConnectStudio",
          subtitle:"ConnectStudio is a self manages web portal builder for customers of WTV.",
            details:'is a self manages web portal builder for customers of WTV. It is a content-rich, interactive platform that turns business video communications into engaging, live virtual events. NextJS, SCSS, Java Spring',
          stackIcons:[IconReact,IconVue],
          demoLink:"https://wtvglobal.com/connectstudio/",
          gitLink:"https://wtvglobal.com/connectstudio/",
          projectBanner:ConnectStudio,
          projectType:"fullStack"
        },{
          id:2,
          projectName:"EasyWebcast",
          subtitle:"EasyWebcast is WTV’s easy-to-use, low-cost, self-service webcasting platform to manage all webcast",
          stackIcons:[IconReact,IconReact],
          demoLink:"https://wtvglobal.com/",
            details:'EasyWebcast is WTV’s easy-to-use, low-cost, self-service webcasting platform to manage all webcast that is built using NextJS, Java Spring, GraphQl',
          gitLink:"https://wtvglobal.com/",
          projectBanner:EasyWebcast,
          projectType:"fullStack"
        },{
          id:3,
          projectName:"PresenterConsole",
          subtitle:"Presenter Console is a platform of WTV for the producer/moderator and presenter.",
          stackIcons:[IconReact,IconReact],
          demoLink:"https://wtvglobal.com/",
            details:'is a platform of WTV for the producer/moderator and presenter to manage a specific webcast for a live event. NextJS, Java Spring, GraphQl',
          gitLink:"https://wtvglobal.com/",
          projectBanner:PresenterCon,
          projectType:"fullStack"
        },
        {
            id:4,
            projectName:"Front Go",
            subtitle:"Front Go is a system that is built for the Norwegian market for financing, payment",
            stackIcons:[IconReact,IconReact],
            demoLink:"https://frontgo.no/",
            details:'is a system that is built for the Norwegian market for financing, payment, and administration solutions, preferably for small and medium-sized enterprises. ReactJS, Tailwind, MUI, REST API',
            gitLink:"https://frontgo.no/",
            projectBanner:FrontGo,
            projectType:"fullStack"
        },
        {
            id:5,
            projectName:"Verify Plus",
            subtitle:"Verify Plus is a web app for care homes in the UK to track and Instantly help support",
            stackIcons:[IconReact,IconReact],
            demoLink:"https://www.verifyplus.co.uk/",
            details:'is a web app for care homes in the UK to track and Instantly help support Social Care providers’ robust systems for Visitors, Vaccinations Testing Compliance. ReactJS, NestJS, MUI',
            gitLink:"https://www.verifyplus.co.uk/",
            projectBanner:VerifyPlus,
            projectType:"fullStack"
        },
        {
            id:6,
            projectName:"Techrev",
            subtitle:"Techrev is a review portal for all kinds of digital products.",
            stackIcons:[IconReact,IconReact],
            demoLink:"https://elegant-cray-f2ab76.netlify.app/",
            details:'Techrev is a review portal for all kinds of digital products. I have Architect and develop it using technologies like ReactJs, Contentful, Tailwind CSS and GraphQL. It is basically a headless CMS approach.',
            gitLink:"https://github.com/CsAlkemy/blue_geeks_cms",
            projectBanner:TechRev,
            projectType:"fullStack"
        }
      ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-4 md:px-7 py-3 mx-3 md:mx-0'>
        {projects.map((project) => 
            <div key={project.id} onMouseDown={()=>bigCardClickHandller(project)} role='button' tabIndex='0' className='dark:text-white text-black relative transform duration-500 hover:-translate-y-1 hover:cursor-pointer border-2 dark:border-gray-900 border-gray-100 dark:shadow-none shadow-emerald-50 bg-black'>
                <div className='p-2 bg-gray-700 rounded-t-sm'>
                    <img src={project.projectBanner} alt={project.projectName} className="object-cover rounded-lg" />
                </div>
                <div className='bg-white dark:bg-black p-4 pb-5'>
                    <div className=''>
                        <h3 className='text-xl dark:text-white font-bold'>{project.projectName}</h3>
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
                    <img src={selectedProject?.projectBanner} alt={selectedProject?.projectName} className="object-cover rounded-lg max-h-72" />
                </div>
                <div className='my-5 text-2xl tracking-wide'>
                    {selectedProject?.projectName}
                </div>
                <div className="flex gap-2 my-2">
                        {selectedProject.stackIcons.map((icon, index)=>
                            <img key={index} src={icon} alt={icon} className="h-7 w-7 object-cover" />
                        )}
                    </div>
                <div className='mt-5 text-justify text-base'>
                    {selectedProject.details}
                </div>
                <div className='grid grid-cols-2 gap-5 my-6'>
                    <a href={selectedProject.gitLink} className='btn-contained'>
                        Github
                        <FiGithub className='my-auto'/>
                    </a>
                    <a href={selectedProject.demoLink} className='btn-outline'>
                        Demo
                        <AiOutlineEye className='my-auto'/>
                    </a>
                   
                </div>
            </div>
            )
        }
           
        </Modal>
    </div>

  )
}

export default ProjectCard