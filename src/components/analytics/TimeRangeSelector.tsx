import React from 'react';

interface TimeRangeSelectorProps {
  timeRange: 'week' | 'month' | 'year';
  onChange: (range: 'week' | 'month' | 'year') => void;
}

export const TimeRangeSelector: React.FC<TimeRangeSelectorProps> = ({ timeRange, onChange }) => {
  return (
    <div className="flex bg-gray-100 rounded-lg p-1">
      <button
        className={`px-3 py-1 text-sm rounded-md ${timeRange === 'week' ? 'bg-white shadow' : 'text-gray-600'}`}
        onClick={() => onChange('week')}
      >
        Weekly
      </button>
      <button
        className={`px-3 py-1 text-sm rounded-md ${timeRange === 'month' ? 'bg-white shadow' : 'text-gray-600'}`}
        onClick={() => onChange('month')}
      >
        Monthly
      </button>
      <button
        className={`px-3 py-1 text-sm rounded-md ${timeRange === 'year' ? 'bg-white shadow' : 'text-gray-600'}`}
        onClick={() => onChange('year')}
      >
        Yearly
      </button>
    </div>
  );
};