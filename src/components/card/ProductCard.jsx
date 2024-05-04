import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
     <div className="max-w-sm mx-auto w-full cursor-pointer transform overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg">
      <img
        className="h-48 w-full object-contain object-center"
        src={product.img}
        alt="Product Image"
      />
      <div className="p-4 flex justify-between items-center">
        <h2 className="mb-2 text-lg text-gray-900">Product Name</h2>
        <p className="mr-2 text-lg font-semibold text-gray-90m">$20.00</p>
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;
