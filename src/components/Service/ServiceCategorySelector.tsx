import React from 'react';

interface ServiceCategorySelectorProps {
    activeCategory: string;
    onSelectCategory: (category: string) => void;
}

const categories = [
    { id: 'airtime', name: 'Airtime', icon: '📱' },
    { id: 'data', name: 'Data', icon: '🌐' },
    { id: 'electricity', name: 'Electricity', icon: '💡' },
];

export const ServiceCategorySelector: React.FC<ServiceCategorySelectorProps> = ({
    activeCategory,
    onSelectCategory,
}) => {
    return (
        <div className="flex space-x-2 overflow-x-auto pb-2 -mx-1 px-1">
            {categories.map((category) => (
                <button
                    key={category.id}
                    className={`flex items-center px-4 py-2.5 rounded-lg font-medium transition-all whitespace-nowrap ${
                        activeCategory === category.id
                            ? 'bg-blue-600 text-white shadow-sm'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => onSelectCategory(category.id)}
                >
                    <span className="mr-2 text-lg">{category.icon}</span>
                    {category.name}
                </button>
            ))}
        </div>
    );
};