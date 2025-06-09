// components/dashboard/QuickActions.tsx
import { ArrowUpRight, ArrowDownLeft, DollarSign, Plus } from 'lucide-react';
import Button from '../shared/Button';

// Updated QuickActions component
export default function QuickActions() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Button
          variant="outline"
          className="flex flex-col items-center p-4 h-full hover:border-blue-500 hover:bg-blue-50 transition group"
        >
          <div className="p-3 bg-blue-100 rounded-full group-hover:bg-blue-200 transition mb-3">
            <ArrowUpRight className="h-5 w-5 text-blue-600" />
          </div>
          <span className="font-medium">Send Money</span>
          <span className="text-xs text-gray-500 mt-1">Instant transfer</span>
        </Button>
        {/* Similar updates for other buttons */}
      </div>
    </div>
  );
}