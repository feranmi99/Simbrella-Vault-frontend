import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const balanceHistory = [
    { date: 'Jun 1', balance: 4200 },
    { date: 'Jun 2', balance: 3800 },
    { date: 'Jun 3', balance: 4100 },
    { date: 'Jun 4', balance: 3950 },
    { date: 'Jun 5', balance: 4750 },
    { date: 'Jun 6', balance: 4300 },
    { date: 'Jun 7', balance: 4600 },
    { date: 'Jun 8', balance: 4850 },
];

const BalanceTrendChart = () => {
    return (
        <div className="h-64 mt-6">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={balanceHistory}>
                    <defs>
                        <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <Tooltip
                        formatter={(value) => [`$${value}`, "Balance"]}
                        labelFormatter={(label) => `Date: ${label}`}
                    />
                    <Area
                        type="monotone"
                        dataKey="balance"
                        stroke="#4f46e5"
                        fillOpacity={1}
                        fill="url(#colorBalance)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default BalanceTrendChart;