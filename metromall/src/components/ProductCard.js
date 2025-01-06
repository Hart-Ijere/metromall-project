import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500">{product.description}</p>
        <p className="text-lg font-bold">
          ${product.price.toFixed(2)}
        </p>
        {/* Add more details, buttons (e.g., "Add to Cart") here */}
      </div>
    </div>
  );
};

export default ProductCard;