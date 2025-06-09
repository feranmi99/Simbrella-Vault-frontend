// app/(admin)/users/page.tsx
import UserTable from '@/components/admin/UserTable';
import { User } from '@/types';

const users: User[] = [
    {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        status: 'active',
        walletCount: 3,
        lastLogin: '2023-06-15T10:30:00Z',
    },
    {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        status: 'active',
        walletCount: 2,
        lastLogin: '2023-06-14T15:45:00Z',
    },
    {
        id: '3',
        name: 'Bob Johnson',
        email: 'bob@example.com',
        status: 'inactive',
        walletCount: 1,
        lastLogin: '2023-05-20T08:15:00Z',
    },
];

export default function AdminUsersPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">User Management</h1>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Add User
                </button>
            </div>
            <UserTable users={users} />
        </div>
    );
}