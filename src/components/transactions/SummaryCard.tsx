import React from 'react';
import { Icon } from '@iconify/react';

interface SummaryCardProps {
  title: string;
  value: number;
  trend: 'up' | 'down' | 'neutral';
  percentage: string;
  icon: React.ReactNode;
}

export const SummaryCard: React.FC<SummaryCardProps> = ({ 
  title, 
  value, 
  trend, 
  percentage, 
  icon 
}) => {
  const isCurrency = ['Total Income', 'Total Expenses', 'Net Savings'].includes(title);
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-bold mt-1">
            {isCurrency ? `₦${value.toLocaleString()}` : value}
          </p>
        </div>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-50">
          {icon}
        </div>
      </div>
      <div className={`mt-3 flex items-center text-sm ${
        trend === 'up' ? 'text-green-600' : 
        trend === 'down' ? 'text-red-600' : 'text-gray-600'
      }`}>
        {trend === 'up' ? (
          <Icon icon="heroicons:arrow-trending-up" className="w-4 h-4 mr-1" />
        ) : trend === 'down' ? (
          <Icon icon="heroicons:arrow-trending-down" className="w-4 h-4 mr-1" />
        ) : (
          <Icon icon="heroicons:minus-small" className="w-4 h-4 mr-1" />
        )}
        <span>{percentage} {trend !== 'neutral' && (trend === 'up' ? 'increase' : 'decrease')}</span>
      </div>
    </div>
  );
};