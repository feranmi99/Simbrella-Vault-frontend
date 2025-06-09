// components/services/ServiceCategory.tsx
import { Service } from '@/types';
import ServiceCard from './ServiceCard';

interface ServiceCategoryProps {
  category: string;
  services: Service[];
  onSelect: (service: Service) => void;
}

export default function ServiceCategory({
  category,
  services,
  onSelect,
}: ServiceCategoryProps) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium text-gray-900 mb-4">{category}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}