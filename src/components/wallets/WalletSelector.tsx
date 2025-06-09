import React from 'react';

interface WalletSelectorProps {
    activeWallet: string | null;
    onSelectWallet: (walletId: string) => void;
}

const WalletSelector: React.FC<WalletSelectorProps> = ({
    activeWallet = [],
    onSelectWallet
}) => {
    const wallets = [
        { id: 'personal', name: 'Personal Wallet', balance: 12500.75 },
        { id: 'business', name: 'Business Wallet', balance: 34200.00 },
        { id: 'savings', name: 'Savings Wallet', balance: 8750.50 },
    ];

    return (
        <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">My Wallets</h2>

            <div className="space-y-3">
                {wallets.map((wallet) => (
                    <div
                        key={wallet.id}
                        onClick={() => onSelectWallet(wallet.id)}
                        className={`p-4 rounded-lg cursor-pointer transition ${activeWallet === wallet.id ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50 hover:bg-gray-100'}`}
                    >
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="font-medium text-gray-800">{wallet.name}</h3>
                                <p className="text-sm text-gray-500">Balance: ${wallet.balance.toLocaleString()}</p>
                            </div>
                            {activeWallet === wallet.id && (
                                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WalletSelector;