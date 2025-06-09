import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Layout = ({ children, fotter = true }: { children: React.ReactNode, fotter?: boolean }) => {
    return (
        <>
            <Header />
            <div className="flex flex-col min-h-screen max-w-[1440px] h-full mx-auto">
                <div className="flex-grow flex justify-center items-center w-full">
                    {children}
                </div>
            </div>
            {fotter && <Footer />}  
        </>
    )
}

export default Layout