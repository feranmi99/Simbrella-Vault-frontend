"use client";

import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Textfield } from '@/components/ui/Textfield';

interface Wallet {
    id: string;
    name: string;
    balance: number;
    type: 'personal' | 'business' | 'savings';
    currency: string;
}

const wallets: Wallet[] = [
    { id: '1', name: 'Main Wallet', balance: 1250.75, type: 'personal', currency: 'NGN' },
    { id: '2', name: 'Business', balance: 4850.20, type: 'business', currency: 'NGN' },
    { id: '3', name: 'Savings', balance: 10250.00, type: 'savings', currency: 'NGN' },
];

const SendMoneyPage = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<'bank' | 'wallets'>('wallets');
    const [amount, setAmount] = useState('');
    const [note, setNote] = useState('');
    const [selectedWallet, setSelectedWallet] = useState<Wallet | null>(null);
    const [bankDetails, setBankDetails] = useState({
        accountNumber: '',
        routingNumber: '',
        accountName: ''
    });
    const [isConfirming, setIsConfirming] = useState(false);
    const [sourceWallet, setSourceWallet] = useState<Wallet | null>(wallets[0]);

    const handleSend = () => {
        setIsConfirming(true);
    };

    const handleConfirm = () => {
        alert(`Successfully sent $${amount} from ${sourceWallet?.name} to ${selectedWallet?.name || bankDetails.accountName}`);
        setIsConfirming(false);
        setAmount('');
        setNote('');
        setSelectedWallet(null);
    };

    return (
        <div className="bg-gray-50">
            <div className=" mx-auto px-4 py-8">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Transfer Money</h1>
                    <p className="text-gray-600 mt-2">Send funds to  wallets, or external accounts</p>
                </header>
                <div className="bg-white rounded-xl shadow-xs border border-gray-100 p-6 mb-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">From Wallet</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {wallets.map((wallet) => (
                            <div
                                key={wallet.id}
                                onClick={() => setSourceWallet(wallet)}
                                className={`p-4 border rounded-xl cursor-pointer transition-all ${sourceWallet?.id === wallet.id
                                    ? 'border-blue-300 bg-blue-50 ring-2 ring-blue-100'
                                    : 'border-gray-200 hover:bg-gray-50'
                                    }`}
                            >
                                <div className="flex items-center">
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${wallet.type === 'personal' ? 'bg-blue-100' :
                                        wallet.type === 'business' ? 'bg-purple-100' : 'bg-green-100'
                                        }`}>
                                        <Icon
                                            icon={
                                                wallet.type === 'personal' ? 'heroicons:user' :
                                                    wallet.type === 'business' ? 'heroicons:building-office' : 'heroicons:banknotes'
                                            }
                                            className={`h-5 w-5 ${wallet.type === 'personal' ? 'text-blue-600' :
                                                wallet.type === 'business' ? 'text-purple-600' : 'text-green-600'
                                                }`}
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">{wallet.name}</h4>
                                        <p className="text-sm text-gray-500">{wallet.currency} {wallet.balance.toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-xs border border-gray-100 overflow-hidden">
                    <div className="border-b border-gray-200 flex justify-center items-center">
                        <nav className="flex -mb-px overflow-x-auto w-fit">
                            <button
                                onClick={() => setActiveTab('wallets')}
                                className={`py-4 px-6 text-center border-b-2 font-medium text-sm flex cursor-pointer items-center justify-center gap-2 ${activeTab === 'wallets' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                            >
                                <Icon icon="heroicons:wallet" className="h-5 w-5" />
                                Wallets
                            </button>
                            <button
                                onClick={() => setActiveTab('bank')}
                                className={`py-4 px-6 text-center border-b-2 font-medium text-sm flex cursor-pointer items-center justify-center gap-2 ${activeTab === 'bank' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                            >
                                <Icon icon="heroicons:banknotes" className="h-5 w-5" />
                                Bank
                            </button>
                        </nav>
                    </div>
                    <div className="p-6">
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Amount</label>
                            <div className="relative rounded-lg shadow-sm max-w-xs">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="text-gray-500">₦</span>
                                </div>
                                <Textfield
                                    id='amount'
                                    type="number"
                                    value={amount}
                                    onChange={(value: string) => setAmount(value)}
                                    className="block w-full pl-9 pr-12 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="0.00"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <span className="text-gray-500">{sourceWallet?.currency || 'NGN'}</span>
                                </div>
                            </div>
                        </div>
                        {activeTab === 'wallets' && (
                            <div className="space-y-4">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Icon icon="heroicons:magnifying-glass" className="text-gray-400 h-5 w-5" />
                                    </div>
                                    <Textfield
                                        id='wallet-address'
                                        type="text"
                                        placeholder="Enter the recipient's wallet address"
                                        className="block w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div className="relative">
                                    <Textfield
                                        id='wallet-name'
                                        type="text"
                                        placeholder="Recipient's wallet name"
                                        className="block w-full pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                            </div>
                        )}
                        {activeTab === 'bank' && (
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Account Number</label>
                                    <Textfield
                                        id='account-number'
                                        type="text"
                                        value={bankDetails.accountNumber}
                                        onChange={(value: string) => setBankDetails({ ...bankDetails, accountNumber: value })}
                                        className="block w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Enter account number"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Routing Number</label>
                                    <Textfield
                                        id='routing-number'
                                        type="text"
                                        value={bankDetails.routingNumber}
                                        onChange={(value: any) => setBankDetails({ ...bankDetails, routingNumber: value })}
                                        className="block w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Enter routing number"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Account Name</label>
                                    <Textfield
                                        id='account-name'
                                        type="text"
                                        value={bankDetails.accountName}
                                        onChange={(value: any) => setBankDetails({ ...bankDetails, accountName: value })}
                                        className="block w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Enter account holder name"
                                    />
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <Icon icon="heroicons:information-circle" className="h-5 w-5 text-blue-400" />
                                        </div>
                                        <div className="ml-3">
                                            <h3 className="text-sm font-medium text-blue-800">Bank Transfer Info</h3>
                                            <div className="mt-2 text-sm text-blue-700">
                                                <p>• Transfers typically complete within 1-3 business days</p>
                                                <p>• $0.25 fee for instant transfers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="mt-6">
                            <Textfield
                                id='note'
                                label="Note (optional)"
                                type="text"
                                value={note}
                                onChange={(value: any) => setNote(value)}
                                className="block w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="What's this payment for?"
                            />
                        </div>
                        <div className="mt-8">
                            <button
                                onClick={handleSend}
                                disabled={
                                    !sourceWallet || !amount ||
                                    (activeTab === 'wallets' && !selectedWallet) ||
                                    (activeTab === 'bank' && (!bankDetails.accountNumber || !bankDetails.routingNumber))
                                }
                                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white py-3.5 px-4 rounded-lg font-medium transition-colors"
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-xs border border-gray-100 overflow-hidden mt-6">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h3 className="text-lg font-medium text-gray-900">Recent Transfers</h3>
                    </div>
                    <div className="divide-y divide-gray-200">
                        {[1, 2].map((item) => (
                            <div key={item} className="px-6 py-4 flex justify-between items-center hover:bg-gray-50">
                                <div className="flex items-center">
                                    <div className="bg-blue-100 rounded-full p-2 mr-4">
                                        <Icon icon="heroicons:arrow-up-tray" className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">To {['Sarah Williams', 'Michael Chen'][item - 1]}</p>
                                        <p className="text-xs text-gray-500">Jun {15 - item}, 2023 · 10:{30 - item} AM</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-medium text-red-600">-${(50 + item * 25).toFixed(2)}</p>
                                    <p className="text-xs text-gray-500">Completed</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="px-6 py-2 border-t border-gray-200 text-center">
                        <Button
                            onClick={() => router.push('/transactions')}
                            variant="link" className="text-sm text-blue-600 hover:text-blue-800">
                            View all transactions
                        </Button>
                    </div>
                </div>
                {isConfirming && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                        <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
                            <div className="p-6">
                                <h3 className="text-lg font-medium text-gray-900 mb-4">Confirm Transfer</h3>

                                <div className="space-y-4">
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">From:</span>
                                        <span className="font-medium">
                                            {sourceWallet?.name}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">To:</span>
                                        <span className="font-medium">
                                            {selectedWallet?.name || bankDetails.accountName}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Amount:</span>
                                        <span className="font-medium">${amount}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Fee:</span>
                                        <span className="font-medium">$0.00</span>
                                    </div>
                                    <div className="flex justify-between border-t border-gray-200 pt-2">
                                        <span className="text-gray-500">Total:</span>
                                        <span className="font-medium">${amount}</span>
                                    </div>
                                    {note && (
                                        <div className="pt-2">
                                            <span className="text-gray-500">Note:</span>
                                            <p className="text-sm mt-1">{note}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="mt-6 flex justify-end space-x-3">
                                    <button
                                        onClick={() => setIsConfirming(false)}
                                        className="px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleConfirm}
                                        className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
                                    >
                                        Confirm & Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SendMoneyPage;