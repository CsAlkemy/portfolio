import React from 'react'
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


const technicalIcon = () => {
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
    return (
    <>
        <div className='grid grid-cols-3 md:grid-cols-5 gap-3 px-4 md:px-7 py-3 mx-3 md:mx-0'>
            {technicalData.map((index)=>
            <div key={index.id} className='p-6 bg-white dark:bg-black rounded-lg border-2 border-emerald-500 relative transform duration-500 hover:-translate-y-1 hover:cursor-pointer hover:bg-gray-900'>
                <img src={index.icon} alt={index.name} className={index.name === 'Tailwind CSS' ? 'rounded-full object-cover':'object-cover'}/>
            </div>
            )}
        </div>
    </>
  )
}

export default technicalIcon