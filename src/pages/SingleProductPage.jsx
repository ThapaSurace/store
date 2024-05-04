import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Navbar from "../components/Navbar";

const SingleProductPage = () => {
  return (
    <>
      <Navbar />
      <div className=" max-w-[1240px] mx-auto px-4 flex flex-col md:flex-row gap-10 my-10">
        {/* img container */}
        <div className="flex-1 h-[200px]">
          <img
            src="https://i.ibb.co/S6qMxwr/jean.jpg"
            alt="img"
            className="w-full h-full md:h-[90vh] object-cover rounded-md shadow-sm"
          />
        </div>

        {/* info container */}
        <div className="flex-1 px-12">
          <h1 className="font-light">Denim Jumpsuit</h1>
          <p className="my-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </p>
          <span className="font-[100] text-2xl">$ 20</span>
          <div className="w-[50%] my-10 flex justify-between gap-10">
            <div className="flex items-center">
              <span className="text-xl font-extralight">Color</span>
              <div
                className="w-4 h-4 rounded-full mx-2 cursor-pointer bg-black"
                color="black"
              />
              <div
                className="w-4 h-4 rounded-full mx-2 cursor-pointer bg-blue-950"
                color="darkblue"
              />
              <div
                className="w-4 h-4 rounded-full mx-2 cursor-pointer bg-gray-800"
                color="gray"
              />
            </div>
            <div className="flex gap-2 items-center">
              <span>Size</span>
              <select className="border border-slate-400/85 p-2 rounded-md mr-2">
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="border border-slate-600 p-2 rounded-md cursor-pointer">
                <AiOutlineMinus />
              </div>
              <span>1</span>
              <div className="border border-slate-600 p-2 rounded-md cursor-pointer">
                <AiOutlinePlus />
              </div>
            </div>
            <button className="p-4 border-2 border-teal-700 rounded-md bg-white cursor-pointer font-medium hover:bg-[#f8f4f4;]">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductPage;
