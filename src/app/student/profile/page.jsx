'use client';

import { MailIcon, PhoneIcon, HomeIcon, BedDoubleIcon, UsersIcon, CalendarIcon, ClipboardListIcon, AlertTriangleIcon, DollarSignIcon } from 'lucide-react';
import React from 'react';

const ProfileField = ({ label, value, icon: Icon }) => (
    <div className="flex items-center bg-white p-4 rounded-lg shadow-md border-2 border-gray-300">
        <Icon size={24} className="text-gray-700 mr-3" />
        <div>
            <p className="text-gray-500 text-sm">{label}</p>
            <p className="text-gray-800 text-lg font-medium">{value}</p>
        </div>
    </div>
);



const ProfilePage = () => {
    const student = {
        name: 'John Doe',
        registrationNumber: 'VST-001',
        year: '3rd Year',
        dateOfBirth: '12-12-2000',
        email: 'john.doe@example.com',
        phoneNumber: '+1234567890',
        parentNumber: '+0987654321',
        homeTown: 'New York',
        room: '101',
        block: 'A',
        messtype: ['Vegetarian'],
        pending_fees: [],
        complaints: [],
        attendance: []
    }

    return (
        <main className="">
            {/* Profile Header */}
            <div className="w-full bg-black text-white p-6 rounded-xl shadow-lg text-center">
                <h1 className="text-3xl font-semibold">{student.name}</h1>
                <p className="text-gray-300 text-lg">Registration No: {student.registrationNumber}</p>
            </div>

            {/* Profile Information */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProfileField label="Year" value={student.year} icon={UsersIcon} />
                <ProfileField label="Date of Birth" value={student.dateOfBirth} icon={CalendarIcon} />
                <ProfileField label="Email" value={student.email} icon={MailIcon} />
                <ProfileField label="Phone Number" value={student.phoneNumber} icon={PhoneIcon} />
                <ProfileField label="Parent's Number" value={student.parentNumber} icon={PhoneIcon} />
                <ProfileField label="Hometown" value={student.homeTown} icon={HomeIcon} />
                <ProfileField label="Room" value={student.room} icon={BedDoubleIcon} />
                <ProfileField label="Block" value={student.block} icon={HomeIcon} />
                <ProfileField label="Mess Type" value={student.messtype.join(', ')} icon={UsersIcon} />
                <ProfileField label="Pending Fees" value={student.pending_fees.length} icon={DollarSignIcon} />
                <ProfileField label="Complaints" value={student.complaints.length} icon={AlertTriangleIcon} />
                <ProfileField label="Attendance Records" value={student.attendance.length} icon={ClipboardListIcon} />
            </div>
        </main>
    );
};

export default ProfilePage;
