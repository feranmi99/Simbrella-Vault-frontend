'use client';

import React from 'react'
import Image from 'next/image';

type LayoutProps = {
    children: React.ReactNode;
    isLogedIn: boolean;
};

const ListingLayout: React.FC<LayoutProps> = ({ children, isLogedIn = false }) => {
    return (
        <>
            {/* <div className='py-6 px-6 flex xl:h-[90vh] max-w-[1500px] gap- mx-[auto] w-full'>
                    <div className={`hidden lg:flex lg:w-[1200px] relative h-full p-3 justify-center`}>
                        <Image
                            src={"/Image/trade.jpg"}
                            alt=''
                            width={755}
                            height={937}
                            className=' rounded-l-4xl'
                        />
                    </div>
                    <div className={`w-full flex justify-center h-full`}>
                        <div className='w-full md:w-[60%] md:mx-auto lg:mx-0 lg:w-[100%] border-y border-r  border-slate-200 shadow-lg rounded-2xl mt-4'>
                            {children}
                        </div>
                    </div>
                </div>
            */}
            <div className='md:px-6 px-2 flex gap-6 mx-[auto] w-full mb-10'>
                <div className={`w-full mx-auto max-w-[900px] h-full border shadow border-slate-200 rounded-2xl mt-4`}>
                    {children}
                </div>
            </div>

        </>
    )
}

export default ListingLayout