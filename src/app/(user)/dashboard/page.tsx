"use client";

import { TransactionHistory } from '@/components/analytics/TransactionHistory';
import BalanceCard from '@/components/dashboard/BalanceCard';
import BalanceTrendChart from '@/components/dashboard/BalanceTrendChart';
import QuickActions from '@/components/dashboard/QuickActions';
import { ArrowDownCircle } from 'lucide-react';

const wallets = [
    {
        id: '1',
        name: 'Main Wallet',
        type: 'personal',
        balance: 1250.5,
        currency: 'USD',
        goalAmount: 2000,
        createdAt: '2023-01-01',
        transactions: [
            { id: 't1', type: 'deposit', amount: 500, date: '2023-06-05' },
            { id: 't2', type: 'withdrawal', amount: 250, date: '2023-06-07' },
        ]
    },
    {
        id: '2',
        name: 'Business',
        type: 'business',
        balance: 3500.75,
        currency: 'USD',
        goalAmount: 5000,
        createdAt: '2023-02-15',
        transactions: [
            { id: 't1', type: 'deposit', amount: 1000, date: '2023-06-06' }
        ]
    },
    {
        id: '3',
        name: 'Savings',
        type: 'savings',
        balance: 8000.0,
        currency: 'USD',
        goalAmount: 10000,
        createdAt: '2023-03-10',
        transactions: [
            { id: 't1', type: 'deposit', amount: 2000, date: '2023-06-03' }
        ]
    },
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
                    <div className="relative z-10 mb-3 flex flex-co md: flex-row md:items-center md: justify-between">
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
                            className="mt-4 md:mt-0 bg-white/90 text-blue-700 h-fit font-semibold py-3 px-6 rounded-lg w-fit hover:bg-white transition transform hover:scale-105 shadow-md flex items-center gap-2"
                            aria-label="Top up wallet"
                        >
                            <ArrowDownCircle className="h-5 w-5" />
                            Top Up
                        </button>


                    </div>
                    <BalanceTrendChart />
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
                    <TransactionHistory
                        transactions={[
                            { id: 1, description: 'Grocery shopping', amount: 25000, date: '2023-06-15', type: 'expense', wallet: 'Personal' },
                            { id: 2, description: 'Freelance payment', amount: 120000, date: '2023-06-14', type: 'income', wallet: 'Business' },
                            { id: 3, description: 'Electricity bill', amount: 18000, date: '2023-06-12', type: 'expense', wallet: 'Savings' },
                            { id: 4, description: 'MTN Airtime', amount: 5000, date: '2023-06-10', type: 'expense', wallet: 'Personal' },
                            { id: 5, description: 'Client project', amount: 200000, date: '2023-06-08', type: 'income', wallet: 'Business' },
                        ]}
                    />
                </section>
            </div>

        </>
    )
}

export default Page