'use client';

import { useState } from 'react';

const ComplaintsPage = () => {
    const [complaints, setComplaints] = useState([
        { id: 1, regNo: '21BCE1234', complaintType: 'Hostel Issue', description: 'Room AC not working.', date: '2025-02-16', status: 'Pending' },
        { id: 2, regNo: '21BCE5678', complaintType: 'Mess Food', description: 'Food quality is very bad.', date: '2025-02-15', status: 'Pending' },
        { id: 3, regNo: '21BCE9101', complaintType: 'Academics', description: 'Professor not explaining topics properly.', date: '2025-02-14', status: 'Resolved' }
    ]);

    const handleResolve = (id) => {
        setComplaints(prev => prev.map(c => c.id === id ? { ...c, status: 'Resolved' } : c));
    };

    const handleDelete = (id) => {
        setComplaints(prev => prev.filter(c => c.id !== id));
    };

    return (
        <div className="flex flex-col items-center justify-center p-6">
            <h1 className="text-3xl font-semibold mb-6 text-gray-800">Student Complaints</h1>
            <div className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            {['Reg No', 'Complaint Type', 'Description', 'Date', 'Status', 'Actions'].map(header => (
                                <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {complaints.map(complaint => (
                            <tr key={complaint.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm text-gray-900">{complaint.regNo}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{complaint.complaintType}</td>
                                <td className="px-6 py-4 text-sm text-gray-500 max-w-[300px] truncate">{complaint.description}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">{complaint.date}</td>
                                <td className={`px-6 py-4 text-sm font-semibold ${complaint.status === 'Resolved' ? 'text-green-600' : 'text-red-600'}`}>{complaint.status}</td>
                                <td className="px-6 py-4 text-sm space-x-2">
                                    {complaint.status !== 'Resolved' && (
                                        <button onClick={() => handleResolve(complaint.id)} className="px-3 py-1 bg-blue-500 text-white rounded-lg">Resolve</button>
                                    )}
                                    <button onClick={() => handleDelete(complaint.id)} className="px-3 py-1 bg-red-500 text-white rounded-lg">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ComplaintsPage;