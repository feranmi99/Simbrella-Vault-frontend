import { Button } from '@/components/ui/button';
import { RootState } from '@/store';
import { setCredentials } from '@/store/slices/userSlice';
import { IUser } from '@/types/user-types';
import { Icon } from '@iconify/react/dist/iconify.js';
import { AnimatePresence, motion } from 'framer-motion';
import { LogOut, User, X, ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const SideBarLayout = ({
    isOpen,
    onClose,
    user,
    isLoggedIn
}: {
    isOpen: boolean;
    onClose: () => void,
    user: IUser | null,
    isLoggedIn: boolean
}) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const pathname = usePathname();
    const [hasMounted, setHasMounted] = React.useState(false);
    const [expandedSection, setExpandedSection] = useState<string | null>(null);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (window.innerWidth < 768 &&
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("click", handleClickOutside);
            return () => document.removeEventListener("click", handleClickOutside);
        }
    }, [isOpen, onClose]);

    const logout = () => {
        dispatch(setCredentials({ token: null, user: null }));
        router.push("/login");
    };

    const isActive = (path: string) => pathname === path;

    const toggleSection = (section: string) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    const navSections = [
        {
            title: "Financial Hub",
            items: [
                { href: "/dashboard", label: "Dashboard", icon: "mdi:view-dashboard" },
                { href: "/wallets", label: "Digital Wallets", icon: "mdi:wallet" },
                { href: "/transactions", label: "Transaction History", icon: "grommet-icons:transaction" },
            ]
        },
        {
            title: "Payment Services",
            items: [
                { href: "/send-money", label: "Money Transfer", icon: "mdi:send" },
                { href: "/services", label: "Bill Payments", icon: "grommet-icons:services" },
                { href: "/exchange", label: "Currency Exchange", icon: "fa6-solid:money-bill-transfer" },
            ]
        },
        {
            title: "Analytics",
            items: [
                { href: "/analytics", label: "Spending Insights", icon: "mdi:analytics" },
                { href: "/reports", label: "Financial Reports", icon: "material-symbols:report" },
            ]
        }
    ];

    const adminItems = [
        { href: "/admin/users", label: "User Management", icon: "ic:outline-manage-accounts" },
        { href: "/admin/services", label: "Service Configuration", icon: "carbon:settings-services" },
        { href: "/admin/logs", label: "System Audit Logs", icon: "tdesign:system-marked-filled" },
    ];

    return (
        <AnimatePresence>
            {hasMounted && isOpen && (
                <motion.nav
                    ref={sidebarRef}
                    initial={{ x: -280, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -280, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className={`fixed top-0 left-0 h-full w-72 overflow-y-auto no-scrollbar bg-gradient-to-b from-slate-900 to-slate-800 text-white shadow-xl z-40 ${isOpen ? 'block' : 'hidden'} md:block`}
                >
                    <div className="flex flex-col h-full px-4 md:mt-0 mt-20">
                        <div className="flex flex-col items-center py-6 mb-2 border-b border-slate-700">
                            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl mb-3">
                                <Icon icon="mdi:shield-lock" className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                                Simbrella Vault
                            </h2>
                            <p className="text-xs text-slate-400 mt-1">Payment Orchestration System</p>
                        </div>
                        <ul className="flex-grow space-y-2 mt-4">
                            {navSections.map((section) => (
                                <li key={section.title}>
                                    <button
                                        onClick={() => toggleSection(section.title)}
                                        className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                                    >
                                        <span>{section.title}</span>
                                        {expandedSection === section.title ? (
                                            <ChevronDown size={16} />
                                        ) : (
                                            <ChevronRight size={16} />
                                        )}
                                    </button>
                                    {(expandedSection === section.title || window.innerWidth >= 768) && (
                                        <motion.ul
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="pl-2"
                                        >
                                            {section.items.map((item) => (
                                                <li key={item.href}>
                                                    <Link
                                                        href={item.href}
                                                        className={`flex items-center px-4 py-2.5 rounded-lg text-sm ${isActive(item.href)
                                                            ? 'bg-blue-600/20 text-blue-400 font-medium border-l-2 border-blue-400'
                                                            : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                                                            }`}
                                                    >
                                                        <span className="w-5 h-5 mr-3 flex items-center justify-center">
                                                            <Icon icon={item.icon} className="w-4 h-4" />
                                                        </span>
                                                        <span>{item.label}</span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </motion.ul>
                                    )}
                                </li>
                            ))}
                            {isLoggedIn && user?.role !== 'admin' && (
                                <>
                                    <li className="mt-6 mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                        Administration
                                    </li>
                                    {adminItems.map((item) => (
                                        <li key={item.href}>
                                            <Link
                                                href={item.href}
                                                className={`flex items-center px-4 py-2.5 rounded-lg text-sm ${isActive(item.href)
                                                    ? 'bg-blue-600/20 text-blue-400 font-medium border-l-2 border-blue-400'
                                                    : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                                                    }`}
                                            >
                                                <span className="w-5 h-5 mr-3 flex items-center justify-center">
                                                    <Icon icon={item.icon} className="w-4 h-4" />
                                                </span>
                                                <span>{item.label}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </>
                            )}
                        </ul>
                        {isLoggedIn && user && (
                            <div className="mt-auto pt-4 border-t border-slate-700">
                                <div className="flex items-center px-4 py-3 rounded-lg bg-slate-800/50 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center mr-3">
                                        <span className="text-white text-sm font-medium">
                                            {user.first_name.charAt(0)}{user.last_name.charAt(0)}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm">{user.first_name} {user.last_name}</p>
                                        <p className="text-xs text-slate-400 truncate">{user.email}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={logout}
                                    className="w-full flex items-center justify-center py-2 px-4 rounded-lg bg-gradient-to-r from-red-600 to-red-500 text-white text-sm font-medium hover:opacity-90 transition-opacity mb-4"
                                >
                                    <LogOut size={16} className="mr-2" />
                                    Sign Out
                                </button>
                            </div>
                        )}
                        {!isLoggedIn && (
                            <div className="mt-auto pt-4 border-t border-slate-700 space-y-3 pb-4">
                                <Button
                                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white"
                                    asChild
                                >
                                    <Link href="/register" onClick={onClose}>
                                        Create Account
                                    </Link>
                                </Button>
                                <Button
                                    variant="outline"
                                    className="w-full text-white border-slate-600 hover:bg-slate-800/50"
                                    asChild
                                >
                                    <Link href="/login" onClick={onClose}>
                                        Sign In
                                    </Link>
                                </Button>
                            </div>
                        )}
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
    )
}

export default SideBarLayout