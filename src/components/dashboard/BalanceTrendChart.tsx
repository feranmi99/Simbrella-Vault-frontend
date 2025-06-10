import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { ArrowUp, ArrowDown, TrendingUp, DollarSign } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Icon } from '@iconify/react/dist/iconify.js';

const balanceHistory = [
    { date: 'Jun 1', balance: 4200, transactions: 12 },
    { date: 'Jun 2', balance: 3800, transactions: 8 },
    { date: 'Jun 3', balance: 4100, transactions: 15 },
    { date: 'Jun 4', balance: 3950, transactions: 10 },
    { date: 'Jun 5', balance: 4750, transactions: 18 },
    { date: 'Jun 6', balance: 4300, transactions: 14 },
    { date: 'Jun 7', balance: 4600, transactions: 16 },
    { date: 'Jun 8', balance: 4850, transactions: 20 },
];

const BalanceTrendChart = () => {
    const currentBalance = balanceHistory[balanceHistory.length - 1].balance;
    const previousBalance = balanceHistory[0].balance;
    const balanceChange = currentBalance - previousBalance;
    const percentageChange = ((balanceChange / previousBalance) * 100).toFixed(1);
    const isPositive = balanceChange >= 0;
    const averageDailyTransactions = Math.round(
        balanceHistory.reduce((sum, day) => sum + day.transactions, 0) / balanceHistory.length
    );

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
                        <p className="text-2xl font-bold text-gray-700">₦{currentBalance.toLocaleString()}</p>
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
}

export default BalanceTrendChart;