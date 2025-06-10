import React from 'react';

export type ServiceType = {
  id: number;
  name: string;
  icon: string;
  color?: string;
};

interface ServiceCardProps {
  service: ServiceType;
  onClick: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  return (
    <div 
      className={`group relative overflow-hidden rounded-xl p-5 shadow-xs border border-gray-100 hover:border-blue-200 transition-all cursor-pointer hover:shadow-md ${service.color || 'bg-white'}`}
      onClick={onClick}
    >
      <div className="flex items-center space-x-4">
        <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg ${service.color?.replace('bg-', 'bg-opacity-30 ') || 'bg-gray-100'}`}>
          <img 
            src={service.icon} 
            alt={service.name} 
            className="w-7 h-7 object-contain"
          />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {service.name}
          </h3>
          <p className="text-sm text-gray-500 mt-1">Tap to proceed</p>
        </div>
      </div>
      <div className="absolute top-3 right-3 text-gray-300 group-hover:text-blue-400 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
};