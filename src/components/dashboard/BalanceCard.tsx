// components/dashboard/BalanceCard.tsx
import { Wallet } from '@/types';

export default function BalanceCard({ wallet }: { wallet: Wallet }) {
    const progress = (wallet.balance / 10000) * 100; // Assuming 10k is max

    return (
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">{wallet.name}</h3>
                    <p className="text-sm text-gray-500 capitalize">{wallet.type}</p>
                </div>
                <span className="text-2xl font-bold text-gray-900">
                    ${wallet.balance.toLocaleString()}
                </span>
            </div>

            <div className="mb-4">
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <p className="text-xs text-gray-500 mt-1 text-right">
                    {progress.toFixed(0)}% of $10,000 goal
                </p>
            </div>

            <div className="flex space-x-3">
                <button className="flex-1 bg-gradient-to-br from-blue-500 to-indigo-600 text-white py-2 px-4 rounded-lg hover:shadow-md transition">
                    Send
                </button>
                <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition">
                    Receive
                </button>
            </div>
        </div>
    );
}