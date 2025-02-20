
import React from 'react'
import { BedDoubleIcon, HomeIcon, UtensilsIcon, GraduationCapIcon, MailWarningIcon, Database, CalendarFoldIcon, LucideLogOut } from 'lucide-react'
import Link from 'next/link';

const Card = ({ title, count, icon: Icon }) => {
    return (
        <div className='bg-white rounded-2xl p-6 border border-gray-300 shadow-lg text-center w-full flex flex-col items-center hover:scale-105 transition-transform duration-300'>
            {Icon && <Icon size={50} className="text-blue-500 mb-3" />}
            <h1 className='text-xl md:text-2xl font-bold text-gray-900'>
                {title}
            </h1>
            <p className='text-gray-600 text-lg md:text-xl font-medium'>
                {count}
            </p>
        </div>
    );
}

const QuickActions = () => {

    const quick_links = [
        {
            title: 'Database',
            icon: Database,
            href: '/admin/student_database'
        },
        {
            title: 'Feedback',
            icon: CalendarFoldIcon
            ,
            href: '/admin/feedbacks'
        },
        {
            title: 'Leave',
            icon: LucideLogOut
            ,
            href: '/admin/leave_applications'
        }
    ]

    return (
        <div className='flex justify-center items-center mt-6 flex-col'>
            <h1 className='text-center md:text-left font-bold mt-6 text-gray-900 flex items-center gap-3 text-2xl mb-6'>
                Quick Actions
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full'>
                {quick_links.map((link, index) => (
                    <Link href={link.href} key={index}>
                        <Card title={link.title} icon={link.icon} />
                    </Link>
                ))}
            </div>
        </div>
    );
}


const getDashboard = () => {
    return (
        <>
            <main className='p-4'>
                <Link href='/admin/profile'>
                <div className='w-full rounded-3xl border border-gray-300 text-white bg-gradient-to-r from-gray-900 to-gray-800 p-8 shadow-xl text-center hover:scale-102 transition-transform duration-300'>
                    <h1 className='text-3xl md:text-5xl font-extrabold mt-12'>
                        Welcome Student!
                    </h1>
                    <p className='text-gray-300 text-lg md:text-2xl font-medium mt-3'>
                        Manage your hostel stay, attendance, and complaints easily.
                    </p>
                </div>
                </Link>
            </main>
            <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-8'>
                <Card title='Block' count='A-1' icon={HomeIcon} />
                <Card title='Students' count='30' icon={GraduationCapIcon} />
                <Card title='Complaints' count='4' icon={MailWarningIcon} />
            </div>
            <div>
                <QuickActions />
            </div>
        </>
    )
}

export default getDashboard