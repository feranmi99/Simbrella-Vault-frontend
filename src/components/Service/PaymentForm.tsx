import React, { useState } from 'react';
import { ServiceType } from './ServiceCard';

interface PaymentFormProps {
  service: ServiceType;
  onBack: () => void;
  onSuccess: () => void;
  onError: () => void;
}

export const PaymentForm: React.FC<PaymentFormProps> = ({
  service,
  onBack,
  onSuccess,
  onError,
}) => {
  const [amount, setAmount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [meterNumber, setMeterNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState('primary');

  const wallets = [
    { id: 'primary', name: 'Primary Wallet', balance: 50000, color: 'bg-blue-100' },
    { id: 'savings', name: 'Savings Wallet', balance: 150000, color: 'bg-green-100' },
    { id: 'business', name: 'Business Wallet', balance: 75000, color: 'bg-purple-100' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      Math.random() > 0.2 ? onSuccess() : onError();
    }, 1500);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center">
          <button 
            onClick={onBack}
            className="mr-4 p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-gray-900"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Pay for {service.name}</h2>
            <p className="text-gray-500 text-sm">Complete the form to proceed</p>
          </div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="p-6">
        {service.name.includes('Airtime') || service.name.includes('Data') ? (
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="phoneNumber">
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500">+234</span>
              </div>
              <input
                id="phoneNumber"
                type="tel"
                className="block w-full pl-16 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="801 234 5678"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
          </div>
        ) : (
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="meterNumber">
              Meter Number
            </label>
            <input
              id="meterNumber"
              type="text"
              className="block w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter meter number"
              value={meterNumber}
              onChange={(e) => setMeterNumber(e.target.value)}
              required
            />
          </div>
        )}
        
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="amount">
            Amount (₦)
          </label>
          <input
            id="amount"
            type="number"
            className="block w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Wallet</label>
          <div className="space-y-3">
            {wallets.map((wallet) => (
              <div 
                key={wallet.id}
                className={`p-4 border rounded-xl cursor-pointer transition-all ${
                  selectedWallet === wallet.id 
                    ? 'border-blue-300 bg-blue-50 ring-2 ring-blue-100' 
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
                onClick={() => setSelectedWallet(wallet.id)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${wallet.color}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{wallet.name}</h4>
                      <p className="text-xs text-gray-500">Available balance</p>
                    </div>
                  </div>
                  <span className="font-semibold text-gray-900">₦{wallet.balance.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button
          type="submit"
          className={`w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors ${
            isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            `Pay ₦${amount || '0.00'}`
          )}
        </button>
      </form>
    </div>
  );
};