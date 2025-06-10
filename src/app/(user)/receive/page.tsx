"use client";

import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const ReceiveMoneyPage = () => {
  const [activeTab, setActiveTab] = useState<'qr' | 'account' | 'link'>('qr');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [copied, setCopied] = useState(false);

  // Mock user data
  const user = {
    name: "John Doe",
    accountNumber: "1234567890",
    routingNumber: "110000000",
    walletAddress: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F"
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Receive Money</h1>
        <p className="text-gray-600">Choose how you want to receive funds</p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('qr')}
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm flex items-center justify-center gap-2 ${activeTab === 'qr' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              <Icon icon="heroicons:qrcode" className="h-5 w-5" />
              QR Code
            </button>
            <button
              onClick={() => setActiveTab('account')}
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm flex items-center justify-center gap-2 ${activeTab === 'account' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              <Icon icon="heroicons:banknotes" className="h-5 w-5" />
              Account Details
            </button>
            <button
              onClick={() => setActiveTab('link')}
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm flex items-center justify-center gap-2 ${activeTab === 'link' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              <Icon icon="heroicons:link" className="h-5 w-5" />
              Payment Link
            </button>
          </nav>
        </div>

        <div className="p-6">
          {/* QR Code Tab */}
          {activeTab === 'qr' && (
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 flex flex-col items-center">
                <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
                  {/* This would be a generated QR code in a real app */}
                  <div className="w-64 h-64 bg-gray-100 flex items-center justify-center">
                    <Icon icon="heroicons:qrcode" className="h-32 w-32 text-gray-400" />
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-4">Scan this QR code to receive money</p>
                
                <div className="w-full max-w-xs">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Amount (optional)</label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 py-2 border border-gray-300 rounded-md"
                      placeholder="0.00"
                    />
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900 mb-4">How to receive with QR code</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-100 rounded-full p-1 mr-3">
                      <Icon icon="heroicons:check" className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="text-sm text-gray-700">Ask the sender to open their Simbrella Vault app</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-100 rounded-full p-1 mr-3">
                      <Icon icon="heroicons:check" className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="text-sm text-gray-700">Have them tap 'Send Money' and scan your QR code</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-100 rounded-full p-1 mr-3">
                      <Icon icon="heroicons:check" className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="text-sm text-gray-700">The money will be deposited directly into your wallet</p>
                  </li>
                </ul>

                <div className="mt-8">
                  <button className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2">
                    <Icon icon="heroicons:arrow-down-tray" className="h-5 w-5" />
                    Download QR Code
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Account Details Tab */}
          {activeTab === 'account' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Domestic Transfer</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-gray-500">Account Number</p>
                      <div className="flex justify-between items-center">
                        <p className="font-medium">{user.accountNumber}</p>
                        <button 
                          onClick={() => handleCopy(user.accountNumber)}
                          className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
                        >
                          <Icon icon="heroicons:clipboard-document" className="h-4 w-4" />
                          {copied ? 'Copied!' : 'Copy'}
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Routing Number</p>
                      <div className="flex justify-between items-center">
                        <p className="font-medium">{user.routingNumber}</p>
                        <button 
                          onClick={() => handleCopy(user.routingNumber)}
                          className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
                        >
                          <Icon icon="heroicons:clipboard-document" className="h-4 w-4" />
                          {copied ? 'Copied!' : 'Copy'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-500 mb-2">International Transfer (SWIFT)</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-gray-500">SWIFT/BIC Code</p>
                      <div className="flex justify-between items-center">
                        <p className="font-medium">SIMBBUS33</p>
                        <button 
                          onClick={() => handleCopy("SIMBBUS33")}
                          className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
                        >
                          <Icon icon="heroicons:clipboard-document" className="h-4 w-4" />
                          {copied ? 'Copied!' : 'Copy'}
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Bank Address</p>
                      <p className="font-medium text-sm">123 Finance St, New York, NY 10001</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-gray-500 mb-2">Crypto Wallet</h4>
                <div>
                  <p className="text-xs text-gray-500">Wallet Address</p>
                  <div className="flex justify-between items-center">
                    <p className="font-medium text-sm truncate">{user.walletAddress}</p>
                    <button 
                      onClick={() => handleCopy(user.walletAddress)}
                      className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
                    >
                      <Icon icon="heroicons:clipboard-document" className="h-4 w-4" />
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Icon icon="heroicons:information-circle" className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800">Important Information</h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <p>
                        • Transfers may take 1-3 business days to process<br />
                        • Ensure the sender includes your account number as reference<br />
                        • Crypto transfers require network confirmations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Payment Link Tab */}
          {activeTab === 'link' && (
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 py-2 border border-gray-300 rounded-md"
                      placeholder="0.00"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description (optional)</label>
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="e.g. Payment for services"
                  />
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
                  <div className="flex justify-between items-center">
                    <div className="truncate">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {amount ? `$${amount} payment` : 'Payment request'}
                      </p>
                      {description && <p className="text-xs text-gray-500 truncate">{description}</p>}
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1">
                      <Icon icon="heroicons:clipboard-document" className="h-4 w-4" />
                      Copy Link
                    </button>
                  </div>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2">
                  <Icon icon="heroicons:share" className="h-5 w-5" />
                  Share Payment Link
                </button>
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                  <Icon icon="logos:whatsapp-icon" className="h-5 w-5 mr-2" />
                  WhatsApp
                </button>
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                  <Icon icon="logos:facebook" className="h-5 w-5 mr-2" />
                  Facebook
                </button>
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                  <Icon icon="logos:twitter" className="h-5 w-5 mr-2" />
                  Twitter
                </button>
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                  <Icon icon="heroicons:envelope" className="h-5 w-5 mr-2" />
                  Email
                </button>
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                  <Icon icon="heroicons:chat-bubble-bottom-center-text" className="h-5 w-5 mr-2" />
                  SMS
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recent Receipts</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {[1, 2, 3].map((item) => (
            <div key={item} className="px-6 py-4 flex justify-between items-center hover:bg-gray-50">
              <div className="flex items-center">
                <div className="bg-green-100 rounded-full p-2 mr-4">
                  <Icon icon="heroicons:arrow-down-tray" className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Payment from Sarah Williams</p>
                  <p className="text-xs text-gray-500">Jun {15 - item}, 2023 · 10:{30 - item} AM</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-green-600">+${(100 + item * 50).toFixed(2)}</p>
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
    </div>
  );
};

export default ReceiveMoneyPage;