"use client";

import React, { useState } from 'react';
import { Icon } from '@iconify/react';

interface ReceiveMoneyModalProps {
    onClose: () => void;
    onOpen: boolean;
}

const ReceiveMoneyModal: React.FC<ReceiveMoneyModalProps> = ({ onClose, onOpen }) => {
    const [copied, setCopied] = useState(false);
    const [activeTab, setActiveTab] = useState<'account' | 'crypto'>('account');
    const [selectedAccountType, setSelectedAccountType] = useState<'personal' | 'savings' | 'business' | null>(null);


    // Mock user data
    const user = {
        accountNumber: "1234567890",
        routingNumber: "110000000",
        walletAddress: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F"
    };

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (!onOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-white/60 bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-md">
                <div className="p-5 border-b border-gray-200 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-900">Receive Money</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400  cursor-pointer hover:text-gray-500"
                    >
                        <Icon icon="heroicons:x-mark" className="h-6 w-6" />
                    </button>
                </div>
                <div className="border-b border-gray-200">
                    <nav className="flex">
                        <button
                            onClick={() => setActiveTab('account')}
                            className={`flex-1 py-4 text-center border-b-2 font-medium text-sm ${activeTab === 'account' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                        >
                            Bank Account
                        </button>
                        <button
                            onClick={() => setActiveTab('crypto')}
                            className={`flex-1 py-4 text-center border-b-2 font-medium text-sm ${activeTab === 'crypto' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                        >
                            Crypto Wallet
                        </button>
                    </nav>
                </div>
                <div className="p-5">
                    
                    {activeTab === 'account' ? (
                        <>
                            <div className="mb-6">
                                <h3 className="text-sm font-medium text-gray-500 mb-3">Domestic Transfer</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-xs text-gray-500 mb-1">Account Number</label>
                                        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                                            <span className="font-mono text-gray-900">{user.accountNumber}</span>
                                            <button
                                                onClick={() => handleCopy(user.accountNumber)}
                                                className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
                                            >
                                                <Icon icon={copied ? "heroicons:check" : "heroicons:clipboard-document"} className="h-4 w-4" />
                                                {copied ? 'Copied!' : 'Copy'}
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs text-gray-500 mb-1">Routing Number</label>
                                        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                                            <span className="font-mono text-gray-900">{user.routingNumber}</span>
                                            <button
                                                onClick={() => handleCopy(user.routingNumber)}
                                                className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
                                            >
                                                <Icon icon={copied ? "heroicons:check" : "heroicons:clipboard-document"} className="h-4 w-4" />
                                                {copied ? 'Copied!' : 'Copy'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-700">
                                <p>Share these details with the sender to receive money</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="mb-6">
                                <h3 className="text-sm font-medium text-gray-500 mb-3">Wallet Address</h3>
                                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                                    <span className="font-mono text-gray-900 text-sm truncate">{user.walletAddress}</span>
                                    <button
                                        onClick={() => handleCopy(user.walletAddress)}
                                        className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
                                    >
                                        <Icon icon={copied ? "heroicons:check" : "heroicons:clipboard-document"} className="h-4 w-4" />
                                        {copied ? 'Copied!' : 'Copy'}
                                    </button>
                                </div>
                            </div>

                            <div className="bg-yellow-50 p-4 rounded-lg text-sm text-yellow-700">
                                <p className="font-medium mb-1">Important:</p>
                                <p>Only send supported cryptocurrencies to this address</p>
                            </div>
                        </>
                    )}
                </div>
                <div className="p-5 border-t border-gray-200 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReceiveMoneyModal;