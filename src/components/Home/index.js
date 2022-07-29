import React from "react"

//Components
import About from "./About"
import SmallHeader from "./SmallHeader";
import ProfileCard from "./ProfileCard"
import TechnicalIcon from "../Common/SkillsCard";
import ExperienceCard from "../Common/ExperienceCard";
import ProjectCard from "../Common/ProjectCard";
import CertificateCard from "../Common/CertificateCard";

const index = () => {



  
  return (
    <div>
      <ProfileCard />
      <About />
      <SmallHeader title="Technical Skills" link="skills" />
      <TechnicalIcon/>
      <SmallHeader title="Experiences" link="experiences" />
      <ExperienceCard />
      <SmallHeader title="Projects" link="projects" />
      <ProjectCard/>
      <SmallHeader title="Certificates" link="certificates" />
      <CertificateCard />
    </div>
  )
}

export default index
