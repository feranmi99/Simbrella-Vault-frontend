import React from 'react';

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'credit' | 'debit';
  category: string;
  status: 'completed' | 'pending' | 'failed';
}

const TransactionHistory: React.FC<{ walletId: string | null }> = ({ walletId }) => {
  // Mock data - in a real app, this would come from an API
  const transactions: Transaction[] = [
    {
      id: '1',
      date: '2023-06-15 10:30',
      description: 'Grocery Store',
      amount: 85.75,
      type: 'debit',
      category: 'Shopping',
      status: 'completed'
    },
    {
      id: '2',
      date: '2023-06-14 15:22',
      description: 'Salary Deposit',
      amount: 2500.00,
      type: 'credit',
      category: 'Income',
      status: 'completed'
    },
    {
      id: '3',
      date: '2023-06-12 09:15',
      description: 'Internet Bill',
      amount: 59.99,
      type: 'debit',
      category: 'Utilities',
      status: 'completed'
    },
    {
      id: '4',
      date: '2023-06-10 18:45',
      description: 'Dinner with Friends',
      amount: 120.50,
      type: 'debit',
      category: 'Food',
      status: 'completed'
    },
    {
      id: '5',
      date: '2023-06-08 11:20',
      description: 'Freelance Payment',
      amount: 750.00,
      type: 'credit',
      category: 'Income',
      status: 'completed'
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Transaction History</h2>
        <div className="flex space-x-2">
          <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
            <option>All Categories</option>
            <option>Shopping</option>
            <option>Income</option>
            <option>Utilities</option>
            <option>Food</option>
          </select>
          <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
            <option>Last 30 Days</option>
            <option>Last Week</option>
            <option>Last 3 Months</option>
            <option>Custom Range</option>
          </select>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(transaction.date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{transaction.description}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    {transaction.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    transaction.status === 'completed' ? 'bg-green-100 text-green-800' :
                    transaction.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {transaction.status}
                  </span>
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-right ${
                  transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.type === 'credit' ? '+' : '-'}${transaction.amount.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 flex justify-between items-center">
        <p className="text-sm text-gray-500">Showing 1 to 5 of 25 transactions</p>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50">
            Previous
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-blue-50 text-blue-600 border-blue-200">
            1
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
            2
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
            3
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;