'use client';
import React, { useState } from 'react';

const TransactionsMenu = () => {
    const [showPaymentForm, setShowPaymentForm] = useState(false);
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [formData, setFormData] = useState({ regno: '', amount: '' });
    
    const dues = [
        { id: 1, regno: "CS001", type: "Fine", amount: "₹500", status: "Pending" },
        { id: 2, regno: "CS001", type: "Room + Mess Fee", amount: "₹10,000", status: "Pending" },
        { id: 3, regno: "CS001", type: "Gym Fee", amount: "₹1,200", status: "Pending" }
    ];
    
    const history = [
        { id: 'TXI101', regno: "123456", type: "Fine", amount: "₹500", date: "2025-02-10" },
        { id: 'TXT101', regno: "789012", type: "Room + Mess Fee", amount: "₹10,000", date: "2025-02-08" }
    ];
    
    const openPaymentForm = (transaction) => {
        setSelectedTransaction(transaction);
        setFormData({ regno: transaction.regno, amount: transaction.amount });
        setShowPaymentForm(true);
    };
    
    const closePaymentForm = () => {
        setShowPaymentForm(false);
        setSelectedTransaction(null);
    };

    const confirmPayment = () => {
        if (selectedTransaction) {
            setDues(prevDues => prevDues.filter(due => due.id !== selectedTransaction.id));
            setHistory(prevHistory => [...prevHistory, { 
                id: `TX${selectedTransaction.id}`, 
                regno: selectedTransaction.regno, 
                type: selectedTransaction.type, 
                amount: selectedTransaction.amount, 
                date: new Date().toISOString().split('T')[0] 
            }]);
            closePaymentForm();
        }
    };
    
    return (
        <section className="p-6">
            <h1 className="text-3xl font-semibold mb-6">Transactions</h1>
            
            <h2 className="text-2xl font-medium mb-4">Dues</h2>
            <table className="w-full border border-gray-300 mb-6 text-center  rounded-xl">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border border-gray-300 px-4 py-1">Transaction ID</th>
                        <th className="border border-gray-300 px-4 py-1">Reg No</th>
                        <th className="border border-gray-300 px-4 py-1">Type</th>
                        <th className="border border-gray-300 px-4 py-1">Amount</th>
                        <th className="border border-gray-300 px-4 py-1">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {dues.map((due) => (
                        <tr key={due.id}>
                            <td className="border border-gray-300 px-4 py-1">{due.id}</td>
                            <td className="border border-gray-300 px-4 py-1">{due.regno}</td>
                            <td className="border border-gray-300 px-4 py-1">{due.type}</td>
                            <td className="border border-gray-300 px-4 py-1">{due.amount}</td>
                            <td className="border border-gray-300 px-4 py-1">
                                <button 
                                    className="bg-blue-200 text-blue-500 px-4 py-1 rounded hover:bg-blue-300"
                                    onClick={() => openPaymentForm(due)}
                                >Pay Now</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            <h2 className="text-2xl font-medium mb-4">Transaction History</h2>
            <table className="w-full border border-gray-300 rounded-xl text-center">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">Transaction ID</th>
                        <th className="border border-gray-300 px-4 py-2">Reg No</th>
                        <th className="border border-gray-300 px-4 py-2">Type</th>
                        <th className="border border-gray-300 px-4 py-2">Amount</th>
                        <th className="border border-gray-300 px-4 py-2">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((transaction) => (
                        <tr key={transaction.id}>
                            <td className="border border-gray-300 px-4 py-4">{transaction.id}</td>
                            <td className="border border-gray-300 px-4 py-4">{transaction.regno}</td>
                            <td className="border border-gray-300 px-4 py-4">{transaction.type}</td>
                            <td className="border border-gray-300 px-4 py-4">{transaction.amount}</td>
                            <td className="border border-gray-300 px-4 py-4">{transaction.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            {showPaymentForm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-hidden h-screen">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-semibold mb-4">Confirm Payment</h2>
                        <label className="block text-gray-700 font-medium mb-2">Reg No</label>
                        <input
                            type="text"
                            value={formData.regno}
                            readOnly
                            className="w-full p-3 border border-gray-300 rounded-lg mb-4 bg-gray-100"
                        />
                        <label className="block text-gray-700 font-medium mb-2">Amount</label>
                        <input
                            type="text"
                            value={formData.amount}
                            readOnly
                            className="w-full p-3 border border-gray-300 rounded-lg mb-4 bg-gray-100"
                        />
                        <div className="flex justify-between mt-4">
                            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Confirm</button>
                            <button onClick={closePaymentForm} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default TransactionsMenu;