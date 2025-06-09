import React from 'react';

type Transaction = {
    id: string;
    date: string;
    description: string;
    amount: number;
    currency: string;
    status: 'completed' | 'pending' | 'failed';
};

const transactions: Transaction[] = [
    {
        id: 'tx1',
        date: '2025-06-08T14:32:00Z',
        description: 'Payment received - Freelance project',
        amount: 1200,
        currency: 'USD',
        status: 'completed',
    },
    {
        id: 'tx2',
        date: '2025-06-07T10:15:00Z',
        description: 'Sent payment - Grocery shopping',
        amount: -150,
        currency: 'USD',
        status: 'completed',
    },
    {
        id: 'tx3',
        date: '2025-06-06T08:45:00Z',
        description: 'Pending transfer to Savings',
        amount: -500,
        currency: 'USD',
        status: 'pending',
    },
    {
        id: 'tx4',
        date: '2025-06-05T16:00:00Z',
        description: 'Payment failed - Utility bill',
        amount: -120,
        currency: 'USD',
        status: 'failed',
    },
];

function formatDate(dateStr: string) {
    const date = new Date(dateStr);
    return date.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
}

export default function RecentTransactions() {
    if (transactions.length === 0) {
        return (
            <div className="text-center py-10 text-gray-500">
                No recent transactions found.
            </div>
        );
    }

    return (
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="w-full min-w-[600px] divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                            Date
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                            Description
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                            Amount
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {transactions.map(({ id, date, description, amount, currency, status }) => {
                        const isCredit = amount > 0;
                        const amountColor = isCredit ? 'text-green-600' : 'text-red-600';
                        const statusColor =
                            status === 'completed'
                                ? 'text-green-600'
                                : status === 'pending'
                                    ? 'text-yellow-500'
                                    : 'text-red-600';

                        return (
                            <tr key={id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {formatDate(date)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                    {description}
                                </td>
                                <td
                                    className={`px-6 py-4 whitespace-nowrap text-sm font-semibold text-right ${amountColor}`}
                                >
                                    {isCredit ? '+' : '-'} {currency} {Math.abs(amount).toFixed(2)}
                                </td>
                                <td
                                    className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-center ${statusColor}`}
                                >
                                    {status.charAt(0).toUpperCase() + status.slice(1)}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
