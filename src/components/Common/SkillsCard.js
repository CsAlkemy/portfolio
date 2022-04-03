import React from 'react'

const technicalIcon = (props) => {
    return (
    <>
        <div className='grid grid-cols-3 md:grid-cols-4 gap-3 px-4 md:px-7 py-3 mx-3 md:mx-0'>
            {props.Data.map((index)=>
            <div key={index.name} className='p-6 bg-black rounded-lg border-2 border-emerald-500'>
                <img src={index.icon} alt={index.name} className="object-cover"/>
            </div>
            )}
        </div>
    </>
  )
}

export default technicalIcon