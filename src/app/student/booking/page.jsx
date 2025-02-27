'use client';

import { useState } from 'react';
import { BookOpenIcon, CheckCircleIcon, XCircleIcon } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

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
        HostelBlock: 'Block A',
        maxOccupancy: 4,
        occupied: 3,
    },
    {
        id: 3,
        roomNumber: '201',
        type: '2',
        HostelBlock: 'Block B',
        maxOccupancy: 2,
        occupied: 0,
    },
    {
        id: 4,
        roomNumber: '202',
        type: '4',
        HostelBlock: 'Block B',
        maxOccupancy: 4,
        occupied: 2,
    },
];

const StudentRequestForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        studentId: '',
        email: '',
        gender: 'Male', // Default to Male
        preferredRoom: '',
        bedType: '', // 2-bed or 4-bed
        messType: 'Vegetarian', // Default to Vegetarian
    });

    const [submitted, setSubmitted] = useState(false);
    const [paymentConfirmed, setPaymentConfirmed] = useState(false);

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
        toast.success('Request submitted successfully!');
    };

    const handleConfirmPayment = () => {
        // Simulate payment confirmation
        console.log('Payment confirmed for:', formData);
        router.push('/student/transactions');
        // setPaymentConfirmed(true);
        toast.success('Payment confirmed! Room allocated.');
    };

    // Filter rooms based on gender and bed type
    const filteredRooms = sampleRooms.filter((room) => {
        if (formData.gender === 'Male') {
            return room.HostelBlock === 'Block A' && room.type === formData.bedType;
        } else {
            return room.type === formData.bedType; // Female students can choose any block
        }
    });

    return (
        <main className="p-6">
            <h1 className="text-2xl font-semibold mb-4 flex items-center">
                <BookOpenIcon className="mr-2" /> Room Request Form
            </h1>

            <ToastContainer />

            {submitted ? (
                paymentConfirmed ? (
                    <div className="bg-green-100 text-green-600 p-4 rounded-md">
                        <CheckCircleIcon className="inline mr-2" />
                        Room allocated successfully! Welcome to the hostel.
                    </div>
                ) : (
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">Confirm Payment</h2>
                        <p className="text-gray-600 mb-4">
                            Please confirm your payment to complete the room allocation process.
                        </p>
                        <button
                            onClick={handleConfirmPayment}
                            className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 flex items-center justify-center"
                        >
                            <CheckCircleIcon className="mr-2" /> Confirm Payment in Transactions
                        </button>
                    </div>
                )
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

                    {/* Gender */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Gender</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="p-2 border rounded-md w-full"
                            required
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>

                    {/* Bed Type */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Bed Type</label>
                        <select
                            name="bedType"
                            value={formData.bedType}
                            onChange={handleChange}
                            className="p-2 border rounded-md w-full"
                            required
                        >
                            <option value="" disabled>Select bed type</option>
                            <option value="2">2-bed</option>
                            <option value="4">4-bed</option>
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

                    {/* Preferred Room */}
                    {formData.bedType && (
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
                                {filteredRooms.map((room) => (
                                    <option key={room.id} value={room.roomNumber}>
                                        {room.roomNumber} ({room.type}-bed, {room.HostelBlock})
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}

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