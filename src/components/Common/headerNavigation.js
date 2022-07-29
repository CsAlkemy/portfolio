import { Link } from 'gatsby'
import React from 'react'
import {BsArrowLeft } from 'react-icons/bs'

const headerNavigation = () => {
  return (
        <div className='w-full my-5'>
            <Link to='/' className='flex gap-3 text-emerald-500 text-lg items-center'>
                <BsArrowLeft  className='h-12 w-12'/>
                Back To Home
            </Link>
        </div>
  )
}

export default headerNavigation