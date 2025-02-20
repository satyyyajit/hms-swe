'use client'
import React from 'react'

const AuthStudent = () => {
    return (
        <>
            <div className='flex justify-center items-center h-screen'>
                <div className='bg-white rounded-2xl p-6 border border-gray-300 shadow-lg text-center w-full flex flex-col items-center hover:scale-105 transition-transform duration-300  max-w-xs'>
                    <h1 className='text-xl md:text-2xl font-bold text-gray-900'>
                        Student Login
                    </h1>
                    <form className='mt-6 w-full'>
                        <input
                            type='username'
                            placeholder='username'
                            className='w-full h-10 p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500'
                        />
                        <input
                            type='password'
                            name='password'
                            placeholder='Password'
                            className='w-full h-10 p-3 border border-gray-300 rounded-lg outline-none mt-4 focus:border-blue-500'
                        />
                        <button className='w-full bg-blue-100 text-blue-400 p-3 rounded-lg mt-4 hover:bg-blue-200 transition-colors duration-300'>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AuthStudent