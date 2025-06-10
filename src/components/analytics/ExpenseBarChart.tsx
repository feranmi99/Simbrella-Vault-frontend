import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ExpenseData {
    category: string;
    amount: number;
}

interface ExpenseBarChartProps {
    data: ExpenseData[];
}

export const ExpenseBarChart: React.FC<ExpenseBarChartProps> = ({ data }) => {
    // Format data for Recharts
    const chartData = data.map(item => ({
        name: item.category,
        amount: item.amount,
    }));

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                data={chartData}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis
                    tickFormatter={(value) => `₦${value.toLocaleString()}`}
                />
                <Tooltip
                    formatter={(value) => [`₦${Number(value).toLocaleString()}`, 'Amount']}
                />
                <Legend />
                <Bar
                    dataKey="amount"
                    name="Amount"
                    fill="#8884d8"
                    radius={[4, 4, 0, 0]}
                />
            </BarChart>
        </ResponsiveContainer>
    );
};