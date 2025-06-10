"use client";

import React, { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, User, LogOut, ChevronDown, X, Settings, CreditCard, HelpCircle } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { setCredentials } from "@/store/slices/userSlice";
import { cn } from "@/utils/utils";
import { Icon } from "@iconify/react";
import { Badge } from "@/components/ui/badge";
import { IUser } from "@/types/user-types";

const Header = ({
  onSidebarToggle,
  user,
  isLoggedIn
}: {
  onSidebarToggle: () => void,
  user: IUser | null,
  isLoggedIn: boolean
}) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isNotificationsBellOpen, setIsNotificationsBellOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(3);

  const router = useRouter();
  const dispatch = useDispatch();

  const userMenuRef = useRef<HTMLDivElement>(null);
  const notificationsBellRef = useRef<HTMLDivElement>(null);

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (userMenuRef.current && !userMenuRef.current.contains(target)) {
        setIsUserMenuOpen(false);
      }

      if (notificationsBellRef.current && !notificationsBellRef.current.contains(target)) {
        setIsNotificationsBellOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    dispatch(setCredentials({ token: null, user: null }));
    router.push("/login");
  };

  const menuItems = [
    {
      label: "Profile",
      icon: <User className="w-4 h-4" />,
      path: "/profile"
    },
    {
      label: "Settings",
      icon: <Settings className="w-4 h-4" />,
      path: "/settings"
    },
    {
      label: "Billing",
      icon: <CreditCard className="w-4 h-4" />,
      path: "/billing"
    },
    {
      label: "Help & Support",
      icon: <HelpCircle className="w-4 h-4" />,
      path: "/support"
    },
    {
      label: "Logout",
      icon: <LogOut className="w-4 h-4" />,
      action: handleLogout,
      danger: true
    }
  ];


  const markAsRead = (id: number) => {
    // In a real app, this would call an API
    const updatedNotifications = notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    );
    setUnreadCount(updatedNotifications.filter(n => !n.read).length);
  };

  const markAllAsRead = () => {
    // In a real app, this would call an API
    notifications.forEach(notification => notification.read = true);
    setUnreadCount(0);
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
              <p className="font-semibold text-xl">{`Hello, ${user?.first_name} 👋🏾`}</p>
              <p className="text-sm text-white/70">Welcome back!</p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {isLoggedIn && user && (
            <div className="relative">
              <button
                onClick={() => setIsNotificationsBellOpen(!isNotificationsBellOpen)}
                className="p-2 rounded-full cursor-pointer bg-slate-300 hover:bg-slate-400 relative"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                {unreadCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                    {unreadCount}
                  </span>
                )}
              </button>
              <AnimatePresence>
                {isNotificationsBellOpen && (
                  <motion.div
                    ref={notificationsBellRef}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg overflow-hidden z-50 border border-gray-200">
                    <div className="px-4 py-2 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
                      <h3 className="text-lg font-medium text-gray-800">Notifications</h3>
                      <button
                        onClick={markAllAsRead}
                        className="text-sm text-blue-600 hover:text-blue-800"
                      >
                        Mark all as read
                      </button>
                    </div>

                    <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
                      {notifications.length > 0 ? (
                        notifications.map((notification) => (
                          <div
                            key={notification.id}
                            className={`px-4 py-3 hover:bg-gray-50 cursor-pointer ${!notification.read ? 'bg-blue-50' : ''}`}
                            onClick={() => markAsRead(notification.id)}
                          >
                            <div className="flex justify-between">
                              <h4 className="font-medium text-gray-900">{notification.title}</h4>
                              {!notification.read && (
                                <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                            <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                          </div>
                        ))
                      ) : (
                        <div className="px-4 py-6 text-center">
                          <p className="text-gray-500">No notifications</p>
                        </div>
                      )}
                    </div>

                    <div className="px-4 py-2 bg-gray-50 border-t border-gray-200 text-center">
                      <button className="text-sm text-blue-600 hover:text-blue-800">
                        View all notifications
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
          {isLoggedIn && user ? (
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-2 cursor-pointer bg-slate-300 hover:bg-slate-400 rounded-full px-3 py-1.5 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
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
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute right-0 mt-2 w-56 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-50 overflow-hidden"
                  >
                    <div className="p-4 border-b border-slate-400">
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-sm font-medium line-clamp-1 text-gray-900">
                            {user.first_name} {user.last_name}
                          </p>
                          <p className="text-xs line-clamp-1 text-gray-500 truncate">
                            {user.email}
                          </p>
                          {user?.role === 'admin' && (
                            <Badge variant="secondary" className="mt-1 text-xs">
                              Admin
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="p-1">
                      {menuItems.map((item, index) => (
                        <React.Fragment key={index}>
                          {item.path ? (
                            <Link
                              href={item.path}
                              className={cn(
                                "flex w-full items-center gap-2 rounded px-3 py-2 text-sm",
                                "text-gray-700 hover:bg-gray-100",
                                item.danger && "hover:bg-red-50 text-red-600"
                              )}
                              onClick={() => setIsUserMenuOpen(false)}
                            >
                              {item.icon}
                              {item.label}
                            </Link>
                          ) : (
                            <button
                              onClick={() => {
                                item.action?.();
                                setIsUserMenuOpen(false);
                              }}
                              className={cn(
                                "flex w-full items-center gap-2 rounded px-3 py-2 text-sm",
                                "text-gray-700 hover:bg-gray-100",
                                item.danger && "hover:bg-red-50 text-red-600"
                              )}
                            >
                              {item.icon}
                              {item.label}
                            </button>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
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


const notifications = [
    {
        id: 1,
        title: "Payment Received",
        message: "You received $250 from John Doe",
        time: "2 hours ago",
        read: false
    }, {
        id: 2,
        title: "Bill Payment",
        message: "Your electricity bill was paid successfully",
        time: "1 day ago",
        read: false
    }, {
        id: 3,
        title: "Wallet Update",
        message: "New features added to your business wallet",
        time: "3 days ago",
        read: true
    },
];

