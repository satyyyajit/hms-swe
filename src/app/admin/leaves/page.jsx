'use client';

import { useState } from 'react';

const StatusBadge = ({ status }) => {
    const statusColors = {
        'Approved': 'bg-green-100 text-green-800',
        'Pending': 'bg-yellow-100 text-yellow-800',
        'Rejected': 'bg-red-100 text-red-800'
    };
    return <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>{status}</span>;
};

const LeaveRequests = ({ previousLeaves, handleApproval }) => {
    return (
        <div className="mt-8 w-full bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">Leave Requests</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                        <tr>
                            {['Reg', 'Name', 'Phone', "Parent's Phone", 'Place', 'Reason', 'Start', 'End', 'Status', 'Action'].map(header => (
                                <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {previousLeaves.map(leave => (
                            <tr key={leave.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm text-gray-900">{leave.registrationNo}</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">{leave.name}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">{leave.phoneNumber}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">{leave.parentPhoneNumber}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">{leave.place}</td>
                                <td className="px-6 py-4 text-sm text-gray-500 truncate max-w-[150px]">{leave.reason}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">{leave.startDate} {leave.startTime}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">{leave.endDate} {leave.endTime}</td>
                                <td className="px-6 py-4"><StatusBadge status={leave.status} /></td>
                                <td className="px-6 py-4">
                                    {leave.status === "Pending" && (
                                        <div className="flex gap-2">
                                            <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600" onClick={() => handleApproval(leave.id, "Approved")}>Approve</button>
                                            <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600" onClick={() => handleApproval(leave.id, "Rejected")}>Reject</button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

function LeaveForm() {
    const [formData, setFormData] = useState({
        name: '', registrationNo: '', phoneNumber: '', parentPhoneNumber: '', place: '', reason: '', startDate: '', endDate: '', startTime: '', endTime: ''
    });
    const [previousLeaves, setPreviousLeaves] = useState([]);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setPreviousLeaves(prev => [...prev, { ...formData, id: prev.length + 1, status: "Pending" }]);
        setFormData({ name: '', registrationNo: '', phoneNumber: '', parentPhoneNumber: '', place: '', reason: '', startDate: '', endDate: '', startTime: '', endTime: '' });
    };
    
    const handleApproval = (id, status) => {
        setPreviousLeaves(prevLeaves => prevLeaves.map(leave => leave.id === id ? { ...leave, status } : leave));
    };
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-semibold mb-6 text-gray-800">Leave Application</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 w-full  border border-gray-300 text-sm">
                <h2 className="text-xl font-semibold mb-4">Apply for Leave</h2>
                {['name', 'registrationNo', 'phoneNumber', 'parentPhoneNumber', 'place', 'reason', 'startDate', 'startTime', 'endDate', 'endTime'].map((field, idx) => (
                    <div key={idx} className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2 capitalize">{field.replace(/([A-Z])/g, ' $1').trim()}</label>
                        <input type={field.includes('Date') ? 'date' : field.includes('Time') ? 'time' : 'text'} name={field} value={formData[field]} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`} required />
                    </div>
                ))}
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full">Submit</button>
            </form>
            <LeaveRequests previousLeaves={previousLeaves} handleApproval={handleApproval} />
        </div>
    );
}

export default LeaveForm;
