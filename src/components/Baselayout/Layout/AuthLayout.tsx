'use client';

import Image from 'next/image';

type LayoutProps = {
    children: React.ReactNode;
    isLogedIn: boolean;
};

const AuthLayout: React.FC<LayoutProps> = ({ children, isLogedIn = false }) => {
    return (
        <div className='py-6 px-6 lg:px-8 flex xl:h-[100vh] max-w-[1500px] mx-[auto]'>
            <div
                className={`w-full lg:w-[40%] xl:pl-14 max-w-lg mx-auto h-full ${isLogedIn ? 'pt-10' : ''
                    }`}>
                <div className='w-full md:w-[60%] md:mx-auto lg:mx-0  lg:w-[90%] xl:w-[65%]'>

                    {isLogedIn && <p>Welcome back</p>}
                    <div>{children}</div>
                </div>
            </div>
            <div
                className={`hidden lg:flex lg:w-[780px] relative h-full p-3 justify-center rounded-3xl'
                    }`}>
                <Image
                    src={"/Image/trade.jpg"}
                    alt=''
                    width={755}
                    height={937}
                />
            </div>
        </div>
    );
};

export default AuthLayout;