"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, User, LogOut, ChevronDown, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { setCredentials } from "@/store/slices/userSlice";
import { cn } from "@/utils/utils";
import { Icon } from "@iconify/react/dist/iconify.js";

export function Header({ onSidebarToggle }: { onSidebarToggle: () => void }) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const user = {
    first_name: 'John',
    last_name: 'Doe',
    email: 'john@example.com',
    phone: '+911234567890',
    isAdmin: true,
  }
  const isLoggedIn = true

  const userMenuRef = useRef<HTMLDivElement>(null);

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const logout = () => {
    dispatch(setCredentials({ token: null, user: null }));
    router.push("/login");
  };

  return (
    <div className="fixed md: ms-72 top-0 z-50 bg-gradient-to-br from-blue-600 to-indigo-800 shadow-md w-full flex items-center justify-between px-4 py-3 border-b border-green-500/20 bg-[#00b53f]">
      <div className="w-ful mx-auto px-4 py-4 flex items-center border border-red-500 w-full justify-between">
        <div className="flex items-center">
          <button
            aria-label="Toggle Menu"
            onClick={onSidebarToggle}
            className="md:hidden text-white hover:bg-green-500/20 p-1 rounded-md transition-colors"
          >
            <Menu size={24} />
          </button>

          <Link href="/" className="ml-2 md:ml-0 flex items-center">
            <span className="text-white font-bold text-xl md:text-2xl uppercase tracking-tight">
              {isLoggedIn && user ? `Hi, ${user.first_name}` : 'Simbrella'}
            </span>
          </Link>
        </div>

        <div className="flex items-center space-x-2 border border-red-500">
          {isLoggedIn && user ? (
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-2 bg-green-500/20 hover:bg-green-500/30 rounded-full px-3 py-1.5 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <User size={16} />
                </div>
                <ChevronDown
                  size={16}
                  className={`text-white transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {isUserMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                  >
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-800">{user.first_name} {user.last_name}</p>
                      <p className="text-xs text-gray-500 truncate">{user.email}</p>
                    </div>
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <Link
                      href="/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Settings
                    </Link>
                    <button
                      onClick={logout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <>
              <Button
                variant="ghost"
                className="hidden md:inline-flex text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <Link href="/login">Login</Link>
              </Button>
              <Button
                className="hidden md:inline-flex bg-white text-green-600 hover:bg-white/90"
                asChild
              >
                <Link href="/register">Register</Link>
              </Button>
            </>
          )}
        </div>
      </div>

    </div>
  );
}

export function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = {
    first_name: 'John',
    last_name: 'Doe',
    email: 'john@example.com',
    phone: '+911234567890',
    isAdmin: true,
  }
  const isLoggedIn = true
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Close sidebar when clicking outside on mobile
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
    { href: "/dashboard", label: "Dashboard", icon: "grid" },
    { href: "/wallets", label: "Wallets", icon: "wallet" },
    { href: "/transactions", label: "Transactions", icon: "list" },
    { href: "/send", label: "Send Money", icon: "send" },
    { href: "/receive", label: "Receive Money", icon: "receive" },
    { href: "/services", label: "Pay Services", icon: "service" },
    { href: "/analytics", label: "Analytics", icon: "analytics" },
  ];

  const adminItems = [
    { href: "/admin/users", label: "Manage Users", icon: "users" },
    { href: "/admin/services", label: "Manage Services", icon: "services" },
    { href: "/admin/logs", label: "System Logs", icon: "logs" },
  ];

  return (
    <AnimatePresence>
      {(isOpen || typeof window !== "undefined" && window.innerWidth >= 768) && (
        <motion.nav
          ref={sidebarRef}
          initial={{ x: -280, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -280, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed top-0 left-0 h-full w-72 overflow-y-auto no-scrollbar bg-gradient-to-b from-green-700 to-green-800 text-white shadow-xl z-40"
        >
          <div className="flex flex-col h-full p-4">
            {/* Mobile close button */}
            <button
              onClick={onClose}
              className="md:hidden absolute top-4 right-4 text-white/70 hover:text-white p-1"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>

            {/* Logo */}
            <div className="flex items-center p-4 mb-6">
              <Link href="/" className="flex items-center" onClick={onClose}>
                <span className="text-white font-bold text-xl uppercase tracking-tight">
                  Simbrella
                </span>
                <span className="ml-1 bg-white text-green-600 px-2 py-1 rounded-md text-sm font-bold">
                  VAULT
                </span>
              </Link>
            </div>

            {/* User profile */}
            {isLoggedIn && user && (
              <div className="flex items-center px-4 py-3 mb-6 bg-green-600/30 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <User size={18} />
                </div>
                <div>
                  <p className="font-medium">{user.first_name} {user.last_name}</p>
                  <p className="text-xs text-white/70 truncate">{user.email}</p>
                </div>
              </div>
            )}

            {/* Main navigation */}
            <ul className="flex-grow space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center px-4 py-3 rounded-lg hover:bg-green-600/50 transition-colors"
                    onClick={onClose}
                  >
                    <span className="w-5 h-5 mr-3 flex items-center justify-center">
                      <Icon icon={`mdi:${item.icon}`} className="w-5 h-5" />
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
                        className="flex items-center px-4 py-3 rounded-lg hover:bg-green-600/50 transition-colors"
                        onClick={onClose}
                      >
                        <span className="w-5 h-5 mr-3 flex items-center justify-center">
                          <Icon icon={`mdi:${item.icon}`} className="w-5 h-5" />
                        </span>
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </>
              )}
            </ul>

            {/* Footer */}
            <div className="mt-auto pt-4 border-t border-green-600/30">
              {isLoggedIn ? (
                <button
                  onClick={logout}
                  className="w-full flex items-center justify-center py-2 px-4 bg-red-500/20 hover:bg-red-500/30 rounded-lg transition-colors"
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
  );
}