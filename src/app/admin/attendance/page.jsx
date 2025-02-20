'use client'
import React, { useState } from 'react'

const ShowAttendance = () => {
    const [attendanceData, setAttendanceData] = useState([
        {
            id: 'CS231001',
            status: false,
            date: Date.now(),
            room: 101
        },
        {
            id: 'CS231002',
            status: false,
            date: Date.now(),
            room: 101
        },
        {
            id: 'CS231003',
            status: false,
            date: Date.now(),
            room: 102
        }
    ])

    // Add missing selectedRoom state
    const [selectedRoom, setSelectedRoom] = useState('all')

    // Calculate unique rooms for the select dropdown
    const uniqueRooms = [...new Set(attendanceData.map(data => data.room))]

    const markAttendance = (id) => {
        setAttendanceData(prevData => 
            prevData.map(student => 
                student.id === id 
                    ? { ...student, status: !student.status }
                    : student
            )
        )
    }

    const filteredAttendanceData = selectedRoom === 'all'
        ? attendanceData
        : attendanceData.filter(data => data.room === Number(selectedRoom))

    return (
        <div className='flex flex-col items-center justify-center p-6 bg-white rounded-lg mx-auto'>
            <div className='flex flex-row justify-between items-center w-full border-b pb-4'>
                <h1 className='text-2xl text-gray-800 font-bold'>
                    Attendance Log
                </h1>
                <div className='flex items-center gap-4'>
                    <select
                        value={selectedRoom}
                        onChange={(e) => setSelectedRoom(e.target.value)}
                        className='px-3 py-1 border rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    >
                        <option value="all">All Rooms</option>
                        {uniqueRooms.map(room => (
                            <option key={room} value={room}>Room {room}</option>
                        ))}
                    </select>
                    <p className='text-sm bg-blue-100 px-3 py-1 rounded-full text-blue-800 font-medium'>
                        {new Date().toLocaleDateString()}
                    </p>
                </div>
            </div>
            <div className='w-full mt-6'>
                <table className='w-full border-collapse'>
                    <thead className='bg-gray-50'>
                        <tr>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>ID</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Room</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Status</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white divide-y divide-gray-200'>
                        {filteredAttendanceData.map((data, index) => (
                            <tr key={data.id}>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{data.id}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>Room {data.room}</td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <button
                                        onClick={() => markAttendance(data.id)}
                                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                                            data.status 
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-red-100 text-red-800'
                                        }`}
                                    >
                                        {data.status ? 'Present' : 'Absent'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ShowAttendance