'use client';

import { useState } from 'react';

const GymFacility = () => {
    const [requests, setRequests] = useState([
        { id: 1, regNo: '123456', name: 'John Doe', slot: '6:00 AM - 7:00 AM', status: 'Pending' },
        { id: 2, regNo: '654321', name: 'Jane Smith', slot: '7:00 PM - 8:00 PM', status: 'Approved' }
    ]);
    
    const [name, setName] = useState('');
    const [regNo, setRegNo] = useState('');
    const [slot, setSlot] = useState('6:00 AM - 7:00 AM');

    const handleRequest = () => {
        if (!name || !regNo) return;
        const newRequest = {
            id: requests.length + 1,
            regNo,
            name,
            slot,
            status: 'Pending'
        };
        setRequests([...requests, newRequest]);
        setName('');
        setRegNo('');
    };

    const updateStatus = (id, newStatus) => {
        setRequests(requests.map(req => req.id === id ? { ...req, status: newStatus } : req));
    };

    return (
        <div className="flex flex-col items-center justify-center p-6">
            <h1 className="text-3xl font-semibold mb-6 text-gray-800">Gym Facility Requests</h1>
            
            <div className="mb-4 w-full max-w-md p-4 bg-gray-100 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-2">Request a Gym Slot</h2>
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 mb-2 border rounded-lg"
                />
                <input 
                    type="text" 
                    placeholder="Registration Number" 
                    value={regNo} 
                    onChange={(e) => setRegNo(e.target.value)}
                    className="w-full p-2 mb-2 border rounded-lg"
                />
                <select 
                    value={slot} 
                    onChange={(e) => setSlot(e.target.value)}
                    className="w-full p-2 mb-2 border rounded-lg"
                >
                    <option value="6:00 AM - 7:00 AM">6:00 AM - 7:00 AM</option>
                    <option value="7:00 PM - 8:00 PM">7:00 PM - 8:00 PM</option>
                </select>
                <button 
                    onClick={handleRequest}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full"
                >
                    Request Slot
                </button>
            </div>
            
            <div className="w-full bg-white rounded-lg shadow-md p-4">
                <h2 className="text-xl font-semibold mb-4">Pending Requests</h2>
                <ul>
                    {requests.map(request => (
                        <li key={request.id} className="p-3 border-b flex justify-between items-center">
                            <div>
                                <h3 className="font-bold text-lg">{request.name} ({request.regNo})</h3>
                                <p className="text-gray-600">Slot: {request.slot}</p>
                                <p className="text-sm text-gray-500">Status: {request.status}</p>
                            </div>
                            {request.status === 'Pending' && (
                                <div>
                                    <button 
                                        onClick={() => updateStatus(request.id, 'Approved')}
                                        className="px-3 py-1 bg-green-500 text-white rounded-lg mr-2 hover:bg-green-600"
                                    >Approve</button>
                                    <button 
                                        onClick={() => updateStatus(request.id, 'Rejected')}
                                        className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                    >Reject</button>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default GymFacility;