import React from "react";

const CategoryCard = ({ cat }) => {
  return (
    <div className="relative h-[60vh] max-w-lg mx-auto w-full">
      <img
        src={cat.img}
        alt={cat.title}
        className="w-full h-full object-center object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-white mb-5">{cat.title}</h1>
        <button className="bg-white text-gray-700 font-semibold px-4 py-2 rounded-md">shop now</button>
      </div>
    </div>
  );
};

export default CategoryCard;
