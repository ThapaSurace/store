import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Navbar from "../components/Navbar";

const Cart = () => {
  return (
    <>
    <Navbar />
      <div className="max-w-[1240px] mx-auto p-4">
        <h1 className="font-light text-center mb-4 text-2xl">YOUR BAG</h1>
        {/* top */}
        <div className="hidden sm:flex items-center justify-between p-5 mb-10">
          <button className="p-2 font-semibold cursor-pointer">CONTINUE SHOPPING</button>
          <div>
            <span className="underline cursor-pointer mx-2">Shopping Bag(2)</span>
          </div>
          <button>CHECKOUT NOW</button>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="flex-[3] py-4">
            <div className="flex justify-between">
              <div className="flex-[2] flex">
                <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" className="w-[200px]" />
                <div className="p-5 flex flex-col justify-between">
                  <span>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </span>
                  <span>
                    <b>ID:</b> 93813718293
                  </span>
                  <div className="w-4 h-4 rounded-full bg-black" color="black" />
                  <span>
                    <b>Size:</b> 37.5
                  </span>
                </div>
              </div>
              <span>
                <div className="flex items-center gap-4 mb-5">
                  <AiOutlinePlus className="cursor-pointer" />
                  <span>2</span>
                  <AiOutlineMinus className="cursor-pointer" />
                </div>
                <span className="text-light text-xl">$ 30</span>
              </span>
            </div>
            <hr />
            <div className="flex justify-between">
              <div className="flex-[2] flex">
                <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" className="w-[200px]" />
                <div className="p-5 flex flex-col justify-between">
                  <span>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </span>
                  <span>
                    <b>ID:</b> 93813718293
                  </span>
                  <div className="w-4 h-4 rounded-full bg-black" color="black" />
                  <span>
                    <b>Size:</b> 37.5
                  </span>
                </div>
              </div>
              <span>
                <div className="flex  gap-4 items-center mb-5">
                  <AiOutlinePlus className="cursor-pointer" />
                  <span>2</span>
                  <AiOutlineMinus className="cursor-pointer" />
                </div>
                <span className="text-light text-xl">$ 30</span>
              </span>
            </div>
          </div>
          <div className="flex-[1] border-[0.5px] border-gray-400 shadow-sm p-4 rounded-md h-min">
            <h1 className="font-semibold text-xl text-centre mb-6">ORDER SUMMARY</h1>
            <div className="flex justify-between mb-6">
              <span className="text-semibold">Subtotal</span>
              <span>$ 80</span>
            </div>
            <div className="flex justify-between mb-6">
              <span className="text-semibold">Estimated Shipping</span>
              <span>$ 5.90</span>
            </div>
            <div className="flex justify-between mb-6">
              <span className="text-semibold">Shipping Discount</span>
              <span>$ -5.90</span>
            </div>
            <div className="flex justify-between mb-6">
              <span>Total</span>
              <span>$ 80</span>
            </div>
            <button className="w-full p-2 bg-slate-950 text-white font-medium rounded-md">CHECKOUT NOW</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
