'use client';

import { useState } from 'react';

const addNotices = () => {
    const [notices, setNotices] = useState([
        { id: 1, title: 'Exam Schedule', description: 'The midterm exams will start from March 10.', date: '2025-02-10', time: '10:00 AM' },
        { id: 2, title: 'Holiday Notice', description: 'The college will remain closed on February 20.', date: '2025-02-08', time: '03:00 PM' }
    ]);
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const postNotice = () => {
        if (!title || !description) return;
        const newNotice = {
            id: notices.length + 1,
            title,
            description,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
        };
        setNotices([newNotice, ...notices]);
        setTitle('');
        setDescription('');
    };
    
    return (
        <div className="flex flex-col items-center justify-center p-6">
            <h1 className="text-3xl font-semibold mb-6 text-gray-800">Notices</h1>
            <div className="mb-6 w-full p-4 bg-white border-2 border-gray-300 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-2">Post a Notice</h2>
                <input 
                    type="text" 
                    placeholder="Title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 mb-2 border rounded-lg"
                />
                <textarea 
                    placeholder="Description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 mb-2 border rounded-lg"
                />
                <button 
                    onClick={postNotice}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full"
                >
                    Post Notice
                </button>
            </div>
            <div className="w-full bg-white ">
                <h2 className="text-xl font-semibold mb-4">Previous Notices</h2>
                <ul>
                    {notices.map(notice => (
                        <li key={notice.id} className="p-3 border-b">
                            <h3 className="font-bold text-lg">{notice.title}</h3>
                            <p className="text-gray-600">{notice.description}</p>
                            <p className="text-sm text-gray-500">Posted on: {notice.date} at {notice.time}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default addNotices;
