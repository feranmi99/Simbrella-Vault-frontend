// components/dashboard/BalanceCard.tsx
import { Wallet } from '@/types';

export default function BalanceCard({ wallet }: { wallet: Wallet }) {
    return (
        <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-medium text-gray-900">{wallet.name}</h3>
                    <p className="text-gray-500">{wallet.type}</p>
                </div>
                <span className="text-2xl font-bold text-gray-900">
                    ${wallet.balance.toLocaleString()}
                </span>
            </div>
            <div className="mt-4 flex space-x-2">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                    Send
                </button>
                <button className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300">
                    Receive
                </button>
            </div>
        </div>
    );
}