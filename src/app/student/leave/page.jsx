'use client';
import { useState } from 'react';


const LeaveForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        place: '',
        reason: '',
        startDate: '',
        endDate: '',
        startTime: '',
        endTime: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your submission logic here
    };

    const previousLeaves = [
        { id: 1, name: "John Doe", place: "Hyderabad", reason: "Family Function", startDate: "2025-02-10", endDate: "2025-02-12", startTime: "08:00 AM", endTime: "10:00 PM", status: "Approved" },
        { id: 2, name: "Jane Smith", place: "Chennai", reason: "Medical Emergency", startDate: "2025-02-15", endDate: "2025-02-18", startTime: "07:00 AM", endTime: "08:00 PM", status: "Pending" }
    ];

    return (
        <div className="flex flex-col items-center justify-center p-6">
            <h1 className="text-3xl font-semibold mb-6">Leave Application</h1>
            
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 w-full border border-gray-300 text-sm">
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                    placeholder="Enter your name"
                />
                
                <label className="block text-gray-700 font-medium mb-2">Place</label>
                <input 
                    type="text"
                    name="place"
                    value={formData.place}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                    placeholder="Enter place"
                />
                
                <label className="block text-gray-700 font-medium mb-2">Reason</label>
                <textarea 
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg mb-4 resize-none h-20"
                    placeholder="Enter reason"
                ></textarea>
                
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Start Date</label>
                        <input 
                            type="date"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">End Date</label>
                        <input 
                            type="date"
                            name="endDate"
                            value={formData.endDate}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Start Time</label>
                        <input 
                            type="time"
                            name="startTime"
                            value={formData.startTime}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">End Time</label>
                        <input 
                            type="time"
                            name="endTime"
                            value={formData.endTime}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                    </div>
                </div>
                
                <button type="submit" className="mt-4 bg-blue-500 text-white p-3 rounded-lg w-full hover:bg-blue-600">Submit</button>
            </form>
            
            <div className="mt-8 w-full">
                <h2 className="text-2xl font-semibold mb-4">Previous Leaves</h2>
                <table className="w-full border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">Name</th>
                            <th className="border border-gray-300 px-4 py-2">Place</th>
                            <th className="border border-gray-300 px-4 py-2">Reason</th>
                            <th className="border border-gray-300 px-4 py-2">Start Date & Time</th>
                            <th className="border border-gray-300 px-4 py-2">End Date & Time</th>
                            <th className="border border-gray-300 px-4 py-2">Status</th>
                            <th className="border border-gray-300 px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {previousLeaves.map(leave => (
                            <tr key={leave.id}>
                                <td className="border border-gray-300 px-4 py-4">{leave.name}</td>
                                <td className="border border-gray-300 px-4 py-4">{leave.place}</td>
                                <td className="border border-gray-300 px-4 py-4">{leave.reason}</td>
                                <td className="border border-gray-300 px-4 py-4">{leave.startDate} {leave.startTime}</td>
                                <td className="border border-gray-300 px-4 py-4">{leave.endDate} {leave.endTime}</td>
                                <td className={`border border-gray-300 px-4 py-4 font-semibold ${leave.status === 'Approved' ? 'text-green-600' : 'text-yellow-600'}`}>{leave.status}</td>
                                <td className="border border-gray-300 px-4 py-4">
                                    {leave.status === 'Approved' && <a href="#" className="text-blue-600 font-semibold px-2 rounded bg-blue-200 py-2 hover:bg-blue-300">Download</a>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default LeaveForm;