import React, { useState } from 'react';

const NotificationsBell = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [unreadCount, setUnreadCount] = useState(3);

    const notifications = [
        {
            id: 1,
            title: "Payment Received",
            message: "You received $250 from John Doe",
            time: "2 hours ago",
            read: false
        },
        {
            id: 2,
            title: "Bill Payment",
            message: "Your electricity bill was paid successfully",
            time: "1 day ago",
            read: false
        },
        {
            id: 3,
            title: "Wallet Update",
            message: "New features added to your business wallet",
            time: "3 days ago",
            read: true
        },
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
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
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

            {isOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg overflow-hidden z-50 border border-gray-200">
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
                </div>
            )}
        </div>
    );
};

export default NotificationsBell;