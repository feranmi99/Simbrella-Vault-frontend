"use client";

import WalletSelector from '@/components/wallets/WalletSelector';
import AnalyticsOverview from '@/components/wallets/AnalyticsOverview';
import QuickActions from '@/components/wallets/QuickActions';
import WalletBalanceCard from '@/components/wallets/WalletBalanceCard';
import React from 'react';

const WalletPage = () => {
  const [activeWallet, setActiveWallet] = React.useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/4 space-y-6">
            <WalletSelector
              activeWallet={activeWallet}
              onSelectWallet={setActiveWallet}
            />
            <QuickActions />
          </div>
          <div className="lg:w-3/4 space-y-6">
            <WalletBalanceCard walletId={activeWallet} />
            <AnalyticsOverview walletId={activeWallet} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;