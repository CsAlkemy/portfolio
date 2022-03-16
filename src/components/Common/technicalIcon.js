import React from 'react'

const technicalIcon = (props) => {
    console.log(props.Data)
    return (
    <>
        <div className='grid grid-cols-3 md:grid-cols-4 gap-3 px-4 md:px-7 py-3 mx-3 md:mx-0'>
            {props.Data.map((index)=>
            <div className='p-6 bg-black rounded-md'>
                <img src={index.icon} alt={index.name} className="object-cover rounded-full"/>
            </div>
            )}
        </div>
    </>
  )
}

export default technicalIcon