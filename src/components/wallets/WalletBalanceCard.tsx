import { Icon } from '@iconify/react/dist/iconify.js';
import { ArrowDownCircle } from 'lucide-react';
import React from 'react';

interface WalletBalanceCardProps {
    walletId: string | null;
}

const WalletBalanceCard: React.FC<WalletBalanceCardProps> = ({ walletId }) => {
    // In a real app, this would fetch wallet data based on walletId
    const walletData = {
        name: walletId ? `My ${walletId} Wallet` : 'Select a Wallet',
        balance: walletId ? 12500.75 : 0,
        currency: 'NGN',
        lastUpdated: new Date().toLocaleString(),
    };

    return (
        <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-lg font-medium text-gray-500">Current Balance</h2>
                    <p className="text-3xl font-bold text-gray-800 mt-2">
                        {walletData.currency} {walletData.balance.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                        {walletData.name} • Updated {walletData.lastUpdated}
                    </p>
                </div>

                <div className="flex space-x-3">
                    <button
                        className="mt-4 md:mt-0 text-white/90 bg-blue-700 h-fit font-semibold py-3 px-6 rounded-lg w-fit transition transform hover:scale-105 shadow-md flex items-center gap-2"
                        aria-label="Top up wallet"
                    >
                        <Icon icon="mdi:bank-transfer-in" className="text-xl" />
                        Deposit
                    </button>
                    <button
                        className="mt-4 md:mt-0 border border-blue-600 text-blue-600 h-fit font-semibold py-3 px-6 rounded-lg w-fit hover:bg-white transition transform hover:scale-105 shadow-md flex items-center gap-2"
                        aria-label="Top up wallet"
                    >
                        <Icon icon="mdi:bank-transfer-out" className="text-xl" />
                        Withdraw
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WalletBalanceCard;