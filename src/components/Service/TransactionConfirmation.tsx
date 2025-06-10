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
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-8 text-center">
                <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${success ? 'bg-green-100' : 'bg-red-100'
                    } mb-6`}>
                    {success ? (
                        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    ) : (
                        <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    )}
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {success ? 'Payment Successful!' : 'Payment Failed'}
                </h2>

                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    {success
                        ? `Your payment for ${transactionDetails?.name} has been processed successfully.`
                        : 'There was an issue processing your payment. Please try again.'}
                </p>

                {success && (
                    <div className="bg-gray-50 p-5 rounded-xl mb-8 text-left border border-gray-100">
                        <h3 className="font-medium text-gray-900 mb-3 text-sm uppercase tracking-wider">Transaction Details</h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-500">Service:</span>
                                <span className="font-medium text-gray-900">{transactionDetails?.name}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Transaction ID:</span>
                                <span className="font-medium text-gray-900">TX-{Math.random().toString(36).substring(2, 10).toUpperCase()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Date:</span>
                                <span className="font-medium text-gray-900">{new Date().toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Status:</span>
                                <span className={`font-medium ${success ? 'text-green-600' : 'text-red-600'
                                    }`}>
                                    {success ? 'Completed' : 'Failed'}
                                </span>
                            </div>
                        </div>
                    </div>
                )}

                <button
                    onClick={onBack}
                    className={`w-full py-3.5 px-4 ${success ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-700 hover:bg-gray-800'
                        } text-white font-medium rounded-lg transition-colors`}
                >
                    {success ? 'Make Another Payment' : 'Try Again'}
                </button>
            </div>
        </div>
    );
};