'use client';

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    ReferenceLine,
} from 'recharts';
import { ArrowUp, ArrowDown, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Icon } from '@iconify/react';
import { formatAmount } from './BalanceCard';

type Wallet = {
    id: number;
    name: string;
    balance: number;
    createdAt: string;
};

type Props = {
    data: Wallet[];
};

const BalanceTrendChart = ({ data }: Props) => {
    // Sort wallets by date
    const sortedData = [...data].sort(
        (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );

    // Format balance history for the chart
    const balanceHistory = sortedData.map((wallet) => ({
        date: new Date(wallet.createdAt).toLocaleDateString(),
        balance: Number(wallet.balance),
        transactions: Math.floor(Math.random() * 10 + 1), // Replace with real transactions if available
    }));

    const currentBalance = sortedData[sortedData.length - 1]?.balance || 0;
    const previousBalance = sortedData[0]?.balance || 0;
    const balanceChange = currentBalance - previousBalance;
    const isPositive = balanceChange >= 0;
    const percentageChange = previousBalance
        ? ((balanceChange / previousBalance) * 100).toFixed(2)
        : '0.00';

    const totalTransactions = balanceHistory.reduce((sum, item) => sum + item.transactions, 0);
    const averageDailyTransactions = balanceHistory.length
        ? Math.round(totalTransactions / balanceHistory.length)
        : 0;

    return (
        <Card className="shadow-sm">
            <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                    <CardTitle className="text-lg font-semibold">Balance Overview</CardTitle>
                    <div className="flex items-center space-x-2">
                        <Icon icon="fa6-solid:naira-sign" className="h-5 w-5 text-green-600" />
                        <span className="text-sm font-medium text-white">Last 7 days</span>
                    </div>
                </div>
            </CardHeader>

            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm font-medium text-gray-500">Current Balance</p>
                        <p className="text-2xl font-bold text-gray-700">{formatAmount(currentBalance)}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm font-medium text-gray-500">Balance Change</p>
                        <div className="flex items-center">
                            {isPositive ? (
                                <ArrowUp className="h-5 w-5 text-green-500 mr-1" />
                            ) : (
                                <ArrowDown className="h-5 w-5 text-red-500 mr-1" />
                            )}
                            <span className={`text-xl font-bold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                                ₦{Math.abs(balanceChange).toLocaleString()} ({percentageChange}%)
                            </span>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm font-medium text-gray-500">Avg. Daily Transactions</p>
                        <div className="flex items-center">
                            <TrendingUp className="h-5 w-5 text-blue-500 mr-1" />
                            <span className="text-xl font-bold text-gray-800">{averageDailyTransactions}</span>
                        </div>
                    </div>
                </div>

                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={balanceHistory}
                            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                        >
                            <defs>
                                <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#16a34a" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#16a34a" stopOpacity={0.1} />
                                </linearGradient>
                            </defs>

                            <XAxis
                                dataKey="date"
                                tick={{ fill: '#fff' }}
                                axisLine={false}
                                tickLine={false}
                            />
                            <YAxis
                                tick={{ fill: '#fff' }}
                                axisLine={false}
                                tickLine={false}
                                tickFormatter={(value) => `₦${value / 1000}k`}
                            />
                            <CartesianGrid
                                strokeDasharray="3 3"
                                vertical={false}
                                stroke="#e5e7eb"
                            />
                            <ReferenceLine
                                y={previousBalance}
                                stroke="#9ca3af"
                                strokeDasharray="3 3"
                                label="Start"
                            />
                            <Tooltip
                                content={({ active, payload, label }) => {
                                    if (active && payload && payload.length) {
                                        return (
                                            <div className="bg-white p-3 shadow-lg rounded-lg border border-gray-200">
                                                <p className="font-semibold">{label}</p>
                                                <p className="text-green-600">
                                                    Balance: <span className="font-bold">₦{payload[0].value?.toLocaleString()}</span>
                                                </p>
                                                <p className="text-blue-600">
                                                    Transactions: <span className="font-bold">{payload[0].payload.transactions}</span>
                                                </p>
                                            </div>
                                        );
                                    }
                                    return null;
                                }}
                            />
                            <Area
                                type="monotone"
                                dataKey="balance"
                                stroke="#16a34a"
                                strokeWidth={2}
                                fillOpacity={1}
                                fill="url(#colorBalance)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
};

export default BalanceTrendChart;
