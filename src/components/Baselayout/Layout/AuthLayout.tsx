'use client';

import Image from 'next/image';
import { ReactNode } from 'react';
import { Icon } from '@iconify/react';

type LayoutProps = {
    children: ReactNode;
    isLogedIn?: boolean;
    colorSideBg?: string;
};

const AuthLayout = ({
    children,
    isLogedIn = false,
    colorSideBg = 'bg-gradient-to-br from-blue-600 to-indigo-800',
}: LayoutProps) => {
    return (
        <div className="min-h-screen w-full flex flex-col lg:flex-row">
            <div className={`w-full lg:w-1/2 ${colorSideBg} flex items-center justify-center p-12`}>
                <div className="text-white max-w-md">
                    <h1 className="text-4xl font-bold mb-6">Simbrella Vault</h1>
                    <p className="text-xl mb-8">
                        Your secure multi-wallet digital finance platform for seamless money management.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <div className="bg-gray-700 bg-opacity-20 p-3 rounded-full">
                                <Icon icon="mdi:wallet" className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Multi-Wallet Management</h3>
                                <p className="text-sm opacity-90">Create and switch between wallets easily</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-gray-700 bg-opacity-20 p-3 rounded-full">
                                <Icon icon="mdi:send-circle-outline" className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Instant Transfers</h3>
                                <p className="text-sm opacity-90">Send and receive money across wallets</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-gray-700 bg-opacity-20 p-3 rounded-full">
                                <Icon icon="mdi:chart-bar" className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Rich Analytics</h3>
                                <p className="text-sm opacity-90">Track your spending with powerful insights</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
                <div className="w-full max-w-md">
                    <div className="flex justify-center mb-8">
                        <div className="bg-blue-100 p-3 rounded-full lg:hidden">
                            <Icon icon="mdi:wallet" className="h-10 w-10 text-blue-600" />
                        </div>
                    </div>

                    {isLogedIn && (
                        <div className="mb-6 text-center">
                            <h2 className="text-2xl font-bold text-gray-700">Welcome back!</h2>
                            <p className="mt-2 text-gray-600">Continue your financial journey with us</p>
                        </div>
                    )}

                    <div className="bg-white rounded-lg">
                        {children}
                    </div>

                    <div className="mt-8 text-center text-sm text-gray-600">
                        <p>
                            By continuing, you agree to our{' '}
                            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                Terms of Service
                            </a>{' '}
                            and{' '}
                            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                Privacy Policy
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
