import React, { useState } from 'react';
import FurnitureCard from './FurnitureCard';
import FurnitureCategories from './FurnitureCategories';

interface Product {
  id: number;
  image: string;
  name: string;
  rating: number;
  numReviews: number;
  price: number;
  category: string;
}

interface FurnitureGridProps {
  products: Product[];
}

const FurnitureGrid: React.FC<FurnitureGridProps> = ({ products }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter((product) => product.category === activeCategory);

  const handleAddToCart = (product: Product) => {
    // Implement your "Add to Cart" logic here
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <div>
      <FurnitureCategories
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <div className="grid grid-cols-3 gap-6 place-content-center">
        {filteredProducts.map((product) => (
          <FurnitureCard
            key={product.id}
            image={product.image}
            name={product.name}
            rating={product.rating}
            reviewCount={product.numReviews}
            price={product.price}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default FurnitureGrid;