import React from 'react';

interface WalletBalanceCardProps {
  walletId: string | null;
}

const WalletBalanceCard: React.FC<WalletBalanceCardProps> = ({ walletId }) => {
  // In a real app, this would fetch wallet data based on walletId
  const walletData = {
    name: walletId ? `My ${walletId} Wallet` : 'Select a Wallet',
    balance: walletId ? 12500.75 : 0,
    currency: 'USD',
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
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Deposit
          </button>
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalletBalanceCard;