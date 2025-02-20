'use client';

import { MailIcon, PhoneIcon, HomeIcon, CalendarIcon, UsersIcon, BriefcaseIcon, KeyIcon, ShieldIcon } from 'lucide-react';
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

const getAdminProfile = () => {
    const admin = {
        name: 'Jane Smith',
        empid: 'EMP-2025',
        email: 'jane.smith@example.com',
        address: '123 Admin Street, New York',
        phoneNumber: '+1234567890',
        dateOfBirth: '1985-07-15',
        yearJoined: 2015,
        role: ['Warden'],
        block: 'B',
        createdAt: '2020-08-10',
        updatedAt: '2024-02-14'
    };

    return (
        <main className="p-6">
            {/* Profile Header */}
            <div className="w-full bg-black text-white p-6 rounded-xl shadow-lg text-center">
                <h1 className="text-3xl font-semibold">{admin.name}</h1>
                <p className="text-gray-300 text-lg">Employee ID: {admin.empid}</p>
            </div>

            {/* Profile Information */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProfileField label="Email" value={admin.email} icon={MailIcon} />
                <ProfileField label="Phone Number" value={admin.phoneNumber} icon={PhoneIcon} />
                <ProfileField label="Date of Birth" value={admin.dateOfBirth} icon={CalendarIcon} />
                <ProfileField label="Year Joined" value={admin.yearJoined} icon={UsersIcon} />
                <ProfileField label="Role" value={admin.role.join(', ')} icon={ShieldIcon} />
                <ProfileField label="Block" value={admin.block} icon={HomeIcon} />
                <ProfileField label="Address" value={admin.address} icon={BriefcaseIcon} />
                <ProfileField label="Account Created" value={admin.createdAt} icon={KeyIcon} />
                <ProfileField label="Last Updated" value={admin.updatedAt} icon={KeyIcon} />
            </div>
        </main>
    );
};

export default getAdminProfile;
