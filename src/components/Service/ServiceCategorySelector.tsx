import React from 'react';

interface ServiceCategorySelectorProps {
    activeCategory: string;
    onSelectCategory: (category: string) => void;
}

const categories = [
    { id: 'airtime', name: 'Airtime' },
    { id: 'data', name: 'Data' },
    { id: 'electricity', name: 'Electricity' },
];

export const ServiceCategorySelector: React.FC<ServiceCategorySelectorProps> = ({
    activeCategory,
    onSelectCategory,
}) => {
    return (
        <div className="flex space-x-2 border-b border-gray-200 pb-4">
            {categories.map((category) => (
                <button
                    key={category.id}
                    className={`px-4 py-2 rounded-t-lg font-medium ${activeCategory === category.id
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    onClick={() => onSelectCategory(category.id)}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
};