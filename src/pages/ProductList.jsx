import React from "react";
import Products from "../components/Products";

const ProductList = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold text-slate-900 mt-10">Dresses</h1>
      {/* filter */}
   <div>
   <div className="py-6 flex flex-col gap-6 md:flex-row md:justify-between items-center mb-10 border-b border-slate-400/85">
        <div>
          <span className="text-lg text-slate-800 font-semibold mr-2">Filter Products:</span>
          <select className="border border-slate-400/85 p-2 rounded-md mr-2">
            <option disabled selected>
              Color
            </option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
          <select className="border border-slate-400/85 p-2 rounded-md">
            <option disabled selected>
              Size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>

        <div>
        <span className="text-lg text-slate-800 font-semibold mr-2">Sort Products:</span>
          <select className="border border-slate-400/85 p-2 rounded-md mr-2">
            <option selected>Newest</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </select>
        </div>
      </div>

   </div>
      {/* productlist */}
      <div>
        <Products />
      </div>
    </div>
  );
};

export default ProductList;
