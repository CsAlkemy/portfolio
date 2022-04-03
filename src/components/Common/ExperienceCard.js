import React from 'react'

const ExpCard = (props) => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 px-4 md:px-7 py-3 mx-3 md:mx-0'>
            {props.data.map((index)=>
            <div key={index.id} className='p-4 bg-black rounded-lg dark:text-white'>
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
                    </div>
                </div>
                <div className='p-3 bg-gray-900 rounded-lg mt-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, sapiente.
                </div>
            </div>
            )}
        </div>
  )
}

export default ExpCard