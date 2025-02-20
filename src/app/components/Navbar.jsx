'use client';

import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='z-50 w-full bg-white '>
        <div className='md:px-4 px-2 py-3 mx-auto flex justify-between items-center '>
            <h1 className='text-xl font-semibold text-gray-800'>VST</h1>
            <div className='flex items-center gap-4'>
                
                <Link className='bg-white font-medium text-gray-800 px-4 py-2 rounded-md hover:bg-gray-100 border-2 border-gray-300' href='/'>Logout</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar