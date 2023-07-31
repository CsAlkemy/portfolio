import React from 'react'
import LogoWtv from '../../images/wtv.jpg'
import LogoFront from '../../images/frontPayment.png'
import LogoZap from '../../images/zaptwo.png'

const ExpCard = (props) => {
    const experienceCardData = [
        {
          id:1,
          companyName:"World Television",
          position:"Software Engineer",
          joiningDate:"Nov-20",
          endDate:"May-22",
            description:"Working on the Development of ConnectStudio and some web application for a streaming platform using NextJS, SCSS as part of global team of WtvGlobal UK.",
          companyIcon:LogoWtv
        },
        {
            id:2,
            companyName:"Front Payment (ELO)",
            position:"Software Engineer",
            joiningDate:"June-22",
            endDate:"present",
            description:"Developed FrontGo, that is built for the Norwegian market for financing, payment,& administration, preferably for small and medium-sized enterprises.",
            companyIcon:LogoFront
        },
        {
          id:3,
          companyName:"ZapTwo",
          position:"Software Engineer",
          joiningDate:"Mar-20",
          endDate:"Oct-21",
            description:"Architect and Developed Tourgo a web application for booking hotel rooms, and tour packages and offers using Node.js, MongoDB, pugJs, and, Typescript.",
          companyIcon:LogoZap
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