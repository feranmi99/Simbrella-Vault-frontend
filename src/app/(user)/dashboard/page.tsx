import BalanceCard from '@/components/dashboard/BalanceCard';
import QuickActions from '@/components/dashboard/QuickActions';
import RecentTransactions from '@/components/dashboard/RecentTransactions';
// import { Wallet } from '@/types';

const wallets: any[] = [
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

const getTotalBalance = (wallets: any[]) =>
    wallets.reduce((acc, wallet) => acc + wallet.balance, 0);

export default function DashboardPage() {
    const totalBalance = getTotalBalance(wallets);

    return (
        <main className="p-6 max-w-7xl mx-auto space-y-8">
            {/* Page Header */}
            <header className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h1 className="text-3xl font-extrabold text-gray-900">Welcome back, Johnson!</h1>
                <p className="mt-2 md:mt-0 text-gray-600 text-sm">
                    Here’s an overview of your wallets and recent activity.
                </p>
            </header>

            {/* Total Balance Overview */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                    <p className="text-sm uppercase font-semibold opacity-80">Total Balance</p>
                    <h2 className="text-4xl font-bold mt-1">
                        ${totalBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </h2>
                </div>
                <button
                    className="mt-4 md:mt-0 bg-white text-blue-700 font-semibold py-2 px-5 rounded-lg hover:bg-gray-100 transition"
                    // onClick={() => alert('Add new wallet')}
                    aria-label="Add new wallet"
                >
                    + Add Wallet
                </button>
            </section>

            {/* Wallets Grid */}
            <section>
                <h3 className="text-xl font-semibold mb-4">Your Wallets</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wallets.map((wallet) => (
                        <BalanceCard key={wallet.id} wallet={wallet} />
                    ))}
                </div>
            </section>

            {/* Quick Actions */}
            <section>
                <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
                <QuickActions />
            </section>

            {/* Recent Transactions */}
            <section>
                <h3 className="text-xl font-semibold mb-4">Recent Transactions</h3>
                <RecentTransactions />
            </section>
        </main>
    );
}
