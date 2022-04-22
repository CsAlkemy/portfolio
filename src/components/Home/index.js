import React from "react"
//Components
import About from "./About"
import SmallHeader from "./SmallHeader";
import ProfileCard from "./ProfileCard"
import TechnicalIcon from "../Common/SkillsCard";
import ExperienceCard from "../Common/ExperienceCard";
import ProjectCard from "../Common/ProjectCard";
import CertificateCard from "../Common/CertificateCard";
//Components***
//Icon And Images
import IconReact from '../../images/reactIcon.png'
import IconNext from '../../images/next.png'
import IconVue from '../../images/vue.png'
import IconGatsby from '../../images/gatsby-icon.png'
import IconNode from '../../images/node.png'
import IconGraphQl from '../../images/graphql.png'
import IconTailwind from '../../images/tailwind.png'
import IconD3 from '../../images/d3.png'
import IconGit from '../../images/git-icon.jpg'
import IconJira from '../../images/jira.png'

import LogoWtv from '../../images/wtv.jpg'
import LogoZap from '../../images/zaptwo.png'
import LogoDataCamp from '../../images/datacamp.png'
import LogoFreecodeCamp from '../../images/freecodecamp.png'
import ProjectOne from '../../images/project1.png'
import ProjectTwo from '../../images/project2.png'
import ProjectThree from '../../images/project3.png'
//Icon And Images***


const index = () => {
  const technicalData = [
    {
      id:1,
      name: "React Js",
      icon:IconReact
    },
    {
      id:2,
      name: "Next Js",
      icon:IconNext
    },
    {
      id:3,
      name: "Vue Js",
      icon:IconVue
    },
    {
      id:4,
      name: "Gatsby",
      icon:IconGatsby
    },
    {
      id:5,
      name: "Node Js",
      icon:IconNode
    },
    {
      id:6,
      name: "Tailwind CSS",
      icon:IconTailwind
    },
    {
      id:7,
      name: "GraphQl",
      icon:IconGraphQl
    },
    {
      id:8,
      name: "D3 js",
      icon:IconD3
    },
    {
      id:9,
      name: "Version control",
      icon:IconGit
    },
    {
      id:10,
      name: "Agila",
      icon:IconJira
    }
  ]
  const experienceCardData = [
    {
      id:1,
      companyName:"World Television",
      position:"Software Engineer",
      joiningDate:"Oct-21",
      endDate:"present",
      discription:"Working on the Development of ConnectStudio and some web application for a streaming platform using NextJS, SCSS as part of global team of WtvGlobal UK.",
      companyIcon:LogoWtv
    },{
      id:2,
      companyName:"ZapTwo",
      position:"Software Engineer",
      joiningDate:"Mar-20",
      endDate:"Oct-21",
      discription:"Architect and Developed Tourgo a web application for booking hotel rooms, and tour packages and offers using Node.js, MongoDB, pugJs, and, Typescript.",
      companyIcon:LogoZap
    }
  ]
  const projectCardData = [
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
  const certificatesData = [
    {
      id:1,
      certificateOn:"Responsive Web Design",
      provider:"freecodecamp.org",
      issueDate:"2021",
      providerLogo:LogoFreecodeCamp
    },{
      id:2,
      certificateOn:"Web Scraping & Python",
      provider:"DataCamp.com",
      issueDate:"2022",
      providerLogo:LogoDataCamp
    }
  ]

  
  return (
    <div>
      <ProfileCard />
      <About />
      <SmallHeader title="Technical Skills" link="" />
      <TechnicalIcon Data = {technicalData}/>
      <SmallHeader title="Experiences" link="" />
      <ExperienceCard data= {experienceCardData}/>
      <SmallHeader title="Projects" link="" />
      <ProjectCard projects={projectCardData} />
      <SmallHeader title="Certificates" link="" />
      <CertificateCard certificates = {certificatesData} />
    </div>
  )
}

export default index
