import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const AnalyticsOverview: React.FC<{ walletId: string | null }> = ({ walletId }) => {
  // Mock data - in a real app, this would come from an API
  const spendingData = [
    { name: 'Shopping', value: 400 },
    { name: 'Bills', value: 300 },
    { name: 'Entertainment', value: 200 },
    { name: 'Food', value: 200 },
  ];
  
  const monthlyData = [
    { month: 'Jan', income: 4000, expenses: 2400 },
    { month: 'Feb', income: 3000, expenses: 1398 },
    { month: 'Mar', income: 2000, expenses: 9800 },
    { month: 'Apr', income: 2780, expenses: 3908 },
    { month: 'May', income: 1890, expenses: 4800 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">Analytics Overview</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <div>
          <h3 className="text-md font-medium text-gray-700 mb-3">Spending Breakdown</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={spendingData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {spendingData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Bar Chart */}
        <div>
          <h3 className="text-md font-medium text-gray-700 mb-3">Monthly Summary</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="income" fill="#4ade80" name="Income" />
                <Bar dataKey="expenses" fill="#f87171" name="Expenses" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-sm text-green-600">Total Income</p>
          <p className="text-xl font-semibold text-green-800">$12,540</p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <p className="text-sm text-red-600">Total Expenses</p>
          <p className="text-xl font-semibold text-red-800">$8,230</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-600">Savings Rate</p>
          <p className="text-xl font-semibold text-blue-800">34%</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <p className="text-sm text-purple-600">Transactions</p>
          <p className="text-xl font-semibold text-purple-800">142</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsOverview;