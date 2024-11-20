import React from 'react'
import LogoWtv from '../../images/wtv.jpg'
import LogoFront from '../../images/frontPayment.png'
import LogoChamp from '../../images/champTech.jpg'

const ExpCard = (props) => {
    const experienceCardData = [
        {
          id:1,
          companyName:"World Television (Tulip)",
          position:"Software Engineer",
          joiningDate:"Nov-21",
          endDate:"present",
            description:"Developed ConnectStudio, a streaming platform web app, using Next.js and SCSS, contributing to a global team for WtvGlobal UK. Also, develop CareApp, a healthcare management application for Care Homes of UK.",
          companyIcon:LogoWtv
        },
        {
            id:2,
            companyName:"Front Payment(ELO)",
            position:"Software Engineer-pt",
            joiningDate:"June-22",
            endDate:"July-23",
            description:"Built Frontpayment GO a financial web application for companies to integrate with accounting systems, using ReactJS, MUI, and React Fuse as part of a global team for Frontpayment Norway.",
            companyIcon:LogoFront
        },
        {
          id:3,
          companyName:"ChampTech",
          position:"Jr. Software Engineer",
          joiningDate:"Mar-21",
          endDate:"Nov-21",
            description:"Architected and Developed Tourgo, a booking platform for hotels and tour packages, with Node.js, MongoDB, Typescript, and, Pug.Js.",
          companyIcon:LogoChamp
        }
    ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 px-4 md:px-7 py-3 mx-3 md:mx-0'>
            {experienceCardData.map((index)=>
            <div key={index.id} className='p-4 bg-white border-2 border-gray-100 dark:border-gray-900 dark:bg-black rounded-lg dark:text-white relative transform duration-500 hover:-translate-y-1 hover:cursor-pointer'>
                <div className='flex gap-3'>
                    <div>
                        <img src={index.companyIcon} alt={index.companyName} className="h-16 w-16 object-cover rounded-lg"/>
                    </div>
                    <div>
                        <div className=' text-lg font-bold'>{index.companyName}</div>
                        <div className='flex gap-1'>
                            <div className={"h-3 w-3 rounded-full my-auto " + (index.endDate ==="present"? "bg-emerald-500":"bg-red-500")}></div>
                            <div className='text-sm font-thin'>{index.position}</div>
                        </div>
                        <div className='text-xs text-emerald-500'>{index?.joiningDate} to {index?.endDate}</div>
                    </div>
                </div>
                <div className='p-3 bg-gray-300 dark:bg-gray-900 rounded-lg mt-3'>
                    {index?.description}
                </div>
            </div>
            )}
        </div>
  )
}

export default ExpCard
