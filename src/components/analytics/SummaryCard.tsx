import React from 'react';

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
    <div className="bg-white p-6 rounded-lg shadow">
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
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        ) : trend === 'down' ? (
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        ) : null}
        <span>{percentage} {trend !== 'neutral' && (trend === 'up' ? 'increase' : 'decrease')}</span>
      </div>
    </div>
  );
};