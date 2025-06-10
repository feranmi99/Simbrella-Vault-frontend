import React from 'react';
import { ServiceType } from './ServiceCard';

interface TransactionConfirmationProps {
  success: boolean;
  onBack: () => void;
  transactionDetails: ServiceType | null;
}

export const TransactionConfirmation: React.FC<TransactionConfirmationProps> = ({
  success,
  onBack,
  transactionDetails,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
        success ? 'bg-green-100' : 'bg-red-100'
      }`}>
        {success ? (
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </div>
      
      <h2 className="text-xl font-bold mt-4 mb-2">
        {success ? 'Payment Successful!' : 'Payment Failed'}
      </h2>
      
      <p className="text-gray-600 mb-6">
        {success 
          ? `Your payment for ${transactionDetails?.name} has been processed successfully.`
          : 'There was an issue processing your payment. Please try again.'}
      </p>
      
      {success && (
        <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
          <h3 className="font-medium mb-2">Transaction Details</h3>
          <div className="space-y-1 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Service:</span>
              <span>{transactionDetails?.name}</span>
            </div>
            <div className="flex justify-between">
              <span>Date:</span>
              <span>{new Date().toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Status:</span>
              <span className="text-green-600 font-medium">Completed</span>
            </div>
          </div>
        </div>
      )}
      
      <button
        onClick={onBack}
        className={`w-full py-3 px-4 ${
          success ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 hover:bg-gray-700'
        } text-white font-medium rounded-lg`}
      >
        {success ? 'Make Another Payment' : 'Try Again'}
      </button>
    </div>
  );
};