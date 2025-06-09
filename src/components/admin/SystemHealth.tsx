// components/admin/SystemHealth.tsx
import { Server, Database, Cpu, HardDrive } from 'lucide-react';

interface HealthItem {
  name: string;
  status: 'healthy' | 'degraded' | 'unhealthy';
  icon: React.ReactNode;
  value: string;
}

export default function SystemHealth() {
  const healthData: HealthItem[] = [
    {
      name: 'API Server',
      status: 'healthy',
      icon: <Server className="h-5 w-5" />,
      value: '100% uptime',
    },
    {
      name: 'Database',
      status: 'healthy',
      icon: <Database className="h-5 w-5" />,
      value: 'Normal load',
    },
    {
      name: 'CPU',
      status: 'healthy',
      icon: <Cpu className="h-5 w-5" />,
      value: '32% usage',
    },
    {
      name: 'Storage',
      status: 'healthy',
      icon: <HardDrive className="h-5 w-5" />,
      value: '45% used',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'bg-green-100 text-green-800';
      case 'degraded':
        return 'bg-yellow-100 text-yellow-800';
      case 'unhealthy':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-6">System Health</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {healthData.map((item) => (
          <div
            key={item.name}
            className="border rounded-lg p-4 flex items-start space-x-3"
          >
            <div
              className={`p-2 rounded-full ${getStatusColor(item.status)}`}
            >
              {item.icon}
            </div>
            <div>
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.value}</p>
              <span
                className={`inline-block mt-1 text-xs px-2 py-1 rounded-full ${getStatusColor(
                  item.status
                )}`}
              >
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}