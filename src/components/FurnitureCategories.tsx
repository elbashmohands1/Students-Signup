import React from 'react';

interface FurnitureCategoriesProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const FurnitureCategories: React.FC<FurnitureCategoriesProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  const categories = ['all', 'living room', 'bedroom', 'dining room', 'office', 'lighting & accessories'];

  return (
    <div className="flex justify-center mb-6">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeCategory === category
              ? 'bg-primary text-red-500'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FurnitureCategories;