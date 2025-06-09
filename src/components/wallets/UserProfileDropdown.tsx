import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const UserProfileDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    // Mock user data - in a real app this would come from your auth context
    const user = {
        name: "John Doe",
        email: "john@example.com",
        avatar: "/default-avatar.png", // You can use a default avatar or fetch from user data
        role: "Premium User"
    };

    const handleLogout = () => {
        // In a real app, this would call your logout API and clear auth state
        console.log("Logging out...");
        router.push('/login');
    };

    const menuItems = [
        { label: "Profile", icon: "👤", path: "/profile" },
        { label: "Settings", icon: "⚙️", path: "/settings" },
        { label: "Billing", icon: "💳", path: "/billing" },
        { label: "Help & Support", icon: "❓", path: "/support" },
        { label: "Logout", icon: "🚪", action: handleLogout }
    ];

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 focus:outline-none"
            >
                <div className="relative">
                    <img
                        src={user.avatar}
                        alt="User profile"
                        className="h-8 w-8 rounded-full object-cover"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = '/default-avatar.png';
                        }}
                    />
                    <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full bg-green-500 ring-2 ring-white"></span>
                </div>
                <span className="hidden md:inline-block text-sm font-medium text-gray-700">{user.name}</span>
                <svg
                    className={`h-4 w-4 text-gray-500 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>

            {isOpen && (
                <div
                    className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg overflow-hidden z-50 border border-gray-200"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="px-4 py-3 border-b border-gray-200">
                        <p className="text-sm font-medium text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-500 truncate">{user.email}</p>
                        <p className="text-xs mt-1">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                {user.role}
                            </span>
                        </p>
                    </div>

                    <div className="py-1">
                        {menuItems.map((item, index) => (
                            <React.Fragment key={index}>
                                {item.path ? (
                                    <a
                                        href={item.path}
                                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span className="mr-2">{item.icon}</span>
                                        {item.label}
                                    </a>
                                ) : (
                                    <button
                                        onClick={() => {
                                            item.action?.();
                                            setIsOpen(false);
                                        }}
                                        className="w-full text-left flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        <span className="mr-2">{item.icon}</span>
                                        {item.label}
                                    </button>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    <div className="px-4 py-2 border-t border-gray-200 bg-gray-50">
                        <p className="text-xs text-gray-500">Simbrella Vault v1.0.0</p>
                    </div>
                </div>
            )}

            {/* Click outside to close */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </div>
    );
};

export default UserProfileDropdown;