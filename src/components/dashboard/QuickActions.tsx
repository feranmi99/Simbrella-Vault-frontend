// components/dashboard/QuickActions.tsx
import { ArrowUpRight, ArrowDownLeft, DollarSign, Plus } from 'lucide-react';
import Button from '../shared/Button';

export default function QuickActions() {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Button variant="outline" className="flex flex-col items-center p-4 h-full">
          <ArrowUpRight className="h-6 w-6 mb-2 text-blue-600" />
          <span>Send Money</span>
        </Button>
        <Button variant="outline" className="flex flex-col items-center p-4 h-full">
          <ArrowDownLeft className="h-6 w-6 mb-2 text-green-600" />
          <span>Receive Money</span>
        </Button>
        <Button variant="outline" className="flex flex-col items-center p-4 h-full">
          <DollarSign className="h-6 w-6 mb-2 text-purple-600" />
          <span>Pay Bills</span>
        </Button>
        <Button variant="outline" className="flex flex-col items-center p-4 h-full">
          <Plus className="h-6 w-6 mb-2 text-orange-600" />
          <span>New Wallet</span>
        </Button>
      </div>
    </div>
  );
}