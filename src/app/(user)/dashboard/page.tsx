// app/(user)/dashboard/page.tsx
import BalanceCard from '@/components/dashboard/BalanceCard';
import QuickActions from '@/components/dashboard/QuickActions';
import RecentTransactions from '@/components/dashboard/RecentTransactions';
import { Wallet } from '@/types';

const wallets: Wallet[] = [
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

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wallets.map((wallet) => (
                    <BalanceCard key={wallet.id} wallet={wallet} />
                ))}
            </div>
            <QuickActions />
            <RecentTransactions />
        </div>
    );
}