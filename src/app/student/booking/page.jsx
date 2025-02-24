'use client';

import { useState } from 'react';
import { UserIcon, BookOpenIcon, CheckCircleIcon, XCircleIcon } from 'lucide-react';

// Sample Data for Rooms
const sampleRooms = [
    {
        id: 1,
        roomNumber: '101',
        type: '2',
        HostelBlock: 'Block A',
        maxOccupancy: 2,
        occupied: 1,
    },
    {
        id: 2,
        roomNumber: '102',
        type: '4',
        HostelBlock: 'Block B',
        maxOccupancy: 4,
        occupied: 3,
    },
];

const StudentRequestForm = () => {
    const [formData, setFormData] = useState({
        studentId: '',
        name: '',
        email: '',
        phone: '',
        preferredRoom: '',
        messType: 'Vegetarian',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        console.log('Form Data Submitted:', formData);
        setSubmitted(true);
    };

    return (
        <main className="p-6">
            <h1 className="text-2xl font-semibold mb-4 flex items-center">
                <BookOpenIcon className="mr-2" /> Room Request Form
            </h1>

            {submitted ? (
                <div className="bg-green-100 text-green-600 p-4 rounded-md">
                    <CheckCircleIcon className="inline mr-2" />
                    Your request has been submitted successfully!
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
                    {/* Student ID */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Student ID</label>
                        <input
                            type="text"
                            name="studentId"
                            value={formData.studentId}
                            onChange={handleChange}
                            className="p-2 border rounded-md w-full"
                            placeholder="Enter your Student ID"
                            required
                        />
                    </div>

                    {/* Name */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="p-2 border rounded-md w-full"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="p-2 border rounded-md w-full"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Phone */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="p-2 border rounded-md w-full"
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>

                    {/* Preferred Room */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Preferred Room</label>
                        <select
                            name="preferredRoom"
                            value={formData.preferredRoom}
                            onChange={handleChange}
                            className="p-2 border rounded-md w-full"
                            required
                        >
                            <option value="" disabled>Select a room</option>
                            {sampleRooms.map((room) => (
                                <option key={room.id} value={room.roomNumber}>
                                    {room.roomNumber} ({room.type}-bed, {room.HostelBlock})
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Mess Type */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Mess Type</label>
                        <select
                            name="messType"
                            value={formData.messType}
                            onChange={handleChange}
                            className="p-2 border rounded-md w-full"
                            required
                        >
                            <option value="Vegetarian">Vegetarian</option>
                            <option value="Non-Vegetarian">Non-Vegetarian</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 flex items-center justify-center"
                    >
                        <CheckCircleIcon className="mr-2" /> Submit Request
                    </button>
                </form>
            )}
        </main>
    );
};

export default StudentRequestForm;