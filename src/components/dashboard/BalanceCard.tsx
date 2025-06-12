import { Wallet } from '@/types';
import { Send, MoreVertical, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Icon } from '@iconify/react/dist/iconify.js';


export const formatAmount = (amount: number) =>
    new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(amount);

export default function BalanceCard({ wallet }: { wallet: any }) {
    const lastRelevantTransaction = [...(wallet.sentTransactions || []), ...(wallet.receivedTransactions || [])]
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())[0];


    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-200 group">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <div className="flex items-center space-x-2 mb-1">
                        <div className={`w-3 h-3 rounded-full ${getWalletColor(wallet.type)}`} />
                        <h3 className="text-lg font-semibold text-gray-900">{wallet.name}</h3>
                    </div>
                    <p className="text-sm text-gray-500 capitalize">{wallet.type} Wallet</p>
                </div>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreVertical className="h-4 w-4 text-gray-400" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit Wallet</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">Delete Wallet</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">
                    {formatAmount(wallet.balance)}
                </span>
                {lastRelevantTransaction && (
                    <div className="flex items-center mt-1">
                        {lastRelevantTransaction.type === 'credit' ? (
                            <ArrowDownLeft className="h-4 w-4 text-green-500 mr-1" />
                        ) : (
                            <ArrowUpRight className="h-4 w-4 text-red-500 mr-1" />
                        )}
                        <span className={`text-sm ${lastRelevantTransaction.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                            {formatAmount(lastRelevantTransaction.amount)} {lastRelevantTransaction.type === 'credit' ? 'received' : 'sent'}
                        </span>
                        <span className="text-xs text-gray-400 ml-2">
                            {new Date(lastRelevantTransaction.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </span>
                    </div>
                )}

            </div>
            <div className="flex space-x-3">
                <Button className="flex-1 bg-gradient-to-br from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-sm">
                    <Send className="h-4 w-4 mr-2" />
                    Send
                </Button>
                <Button variant="outline" className="flex-1 border-gray-300 bg-slate-200 hover:bg-slate-400">
                    <Icon icon="material-symbols:call-received" />
                    Receive
                </Button>
            </div>
        </div>
    );
}

function getWalletColor(type: string) {
    switch (type.toLowerCase()) {
        case 'savings':
            return 'bg-green-500';
        case 'business':
            return 'bg-blue-500';
        case 'personal':
            return 'bg-indigo-500';
        default:
            return 'bg-gray-500';
    }
}