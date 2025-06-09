
"use client";

import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import { Header, Sidebar } from '../Header/Header';

const Layout = ({ children, fotter = true }: { children: React.ReactNode, fotter?: boolean }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <div className="flex min-h-screen bg-gray-50">
                <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                <div className="flex flex-col flex-1 overflow-hidden">
                    <Header onSidebarToggle={() => setSidebarOpen(!sidebarOpen)} />
                    <main className="flex-1 p-4 ms-72 md:p-6 bg-gradient-to-b from-white to-gray-50 overflow-auto">
                        {children}
                    </main>
                    
                </div>
            </div>
        </>
    )
}

export default Layout