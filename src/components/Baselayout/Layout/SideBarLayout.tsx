import { Button } from '@/components/ui/button';
import { setCredentials } from '@/store/slices/userSlice';
import { Icon } from '@iconify/react/dist/iconify.js';
import { AnimatePresence, motion } from 'framer-motion';
import { LogOut, User, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';

const SideBarLayout = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const pathname = usePathname();
    const [hasMounted, setHasMounted] = React.useState(false);


    useEffect(() => {
        setHasMounted(true);
    }, []);


    const user = {
        first_name: 'John',
        last_name: 'Doe',
        email: 'john@example.com',
        phone: '+911234567890',
        isAdmin: true,
    }
    const isLoggedIn = true
    const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                onClose();
            }
        };
        if (isOpen) document.addEventListener("mousedown", handleClickOutside);
        else document.removeEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen, onClose]);

    const logout = () => {
        dispatch(setCredentials({ token: null, user: null }));
        router.push("/login");
        onClose();
    };

    const navItems = [
        { href: "/dashboard", label: "Dashboard", icon: "mdi:view-dashboard" },
        { href: "/wallets", label: "Wallets", icon: "mdi:wallet" },
        { href: "/transactions", label: "Transactions", icon: "grommet-icons:transaction" },
        { href: "/send-money", label: "Send Money", icon: "mdi:send" },
        { href: "/receive", label: "Receive Money", icon: "hugeicons:mail-receive-01" },
        { href: "/services", label: "Pay Services", icon: "grommet-icons:services" },
        { href: "/analytics", label: "Analytics", icon: "mdi:analytics" },
    ];

    const adminItems = [
        { href: "/admin/users", label: "Manage Users", icon: "ic:outline-manage-accounts" },
        { href: "/admin/services", label: "Manage Services", icon: "carbon:settings-services" },
        { href: "/admin/logs", label: "System Logs", icon: "tdesign:system-marked-filled" },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <>
            <AnimatePresence>
                {hasMounted && (isOpen || window.innerWidth >= 768) && (
                    <motion.nav
                        ref={sidebarRef}
                        initial={{ x: -280, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -280, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed top-0 left-0 h-full w-72 overflow-y-auto no-scrollbar bg-gradient-to-b from-blue-600 to-indigo-800 text-white shadow-xl z-40"
                    >
                        <div className="flex flex-col h-full px-4">
                            {/* <button
                                onClick={onClose}
                                className="md:hidden absolute top-4 right-4 text-white/70 hover:text-white p-1"
                                aria-label="Close menu"
                            >
                                <X size={20} />
                            </button> */}

                            <div className="flex items-center p-4 mb-6 mx-auto">
                                <div className="w-24 h-24 flex items-center justify-center bg-white text-green-600 font-bold text-3xl italic rounded-full uppercase">
                                    SV
                                </div>
                            </div>

                            <ul className="flex-grow space-y-1">
                                {navItems.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className={`flex items-center px-4 py-3 rounded-lg transition-colors ${isActive(item.href)
                                                ? 'bg-white/20 font-semibold'
                                                : 'hover:bg-slate-400/50'
                                                }`}
                                            onClick={onClose}
                                        >
                                            <span className="w-5 h-5 mr-3 flex items-center justify-center">
                                                <Icon icon={`${item.icon}`} className="w-5 h-5" />
                                            </span>
                                            <span>{item.label}</span>
                                        </Link>
                                    </li>
                                ))}

                                {isLoggedIn && user?.isAdmin && (
                                    <>
                                        <li className="mt-6 mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-white/50">
                                            Admin
                                        </li>
                                        {adminItems.map((item) => (
                                            <li key={item.href}>
                                                <Link
                                                    href={item.href}
                                                    className={`flex items-center px-4 py-3 rounded-lg transition-colors ${isActive(item.href)
                                                        ? 'bg-white/20 font-semibold'
                                                        : 'hover:bg-slate-400/50'
                                                        }`} onClick={onClose}
                                                >
                                                    <span className="w-5 h-5 mr-3 flex items-center justify-center">
                                                        <Icon icon={`${item.icon}`} className="w-5 h-5" />
                                                    </span>
                                                    <span>{item.label}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </>
                                )}
                            </ul>
                            {isLoggedIn && user && (
                                <div className="flex items-center px-4 py-3 mb-6 bg-slate-300/30 rounded-lg border-t border-green-600/30 mt-4">
                                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                                        <User size={18} />
                                    </div>
                                    <div>
                                        <p className="font-medium">{user.first_name} {user.last_name}</p>
                                        <p className="text-xs text-white/70 truncate">{user.email}</p>
                                    </div>
                                </div>
                            )}
                            <div className="mt-auto pt-4 border-t border-green-600/30">
                                {isLoggedIn ? (
                                    <button
                                        onClick={logout}
                                        className="w-full flex items-center justify-center py-2 px-4 bg-red-500/80 hover:cursor-pointer hover:bg-red-500/30 rounded-lg transition-colors"
                                    >
                                        <LogOut size={16} className="mr-2" />
                                        Logout
                                    </button>
                                ) : (
                                    <div className="space-y-2">
                                        <Button
                                            className="w-full bg-white text-green-600 hover:bg-white/90"
                                            asChild
                                        >
                                            <Link href="/register" onClick={onClose}>
                                                Register
                                            </Link>
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="w-full text-white border-white/30 hover:bg-white/10"
                                            asChild
                                        >
                                            <Link href="/login" onClick={onClose}>
                                                Login
                                            </Link>
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    )
}

export default SideBarLayout