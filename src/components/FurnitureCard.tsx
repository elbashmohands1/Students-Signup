
import React from 'react';

interface FurnitureCardProps {
  image: string;
  name: string;
  rating: number;
  reviewCount: number;
  price: number;
  onAddToCart: () => void;
}

const FurnitureCard: React.FC<FurnitureCardProps> = ({
  image,
  name,
  rating,
  reviewCount,
  price,
  onAddToCart,
}) => {
  return (
    <div className="h-96 max-w-72  relative overflow-hidden rounded-2xl bg-gradient-to-t from-[#000000ab] via-[#00000000] via-50%  shadow-md transition-shadow duration-300 hover:shadow-2xl">
      <img src={image} alt={name} className="w-full object-cover absolute h-full -z-10" />
      <div className="p-4 flex  flex-col absolute bottom-4  w-full">
        <h3 className="text-lg font-medium text-white">{name}</h3>
        <div className="flex items-center mb-2">
          <div className="text-yellow-500">{'★'.repeat(Math.floor(rating))}</div>
          <span className="ml-2 text-gray-300">({reviewCount})</span>
        </div>
        <div className="flex justify-between items-start flex-col">
          <div className="text-gray-200 font-medium ">${price}</div>
          <button
            className="bg-primary text-white px-16 py-2 rounded-2xl hover:bg-primary-dark transition-colors bg-slate-950   self-center flex"
            onClick={onAddToCart}
          >
            Add to Cart
            <span className='pl-4'>
              +
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FurnitureCard;