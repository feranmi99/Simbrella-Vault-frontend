import React from 'react';

const QuickActions = () => {
  const actions = [
    { icon: '↗', label: 'Send', color: 'bg-green-100 text-green-800' },
    { icon: '↙', label: 'Receive', color: 'bg-blue-100 text-blue-800' },
    { icon: '⚡', label: 'Airtime', color: 'bg-purple-100 text-purple-800' },
    { icon: '📊', label: 'Data', color: 'bg-yellow-100 text-yellow-800' },
    { icon: '💡', label: 'Utilities', color: 'bg-red-100 text-red-800' },
    { icon: '📈', label: 'Analytics', color: 'bg-indigo-100 text-indigo-800' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
      
      <div className="grid grid-cols-3 gap-3">
        {actions.map((action, index) => (
          <button 
            key={index}
            className={`flex flex-col items-center justify-center p-4 rounded-lg ${action.color} hover:opacity-90 transition`}
          >
            <span className="text-xl mb-1">{action.icon}</span>
            <span className="text-sm font-medium">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;