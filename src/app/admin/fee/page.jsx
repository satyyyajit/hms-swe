'use client'

import React, { useState } from 'react';
import { Search } from 'lucide-react';

const transactions = [
    { id: 1, transactionId: 'TXN1001', name: 'Alice Johnson', reg: '23BCE7300', amount: 500, date: '2025-02-08', status: 'Completed', category: 'Hostel Fee' },
    { id: 2, transactionId: 'TXN1002', name: 'Bob Smith', reg: '23BCE7301', amount: 1200, date: '2025-02-09', status: 'Pending', category: 'Fine' },
    { id: 3, transactionId: 'TXN1003', name: 'Charlie Brown', reg: '23BCE7302', amount: 800, date: '2025-02-07', status: 'Failed', category: 'Hostel Fee' }
];

const StatusBadge = ({ status }) => {
    const statusColors = {
        'Completed': 'bg-green-100 text-green-800',
        'Pending': 'bg-yellow-100 text-yellow-800',
        'Failed': 'bg-red-100 text-red-800'
    };
    return <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>{status}</span>;
};

const TransactionPage = () => {
    const [filters, setFilters] = useState({ date: '', minAmount: '', maxAmount: '', reg: '' });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFilters((prev) => ({ ...prev, [id]: value }));
    };

    const filteredTransactions = transactions.filter(t => {
        const matchesDate = filters.date ? t.date === filters.date : true;
        const matchesMinAmount = filters.minAmount ? t.amount >= parseFloat(filters.minAmount) : true;
        const matchesMaxAmount = filters.maxAmount ? t.amount <= parseFloat(filters.maxAmount) : true;
        const matchesReg = filters.reg ? t.reg.includes(filters.reg) : true;
        return matchesDate && matchesMinAmount && matchesMaxAmount && matchesReg;
    });

    return (
        <div className=" bg-white">
            <h1 className="text-2xl font-bold mb-4">Transaction History</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <input type="date" id="date" value={filters.date} onChange={handleChange} className="p-2 border rounded-md" />
                <input type="number" id="minAmount" placeholder="Min Amount" value={filters.minAmount} onChange={handleChange} className="p-2 border rounded-md" />
                <input type="number" id="maxAmount" placeholder="Max Amount" value={filters.maxAmount} onChange={handleChange} className="p-2 border rounded-md" />
                <input type="text" id="reg" placeholder="Search by Reg No" value={filters.reg} onChange={handleChange} className="p-2 border rounded-md" />
            </div>
            
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                        <tr>
                            {['Transaction ID', 'Name', 'Reg No', 'Amount', 'Date', 'Category', 'Status'].map(header => (
                                <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {filteredTransactions.map(transaction => (
                            <tr key={transaction.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.transactionId}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{transaction.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.reg}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${transaction.amount}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.category}</td>
                                <td className="px-6 py-4 whitespace-nowrap"><StatusBadge status={transaction.status} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TransactionPage;
