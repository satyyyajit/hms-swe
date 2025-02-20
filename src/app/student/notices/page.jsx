'use client';


const NoticeBoard = () => {
    const notices = [
        { id: 1, date: "2025-02-09", time: "10:00 AM", title: "Maintenance Work", description: "Hostel maintenance will be conducted on 10th Feb from 9 AM to 5 PM." },
        { id: 2, date: "2025-02-08", time: "02:30 PM", title: "Mess Menu Update", description: "New mess menu will be implemented from next week." },
        { id: 3, date: "2025-02-07", time: "05:45 PM", title: "Gym Closure", description: "The gym will be closed for cleaning on 12th Feb." }
    ];

    return (
        <div className="flex flex-col items-center justify-center p-6">
            <h1 className="text-3xl font-semibold mb-6">Notice Board</h1>
            <div className="w-full space-y-4">
                {notices.map((notice) => (
                    <div key={notice.id} className="bg-white shadow-md rounded-lg p-4 border border-gray-300">
                        <p className="text-gray-500 text-sm">{notice.date} | {notice.time}</p>
                        <h2 className="text-xl font-semibold text-gray-800 mt-1">{notice.title}</h2>
                        <p className="text-gray-600 mt-2">{notice.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
    // how to add a new notice?
}

export default NoticeBoard;