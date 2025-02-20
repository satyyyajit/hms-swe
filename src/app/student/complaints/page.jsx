'use client';

import React from 'react';


function Complaints() {
    const complaints = [
        { id: 1, type: "Room", description: "Leaking ceiling in room 101", status: "Pending" },
        { id: 2, type: "Mess", description: "Food quality needs improvement", status: "Resolved" },
        { id: 3, type: "Gym", description: "Broken treadmill needs repair", status: "In Progress" }
    ];

    return (
        <div className="flex flex-col items-center justify-center p-6">
            <h1 className="text-3xl font-semibold mb-6">Submit a Complaint</h1>
            <form className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg transform transition-transform duration-300 ease-in-out hover:scale-105 border border-gray-300">
                <label className="block text-gray-700 font-medium mb-2">Complaint Type</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 mb-4">
                    <option value="room">Room</option>
                    <option value="mess">Mess</option>
                    <option value="gym">Gym</option>
                    <option value="hostel">Overall Hostel</option>
                </select>
                
                <label className="block text-gray-700 font-medium mb-2">Complaint Description</label>
                <textarea className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 resize-none h-32 mb-4" placeholder="Describe your complaint..."></textarea>
                
                <button className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition-all">Submit</button>
            </form>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Your Complaints</h2>
            <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 shadow-lg rounded-lg overflow-hidden text-sm md:text-base">
                    <thead className="bg-gray-100">
                        <tr className="text-left text-gray-700">
                            <th className="border border-gray-300 px-4 py-3">Type</th>
                            <th className="border border-gray-300 px-4 py-3">Description</th>
                            <th className="border border-gray-300 px-4 py-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {complaints.map((complaint, index) => (
                            <tr key={complaint.id} className={`hover:bg-gray-50 transition-all ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}` }>
                                <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">{complaint.type}</td>
                                <td className="border border-gray-300 px-4 py-3 text-gray-600">{complaint.description}</td>
                                <td className={`border border-gray-300 px-4 py-3 font-semibold text-center ${complaint.status === 'Resolved' ? 'text-green-600' : complaint.status === 'In Progress' ? 'text-yellow-600' : 'text-red-600'}`}>{complaint.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Complaints;
