import React from 'react'

const technicalIcon = (props) => {
    return (
    <>
        <div className='grid grid-cols-3 md:grid-cols-5 gap-3 px-4 md:px-7 py-3 mx-3 md:mx-0'>
            {props.Data.map((index)=>
            <div key={index.id} className='p-6 bg-black rounded-lg border-2 border-emerald-500 relative transform duration-500 hover:-translate-y-1 hover:cursor-pointer hover:bg-gray-900'>
                <img src={index.icon} alt={index.name} className={index.name === 'Tailwind CSS' ? 'rounded-full object-cover':'object-cover'}/>
            </div>
            )}
        </div>
    </>
  )
}

export default technicalIcon