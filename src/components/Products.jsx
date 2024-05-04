import React from "react";
import { popularProducts } from "../data";
import ProductCard from "./card/ProductCard";

const Products = () => {
  return (
    <>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
     {
        popularProducts.map(product=>(
            <ProductCard key={product.id} product={product} />
        ))
      }
     </div>
    </>
  );
};

export default Products;
