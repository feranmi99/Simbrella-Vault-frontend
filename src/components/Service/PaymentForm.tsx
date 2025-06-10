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

  // Mocked wallets data
  const wallets = [
    { id: 'primary', name: 'Primary Wallet', balance: 50000 },
    { id: 'savings', name: 'Savings Wallet', balance: 150000 },
    { id: 'business', name: 'Business Wallet', balance: 75000 },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      // Randomly determine success/failure for demo purposes
      Math.random() > 0.2 ? onSuccess() : onError();
    }, 1500);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-4 mb-6">
        <button 
          onClick={onBack}
          className="text-blue-600 hover:text-blue-800"
        >
          &larr; Back
        </button>
        <h2 className="text-xl font-bold text-gray-800">Pay for {service.name}</h2>
      </div>
      
      <form onSubmit={handleSubmit}>
        {service.name.includes('Airtime') || service.name.includes('Data') ? (
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              id="phoneNumber"
              type="tel"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
        ) : (
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="meterNumber">
              Meter Number
            </label>
            <input
              id="meterNumber"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter meter number"
              value={meterNumber}
              onChange={(e) => setMeterNumber(e.target.value)}
              required
            />
          </div>
        )}
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="amount">
            Amount
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₦</span>
            <input
              id="amount"
              type="number"
              className="w-full pl-8 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Select Wallet</label>
          <div className="space-y-2">
            {wallets.map((wallet) => (
              <div 
                key={wallet.id}
                className={`p-3 border rounded-lg cursor-pointer ${
                  selectedWallet === wallet.id 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
                onClick={() => setSelectedWallet(wallet.id)}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{wallet.name}</span>
                  <span className="text-gray-600">₦{wallet.balance.toLocaleString()}</span>
                </div>
                {selectedWallet === wallet.id && (
                  <div className="mt-1 text-xs text-blue-600">Selected</div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <button
          type="submit"
          className={`w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg ${
            isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Processing...' : 'Make Payment'}
        </button>
      </form>
    </div>
  );
};