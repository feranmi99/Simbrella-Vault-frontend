// components/services/ServiceCard.tsx
import { Service } from '@/types';

export default function ServiceCard({
    service,
    onSelect,
}: {
    service: Service;
    onSelect: (service: Service) => void;
}) {
    return (
        <div
            onClick={() => onSelect(service)}
            className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-md transition-shadow"
        >
            <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                    <service.icon className="h-6 w-6" />
                </div>
                <div>
                    <h3 className="font-medium text-gray-900">{service.name}</h3>
                    <p className="text-sm text-gray-500">{service.description}</p>
                </div>
            </div>
        </div>
    );
}