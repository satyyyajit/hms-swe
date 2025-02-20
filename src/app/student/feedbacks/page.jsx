'use client';


const Feedback = () => {
    return (
        <div className="flex flex-col items-center justify-center  p-6">
            <h1 className="text-3xl font-semibold mb-6">Submit Your Feedback</h1>
            <form className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg transform transition-transform duration-300 ease-in-out hover:scale-105 border border-gray-300">
                <label className="block text-gray-700 font-medium mb-2">Feedback Type</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4">
                    <option value="feedback-type">Feedback Type</option>
                    <option value="mess">Mess</option>
                    <option value="gym">Gym</option>
                    <option value="room">Room</option>
                    <option value="hostel">Overall Hostel</option>
                </select>
                
                <label className="block text-gray-700 font-medium mb-2">Your Feedback</label>
                <textarea className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-32 mb-4" placeholder="Write your feedback here..."></textarea>
                
                <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all">Submit</button>
            </form>
        </div>
    );
}

export default Feedback;
