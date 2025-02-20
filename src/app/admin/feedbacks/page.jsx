'use client';

const getFeedbacks = ({ feedbacks = sampleFeedbacks }) => {
    return(
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-semibold mb-6 text-gray-800">Hostel Feedback</h1>
            <div className="w-full bg-white">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                        <tr>
                            {['Reg No', 'Feedback Type', 'Description', 'Date'].map(header => (
                                <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {feedbacks.map(feedback => (
                            <tr key={feedback.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm text-gray-900">{feedback.regNo}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{feedback.feedbackType}</td>
                                <td className="px-6 py-4 text-sm text-gray-500 truncate max-w-[300px]">{feedback.feedback_description}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">{new Date(feedback.createdAt).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// Sample Data
const sampleFeedbacks = [
    { id: 1, regNo: '21BCE1234', feedbackType: 'Positive', feedback_description: 'Great teaching methods!', createdAt: '2025-02-15T12:00:00Z' },
    { id: 2, regNo: '21BCE5678', feedbackType: 'Negative', feedback_description: 'Needs more practical examples.', createdAt: '2025-02-14T14:30:00Z' },
    { id: 3, regNo: '21BCE9101', feedbackType: 'Neutral', feedback_description: 'Good, but could be improved.', createdAt: '2025-02-13T10:15:00Z' }
];

export default getFeedbacks;

// Example Usage: <getFeedbacks feedbacks={sampleFeedbacks} />
