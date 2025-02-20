'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const StudentDatabase = () => {
    const [search, setSearch] = useState('');
    const [floorFilter, setFloorFilter] = useState('');
    const [blockFilter, setBlockFilter] = useState('A');
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [students, setStudents] = useState([
        { 
            id: 1, name: 'Rahul Sharma', registrationNumber: 'VIT12345', year: '2nd', 
            dateOfBirth: '2002-05-14', email: 'rahul@example.com', phoneNumber: '9876543210', 
            parentPhoneNumber: '9123456789', gender: 'Male', homeTown: 'Delhi', room: '101', 
            block: 'A', isInGym: true, messtype: ['Veg'], role: 'student'
        },
        { 
            id: 2, name: 'Priya Singh', registrationNumber: 'VIT12346', year: '3rd', 
            dateOfBirth: '2001-09-20', email: 'priya@example.com', phoneNumber: '9876543221', 
            parentPhoneNumber: '9123456799', gender: 'Female', homeTown: 'Mumbai', room: '202', 
            block: 'B', isInGym: false, messtype: ['Non-Veg'], role: 'student'
        }
    ]);

    const handleCancelAllotment = (id) => {
        setStudents(students.filter(student => student.id !== id));
    };

    const handleViewStudent = (student) => {
        setSelectedStudent(student);
    };

    const handleCloseModal = () => {
        setSelectedStudent(null);
    };

    const filteredStudents = students.filter(student => 
        (student.name.toLowerCase().includes(search.toLowerCase()) ||
        student.registrationNumber.includes(search)) &&
        (floorFilter === '' || student.room.startsWith(floorFilter)) &&
        (blockFilter === '' || student.block === blockFilter)
    );

    return (
        <div className="p-6 flex flex-col items-center">
            <h1 className="text-3xl font-semibold mb-6">Student Database</h1>
            <div className="mb-4 flex gap-4">
                <input 
                    type="text" 
                    placeholder="Search by name or reg no." 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)}
                    className="p-2 border rounded-lg"
                />
                <select 
                    value={floorFilter} 
                    onChange={(e) => setFloorFilter(e.target.value)}
                    className="p-2 border rounded-lg"
                >
                    <option value="">All Floors</option>
                    <option value="1">1st Floor</option>
                    <option value="2">2nd Floor</option>
                    <option value="3">3rd Floor</option>
                </select>
                <select 
                    value={blockFilter} 
                    onChange={(e) => setBlockFilter(e.target.value)}
                    className="p-2 border rounded-lg"
                >
                    <option value="A">Block A</option>
                    <option value="B">Block B</option>
                    <option value="C">Block C</option>
                </select>
            </div>
            <table className="min-w-full bg-white border rounded-lg">
                <thead className="bg-gray-100">
                    <tr>
                        {['Name', 'Reg No', 'Year', 'Room', 'Block', 'Gym Access', 'Actions'].map(header => (
                            <th key={header} className="px-4 py-2 text-left font-medium text-gray-600">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {filteredStudents.map(student => (
                        <tr key={student.id} className="border-b">
                            <td className="px-4 py-2">{student.name}</td>
                            <td className="px-4 py-2">{student.registrationNumber}</td>
                            <td className="px-4 py-2">{student.year}</td>
                            <td className="px-4 py-2">{student.room}</td>
                            <td className="px-4 py-2">{student.block}</td>
                            <td className="px-4 py-2">{student.isInGym ? 'Yes' : 'No'}</td>
                            <td className="px-4 py-2 relative">
                                <div className="group inline-block relative">
                                    <Menu className="w-6 h-6 cursor-pointer" />
                                    <div className="hidden group-hover:block absolute right-0 mt-1 w-32 bg-white border rounded shadow-lg z-10">
                                        <button onClick={() => handleViewStudent(student)} className="block w-full text-left px-4 py-2 hover:bg-gray-200">View</button>
                                        <button onClick={() => handleCancelAllotment(student.id)} className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-200">Cancel</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {selectedStudent && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg w-96 relative">
                        <button onClick={handleCloseModal} className="absolute top-2 right-2">
                            <X className="w-6 h-6 text-gray-600" />
                        </button>
                        <h2 className="text-2xl font-semibold mb-4">Student Details</h2>
                        <p><strong>Name:</strong> {selectedStudent.name}</p>
                        <p><strong>Reg No:</strong> {selectedStudent.registrationNumber}</p>
                        <p><strong>Email:</strong> {selectedStudent.email}</p>
                        <p><strong>Phone:</strong> {selectedStudent.phoneNumber}</p>
                        <p><strong>Parent's Phone:</strong> {selectedStudent.parentPhoneNumber}</p>
                        <p><strong>Room:</strong> {selectedStudent.room}</p>
                        <p><strong>Block:</strong> {selectedStudent.block}</p>
                        <p><strong>Gym Access:</strong> {selectedStudent.isInGym ? 'Yes' : 'No'}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StudentDatabase;