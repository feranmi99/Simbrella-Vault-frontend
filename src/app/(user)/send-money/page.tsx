"use client";

import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const SendMoneyPage = () => {
    const [activeTab, setActiveTab] = useState<'contacts' | 'bank' | 'crypto' | 'mobile'>('contacts');
    const [amount, setAmount] = useState('');
    const [note, setNote] = useState('');
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
    const [bankDetails, setBankDetails] = useState({
        accountNumber: '',
        routingNumber: '',
        accountName: ''
    });
    const [cryptoAddress, setCryptoAddress] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [isConfirming, setIsConfirming] = useState(false);

    // Mock data
    const contacts: Contact[] = [
        { id: '1', name: 'Sarah Williams', avatar: '', lastTransaction: '2 days ago' },
        { id: '2', name: 'Michael Chen', avatar: '', lastTransaction: '1 week ago' },
        { id: '3', name: 'Emma Johnson', avatar: '', lastTransaction: '3 days ago' },
        { id: '4', name: 'David Kim', avatar: '', lastTransaction: '1 month ago' },
    ];

    const handleSend = () => {
        setIsConfirming(true);
        // In a real app, this would trigger the payment API
    };

    const handleConfirm = () => {
        // Process payment here
        alert(`Successfully sent $${amount} to ${selectedContact?.name || bankDetails.accountName || cryptoAddress || mobileNumber}`);
        setIsConfirming(false);
        setAmount('');
        setNote('');
        setSelectedContact(null);
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800">Send Money</h1>
                <p className="text-gray-600">Transfer funds to contacts, bank accounts, or crypto wallets</p>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
                <div className="border-b border-gray-200">
                    <nav className="flex -mb-px overflow-x-auto">
                        <button
                            onClick={() => setActiveTab('contacts')}
                            className={`py-4 px-4 text-center border-b-2 font-medium text-sm flex items-center justify-center gap-2 ${activeTab === 'contacts' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                        >
                            <Icon icon="heroicons:user-circle" className="h-5 w-5" />
                            Contacts
                        </button>
                        <button
                            onClick={() => setActiveTab('bank')}
                            className={`py-4 px-4 text-center border-b-2 font-medium text-sm flex items-center justify-center gap-2 ${activeTab === 'bank' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                        >
                            <Icon icon="heroicons:banknotes" className="h-5 w-5" />
                            Bank Transfer
                        </button>
                        <button
                            onClick={() => setActiveTab('crypto')}
                            className={`py-4 px-4 text-center border-b-2 font-medium text-sm flex items-center justify-center gap-2 ${activeTab === 'crypto' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                        >
                            <Icon icon="heroicons:currency-dollar" className="h-5 w-5" />
                            Crypto
                        </button>
                        <button
                            onClick={() => setActiveTab('mobile')}
                            className={`py-4 px-4 text-center border-b-2 font-medium text-sm flex items-center justify-center gap-2 ${activeTab === 'mobile' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                        >
                            <Icon icon="heroicons:device-phone-mobile" className="h-5 w-5" />
                            Mobile Money
                        </button>
                    </nav>
                </div>

                <div className="p-6">
                    {/* Amount Input */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                        <div className="relative rounded-md shadow-sm max-w-xs">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="text-gray-500 sm:text-sm">$</span>
                            </div>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 py-3 border border-gray-300 rounded-md"
                                placeholder="0.00"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <span className="text-gray-500 sm:text-sm">USD</span>
                            </div>
                        </div>
                    </div>

                    {/* Contacts Tab */}
                    {activeTab === 'contacts' && (
                        <div className="space-y-4">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Icon icon="heroicons:magnifying-glass" className="text-gray-400 h-5 w-5" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search contacts..."
                                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {contacts.map((contact) => (
                                    <div
                                        key={contact.id}
                                        onClick={() => setSelectedContact(contact)}
                                        className={`p-3 border rounded-lg cursor-pointer flex items-center ${selectedContact?.id === contact.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'}`}
                                    >
                                        <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center mr-3">
                                            <Icon icon="heroicons:user" className="h-5 w-5 text-gray-500" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">{contact.name}</p>
                                            <p className="text-xs text-gray-500">Last transaction: {contact.lastTransaction}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Bank Transfer Tab */}
                    {activeTab === 'bank' && (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Account Number</label>
                                <input
                                    type="text"
                                    value={bankDetails.accountNumber}
                                    onChange={(e) => setBankDetails({ ...bankDetails, accountNumber: e.target.value })}
                                    className="focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                    placeholder="Enter account number"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Routing Number</label>
                                <input
                                    type="text"
                                    value={bankDetails.routingNumber}
                                    onChange={(e) => setBankDetails({ ...bankDetails, routingNumber: e.target.value })}
                                    className="focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                    placeholder="Enter routing number"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Account Name</label>
                                <input
                                    type="text"
                                    value={bankDetails.accountName}
                                    onChange={(e) => setBankDetails({ ...bankDetails, accountName: e.target.value })}
                                    className="focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2 border border-gray-300 rounded-md"
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

                    {/* Crypto Tab */}
                    {activeTab === 'crypto' && (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Wallet Address</label>
                                <input
                                    type="text"
                                    value={cryptoAddress}
                                    onChange={(e) => setCryptoAddress(e.target.value)}
                                    className="focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2 border border-gray-300 rounded-md font-mono"
                                    placeholder="0x..."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Network</label>
                                <select className="focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2 border border-gray-300 rounded-md">
                                    <option>Ethereum (ERC-20)</option>
                                    <option>Bitcoin</option>
                                    <option>BNB Smart Chain (BEP-20)</option>
                                    <option>Polygon</option>
                                </select>
                            </div>

                            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <Icon icon="heroicons:exclamation-triangle" className="h-5 w-5 text-yellow-400" />
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-sm font-medium text-yellow-800">Important</h3>
                                        <div className="mt-2 text-sm text-yellow-700">
                                            <p>• Crypto transactions cannot be reversed</p>
                                            <p>• Ensure the address is correct before sending</p>
                                            <p>• Network fees apply</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Mobile Money Tab */}
                    {activeTab === 'mobile' && (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <div className="flex">
                                    <select className="flex-shrink-0 w-24 mr-2 focus:ring-blue-500 focus:border-blue-500 px-3 py-2 border border-gray-300 rounded-md">
                                        <option>+1</option>
                                        <option>+44</option>
                                        <option>+233</option>
                                        <option>+254</option>
                                    </select>
                                    <input
                                        type="tel"
                                        value={mobileNumber}
                                        onChange={(e) => setMobileNumber(e.target.value)}
                                        className="focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                        placeholder="Phone number"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Provider</label>
                                <select className="focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2 border border-gray-300 rounded-md">
                                    <option>Select mobile money provider</option>
                                    <option>MTN Mobile Money</option>
                                    <option>Vodafone Cash</option>
                                    <option>AirtelTigo Money</option>
                                    <option>M-Pesa</option>
                                </select>
                            </div>

                            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <Icon icon="heroicons:bolt" className="h-5 w-5 text-green-400" />
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-sm font-medium text-green-800">Instant Transfer</h3>
                                        <div className="mt-2 text-sm text-green-700">
                                            <p>• Transfers complete within minutes</p>
                                            <p>• 1% fee (max $5)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Note Field */}
                    <div className="mt-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Note (optional)</label>
                        <input
                            type="text"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            className="focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="What's this payment for?"
                        />
                    </div>

                    {/* Send Button */}
                    <div className="mt-8">
                        <button
                            onClick={handleSend}
                            disabled={!amount || (activeTab === 'contacts' && !selectedContact) || (activeTab === 'bank' && (!bankDetails.accountNumber || !bankDetails.routingNumber)) || (activeTab === 'crypto' && !cryptoAddress) || (activeTab === 'mobile' && !mobileNumber)}
                            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white py-3 px-4 rounded-md font-medium transition"
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
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
                <div className="px-6 py-4 border-t border-gray-200 text-center">
                    <button className="text-sm text-blue-600 hover:text-blue-800">
                        View all transactions
                    </button>
                </div>
            </div>

            {/* Confirmation Modal */}
            {isConfirming && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
                        <div className="p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Confirm Transfer</h3>

                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Recipient:</span>
                                    <span className="font-medium">
                                        {selectedContact?.name || bankDetails.accountName || cryptoAddress || mobileNumber}
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
                                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleConfirm}
                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                                >
                                    Confirm & Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

interface Contact {
    id: string;
    name: string;
    avatar: string;
    lastTransaction: string;
}

export default SendMoneyPage;