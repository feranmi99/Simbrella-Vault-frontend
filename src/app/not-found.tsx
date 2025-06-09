"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Layout from "@/components/Baselayout/Layout/Layout";
import { usePathname } from "next/navigation";

const NotFound = () => {
    const pathname = usePathname();

    useEffect(() => {
        console.error("404 Error: User attempted to access:", pathname);
    }, [pathname]);


    return (
        <div className="flex flex-col">
            <Layout>
                <main className="flex-grow h-full flex items-center justify-center p-4">
                    <div className="text-center max-w-md">
                        <h1 className="text-6xl font-bold text-marketplace-primary mb-4">404</h1>
                        <p className="text-2xl font-semibold mb-4">Page Not Found</p>
                        <p className="text-gray-600 mb-8">
                            The page you're looking for doesn't exist or has been moved.
                        </p>

                        <Button asChild size="lg" className="bg-orange-400">
                            <Link href="/">Return to Home</Link>
                        </Button>
                    </div>
                </main>
            </Layout>
        </div>
    );
};

export default NotFound;
