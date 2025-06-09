"use client";

import { ThemeProvider } from "@/components/ui/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { Provider as ReduxProvider } from 'react-redux';
import { store } from "@/store";

export default function Provider({ children }: { children: ReactNode }) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <ThemeProvider defaultTheme="light" storageKey="marketplace-theme">
            <QueryClientProvider client={queryClient}>
                <TooltipProvider>
                    <Toaster />
                    <Sonner />
                    <ReduxProvider store={store}>
                        {children}
                    </ReduxProvider>
                </TooltipProvider>
            </QueryClientProvider>
        </ThemeProvider>
    );
}