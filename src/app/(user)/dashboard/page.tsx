"use client";

import BalanceCard from '@/components/dashboard/BalanceCard';
import BalanceTrendChart from '@/components/dashboard/BalanceTrendChart';
import QuickActions from '@/components/dashboard/QuickActions';
import RecentTransactions from '@/components/dashboard/RecentTransactions';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const wallets = [
    {
        id: '1',
        name: 'Main Wallet',
        type: 'personal',
        balance: 1250.5,
        currency: 'USD',
        createdAt: '2023-01-01',
    },
    {
        id: '2',
        name: 'Business',
        type: 'business',
        balance: 3500.75,
        currency: 'USD',
        createdAt: '2023-02-15',
    },
    {
        id: '3',
        name: 'Savings',
        type: 'savings',
        balance: 8000.0,
        currency: 'USD',
        createdAt: '2023-03-10',
    },
];

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


const getTotalBalance = (wallets: any[]) =>
    wallets.reduce((acc, wallet) => acc + wallet.balance, 0);

const Page = () => {
    const totalBalance = getTotalBalance(wallets);
    return (
        <>
            <div className="md:p-5 p-3 mx-auto space-y-8">
                <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl shadow-xl p-6 overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl opacity-20"></div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-300 rounded-full filter blur-3xl opacity-20"></div>
                    </div>
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                            <p className="text-sm uppercase font-semibold opacity-80 tracking-wider">Total Balance</p>
                            <h2 className="text-4xl font-bold mt-1">
                                ₦{totalBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                            </h2>
                            <p className="text-sm opacity-80 mt-2 flex items-center">
                                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                                2.5% increase from last month
                            </p>
                        </div>
                        <button
                            className="mt-4 md:mt-0 bg-white/90 text-blue-700 font-semibold py-3 px-6 rounded-xl hover:bg-white transition transform hover:scale-105 shadow-md"
                            aria-label="Add new wallet"
                        >
                            + Add Wallet
                        </button>
                    </div>
                    <BalanceTrendChart   />
                </section>
                <section>
                    <h3 className="text-xl font-semibold mb-4">Your Wallets</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {wallets.map((wallet) => (
                            <BalanceCard key={wallet.id} wallet={wallet} />
                        ))}
                    </div>
                </section>
                <section>
                    <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
                    <QuickActions />
                </section>
                <section>
                    <h3 className="text-xl font-semibold mb-4">Recent Transactions</h3>
                    <RecentTransactions />
                </section>
            </div>
        </>
    )
}

export default Page