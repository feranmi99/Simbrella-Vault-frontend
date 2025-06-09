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

const Header = ({ onSidebarToggle }: { onSidebarToggle: () => void }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const user = {
    first_name: 'Johnson',
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
    <div className="fixed md:w-[calc(100%-18rem)] md:ms-72 top-0 z-50 bg-gradient-to-br from-blue-600 to-indigo-800 shadow-md w-full flex items-center justify-between md:px-4 px-2 md:py-3 py-2 border-b border-green-500/20 bg-[#00b53f]">
      <div className="px-4 py-4 flex items-center w-full justify-between">
        <div className="flex items-center">
          <button
            aria-label="Toggle Menu"
            onClick={onSidebarToggle}
            className="md:hidden text-white hover:bg-green-500/20 p-1 rounded-md transition-colors"
          >
            <Menu size={24} />
          </button>
          <div className="hidden md:flex items-center space-x-3 text-white">
            <div>
              <p className="font-semibold text-xl">{`Hello, ${user.first_name} 👋🏾`}</p>
              <p className="text-sm text-white/70">Welcome back!</p>
            </div>
          </div>

        </div>
        <div className="flex items-center space-x-2">
          {isLoggedIn && user ? (
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-2 cursor-pointer bg-green-500/20 hover:bg-green-500/30 rounded-full px-3 py-1.5 transition-colors"
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

export default Header;