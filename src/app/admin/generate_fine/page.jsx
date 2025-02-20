'use client'
import React, { useState } from 'react';

const GenerateFines = () => {
    const [fines, setFines] = useState([]);
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [reason, setReason] = useState('');

    const handleAddFine = () => {
        if (amount > 0 && amount < 1000) {
            setFines([...fines, { registrationNumber, amount, reason, status: 'Unpaid' }]);
            setRegistrationNumber('');
            setAmount('');
            setReason('');
        } else {
            alert('Amount must be between 1 and 999.');
        }
    };

    const handlePaymentStatus = (index) => {
        const updatedFines = fines.map((fine, i) => 
            i === index ? { ...fine, status: fine.status === 'Unpaid' ? 'Paid' : 'Unpaid' } : fine
        );
        setFines(updatedFines);
    };

    return (
        <div className="p-6 flex flex-col items-center">
            <h1 className="text-3xl font-semibold mb-6">Generate Fines</h1>
            <div className="mb-4 flex gap-4">
                <input 
                    type="text" 
                    placeholder="Registration Number" 
                    value={registrationNumber} 
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                    className="p-2 border rounded-lg"
                />
                <input 
                    type="number" 
                    placeholder="Amount" 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)}
                    className="p-2 border rounded-lg"
                />
                <input 
                    type="text" 
                    placeholder="Reason" 
                    value={reason} 
                    onChange={(e) => setReason(e.target.value)}
                    className="p-2 border rounded-lg"
                />
                <button onClick={handleAddFine} className="px-4 py-2 bg-blue-500 text-white rounded">Add Fine</button>
            </div>
            <table className="min-w-full bg-white border rounded-lg">
                <thead className="bg-gray-100">
                    <tr>
                        {['Reg No', 'Amount', 'Reason', 'Status', 'Actions'].map(header => (
                            <th key={header} className="px-4 py-2 text-left font-medium text-gray-600">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {fines.map((fine, index) => (
                        <tr key={index} className="border-b">
                            <td className="px-4 py-2">{fine.registrationNumber}</td>
                            <td className="px-4 py-2">{fine.amount}</td>
                            <td className="px-4 py-2">{fine.reason}</td>
                            <td className="px-4 py-2">{fine.status}</td>
                            <td className="px-4 py-2">
                                <button 
                                    onClick={() => handlePaymentStatus(index)}
                                    className={`px-3 py-1 ${fine.status === 'Unpaid' ? 'bg-red-500' : 'bg-green-500'} text-white rounded`}
                                >
                                    {fine.status === 'Unpaid' ? 'Mark Paid' : 'Mark Unpaid'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GenerateFines;
