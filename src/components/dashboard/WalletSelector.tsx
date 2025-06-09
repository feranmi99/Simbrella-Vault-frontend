// components/dashboard/WalletSelector.tsx
import { Wallet } from '@/types';

interface WalletSelectorProps {
  wallets: Wallet[];
  selectedWalletId: string;
  onSelect: (walletId: string) => void;
}

export default function WalletSelector({
  wallets,
  selectedWalletId,
  onSelect,
}: WalletSelectorProps) {
  return (
    <div className="mb-6">
      <label htmlFor="wallet" className="block text-sm font-medium text-gray-700 mb-2">
        Select Wallet
      </label>
      <select
        id="wallet"
        value={selectedWalletId}
        onChange={(e) => onSelect(e.target.value)}
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
      >
        {wallets.map((wallet) => (
          <option key={wallet.id} value={wallet.id}>
            {wallet.name} ({wallet.type}) - ${wallet.balance.toLocaleString()}
          </option>
        ))}
      </select>
    </div>
  );
}