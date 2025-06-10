
"use client";

import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header';
import SideBarLayout from './SideBarLayout';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const Layout = ({ children, fotter = true }: { children: React.ReactNode, fotter?: boolean }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);

    const { user, token: isLoggedIn } = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <>
            <div className="flex min-h-screen bg-gray-50">
                <SideBarLayout
                    user={user}
                    isLoggedIn={!!isLoggedIn}
                    isOpen={sidebarOpen}
                    onClose={() => setSidebarOpen(false)} />
                <div className="flex flex-col flex-1 overflow-hidden">
                    <Header 
                    user={user}
                    isLoggedIn={!!isLoggedIn}
                    onSidebarToggle={() => setSidebarOpen(!sidebarOpen)} />
                    <main className="flex-1 py-4 mt-20 md:w-[calc(100%-18rem)] md:ms-72 bg-gradient-to-b from-white to-gray-50 overflow-auto">
                        {children}
                    </main>

                </div>
            </div>
        </>
    )
}

export default Layout