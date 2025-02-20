'use client';

import { useState } from 'react';

const GymFacility = () => {
    const [isBooked, setIsBooked] = useState(false);
    const subscriptionId = "GYM-2025-00123";

    return (
        <div className="flex flex-col items-center justify-center p-6">
            <h1 className="text-3xl font-semibold mb-6">Gym Facility</h1>
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg border border-gray-300">
                {isBooked ? (
                    <div className="text-center">
                        <h2 className="text-xl font-semibold mb-2">You are already subscribed!</h2>
                        <p className="text-gray-600">Subscription ID: <span className="font-bold text-blue-600">{subscriptionId}</span></p>
                    </div>
                ) : (
                    <form className="space-y-4">
                        <label className="block text-gray-700 font-medium">Full Name</label>
                        <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" required />
                        
                        <label className="block text-gray-700 font-medium">Student ID</label>
                        <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your student ID" required />
                        
                        <label className="block text-gray-700 font-medium">Preferred Time Slot</label>
                        <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="morning">Morning (6 AM - 10 AM)</option>
                            <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                            <option value="evening">Evening (6 PM - 10 PM)</option>
                        </select>
                        
                        <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all">Book Now</button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default GymFacility;
