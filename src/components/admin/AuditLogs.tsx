// components/admin/AuditLogs.tsx
interface AuditLog {
    id: string;
    action: string;
    user: string;
    timestamp: string;
    ipAddress: string;
    status: 'success' | 'failed';
}

export default function AuditLogs() {
    const logs: AuditLog[] = [
        {
            id: '1',
            action: 'User login',
            user: 'john@example.com',
            timestamp: '2023-06-20T10:30:00Z',
            ipAddress: '192.168.1.1',
            status: 'success',
        },
        {
            id: '2',
            action: 'Wallet transfer',
            user: 'jane@example.com',
            timestamp: '2023-06-20T09:15:00Z',
            ipAddress: '203.0.113.42',
            status: 'success',
        },
        {
            id: '3',
            action: 'Failed login attempt',
            user: 'unknown',
            timestamp: '2023-06-19T22:05:00Z',
            ipAddress: '198.51.100.33',
            status: 'failed',
        },
    ];

    return (
        <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 border-b">
                <h2 className="text-lg font-medium text-gray-900">Audit Logs</h2>
            </div>
            <div className="divide-y divide-gray-200">
                {logs.map((log) => (
                    <div key={log.id} className="px-6 py-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">{log.action}</p>
                                <p className="text-sm text-gray-500">
                                    by {log.user} • {new Date(log.timestamp).toLocaleString()}
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-500">{log.ipAddress}</p>
                                <span
                                    className={`inline-block mt-1 text-xs px-2 py-1 rounded-full ${log.status === 'success'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-red-100 text-red-800'
                                        }`}
                                >
                                    {log.status}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="px-6 py-4 border-t text-right">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View all logs →
                </button>
            </div>
        </div>
    );
}