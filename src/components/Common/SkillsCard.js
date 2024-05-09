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
import IconNest from '../../images/nest.svg'
import IconTs from '../../images/ts.png'
import IconStory from '../../images/story.png'
import IconMongo from '../../images/mongo.png'
import IconNative from '../../images/reactnative.webp'
import IconShad from '../../images/shadcn.png'


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
            name: "Gatsby",
            icon:IconGatsby
        },
        {
            id:3.5,
            name: "Native",
            icon:IconNative
        },
        {
          id:4,
          name: "Vue Js",
          icon:IconVue
        },
        {
            id:5,
            name: "Nest Js",
            icon:IconNest
        },
        {
            id:5.5,
            name: "Shadcn UI",
            icon:IconShad
        },
        {
          id:6,
          name: "Node Js",
          icon:IconNode
        },
        {
          id:7,
          name: "Tailwind",
          icon:IconTailwind
        },
        {
            id:8,
            name: "TypeScript",
            icon:IconTs
        },
        {
            id:9,
            name: "Storybook",
            icon:IconStory
        },
        {
            id:10,
            name: "Mongo DB",
            icon:IconMongo
        },
        {
            id:11,
            name: "Git",
            icon:IconGit
        },
        {
            id:12,
            name: "Agile",
            icon:IconJira
        },
        {
          id:13,
          name: "GraphQl",
          icon:IconGraphQl
        },
        {
          id:14,
          name: "D3 js",
          icon:IconD3
        }

      ]
    return (
    <>
        <div className='grid grid-cols-3 md:grid-cols-9 gap-3 px-4 md:px-7 py-3 mx-3 md:mx-0 bg-white dark:bg-black rounded-lg '>
            {technicalData.map((index)=>
            <div key={index.id} className='p-2 rounded-lg flex flex-col justify-center items-center relative transform duration-500 hover:-translate-y-1 hover:cursor-pointer hover:bg-gray-900'>
                <img src={index.icon} alt={index.name} className={`${index.name === 'Tailwind CSS' ? 'rounded-full object-cover':'object-cover'}`}/>
                <div className='text-white text-[10px] mt-2'>{index.name}</div>
            </div>
            )}
        </div>
    </>
  )
}

export default technicalIcon