'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AlertCircle, CheckCircle, Clock, ChevronDown, ChevronUp } from 'lucide-react';

function Complaints() {
    const [complaints, setComplaints] = useState([]);

    const [formData, setFormData] = useState({
        title: "",
        type: "",
        description: ""
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const [showComplaints, setShowComplaints] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form inputs
        if (!formData.title.trim() || !formData.type || !formData.description.trim()) {
            setError("Please fill out all fields.");
            return;
        }

        setError("");
        setSuccess("");
        setLoading(true);

        try {
            const response = await axios.post("/api/student/complaints", formData);
            console.log("Complaint submitted:", response.data);

            if (!response.data.success) {
                setError(response.data.message || "An error occurred while submitting the complaint. Please try again.");
                return;
            }

            setTimeout(() => setSuccess(""), 3000);

        } catch (err) {
            console.error("Error submitting complaint:", err);
            setError("An error occurred while submitting the complaint. Please try again.");
        } finally {
            setFormData({
                title: "",
                type: "",
                description: ""
            });
            setLoading(false);
        }
    };

    const token = localStorage.getItem("token");
    if (!token) {
        setError("You are not authorized to view this page.");
        return;
    }

    useEffect(() => {
        const getComplaints = async () => {
            try {
                const response = await axios.get("/api/student/complaints", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });


                console.log("Complaints:", response.data.data);

                if (!response.data.success) {
                    setError(response.data.message || "An error occurred while fetching complaints.");
                    return;
                }

                setComplaints(response.data.data);
            } catch (err) {
                console.error("Error fetching complaints:", err);
                setError("An error occurred while fetching complaints.");
            }
        }
        getComplaints();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
                    Complaint Management System
                </h1>

                {/* Form Section */}
                <div className="bg-white shadow-xl rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-6">Submit a New Complaint</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Title Field */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Complaint Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter a brief title"
                                required
                            />
                        </div>

                        {/* Complaint Type */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Complaint Type
                            </label>
                            <select
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                <option value="">Select a type</option>
                                <option value="room">Room</option>
                                <option value="mess">Mess</option>
                                <option value="gym">Gym</option>
                                <option value="hostel">Overall Hostel</option>
                            </select>
                        </div>

                        {/* Complaint Description */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Complaint Description
                            </label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-32"
                                placeholder="Describe your complaint in detail..."
                                required
                            ></textarea>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-50 border-l-4 border-red-500 p-4">
                                <div className="flex">
                                    <AlertCircle className="h-5 w-5 text-red-500" />
                                    <p className="ml-3 text-red-700">{error}</p>
                                </div>
                            </div>
                        )}

                        {/* Success Message */}
                        {success && (
                            <div className="bg-green-50 border-l-4 border-green-500 p-4">
                                <div className="flex">
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    <p className="ml-3 text-green-700">{success}</p>
                                </div>
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all disabled:bg-blue-400 disabled:cursor-not-allowed"
                            disabled={loading}
                        >
                            {loading ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Submitting...
                                </span>
                            ) : (
                                "Submit Complaint"
                            )}
                        </button>
                    </form>
                </div>

                {/* Toggle Button */}
                <button
                    onClick={() => setShowComplaints(!showComplaints)}
                    className="w-full mb-4 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-4 rounded-lg border border-gray-300 flex items-center justify-center gap-2 transition-all"
                >
                    {showComplaints ? (
                        <>
                            Hide Complaints <ChevronUp className="w-5 h-5" />
                        </>
                    ) : (
                        <>
                            Show Complaints <ChevronDown className="w-5 h-5" />
                        </>
                    )}
                </button>

                {/* Complaints Table */}
                {showComplaints && (
                    <div className="bg-white rounded-lg border-2 border-gray-200 p-4">
                        <h2 className="text-2xl font-semibold mb-6">Your Complaints</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {complaints.map((complaint) => (
                                        <tr key={complaint._id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {complaint.title}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {complaint.type}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                {complaint.description}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <span className={`flex items-center gap-2 ${complaint.status === 'Resolved' ? 'text-green-700' :
                                                        complaint.status === 'In Progress' ? 'text-yellow-600' :
                                                            'text-red-600'
                                                    }`}>

                                                    {complaint.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Complaints;