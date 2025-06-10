import React from 'react';

export type ServiceType = {
  id: number;
  name: string;
  icon: string;
};

interface ServiceCardProps {
  service: ServiceType;
  onClick: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
          <img 
            src={service.icon} 
            alt={service.name} 
            className="w-8 h-8 object-contain"
          />
        </div>
        <div>
          <h3 className="font-medium text-gray-800">{service.name}</h3>
          <p className="text-sm text-gray-500">Select to proceed</p>
        </div>
      </div>
    </div>
  );
};