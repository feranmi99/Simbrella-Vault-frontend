
"use client";

import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import Header  from '../Header/Header';
import SideBarLayout from './SideBarLayout';

const Layout = ({ children, fotter = true }: { children: React.ReactNode, fotter?: boolean }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <div className="flex min-h-screen bg-gray-50">
                <SideBarLayout isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                <div className="flex flex-col flex-1 overflow-hidden">
                    <Header onSidebarToggle={() => setSidebarOpen(!sidebarOpen)} />
                    <main className="flex-1 py-4 mt-20 md:w-[calc(100%-18rem)] md:ms-72 bg-gradient-to-b from-white to-gray-50 overflow-auto">
                        {children}
                    </main>
                    
                </div>
            </div>
        </>
    )
}

export default Layout