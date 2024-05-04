import React from "react";
import { FaFacebook, FaGoogle, FaInstagram, FaPinterest } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="border-t border-slate-400/75 py-6">
      <div className="max-w-[1240px] mx-auto px-6 mb-10 flex justify-between">
        <div>
          <h1 className="text-4xl mb-2">Mero Store.</h1>
          <div className="flex gap-2 items-center text-xl">
            <FaFacebook className="text-sky-600" />
            <FaInstagram className="text-pink-600" />
            <FaGoogle className="text-red-600" />
            <FaPinterest className=" text-red-900" />
          </div>
          <p className="max-w-2xl mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            expedita. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Architecto, aperiam.
          </p>
        </div>

        <div className="flex gap-10">
          <div>
            <h2 className="text-slate-600 text-xl font-semibold mb-2">
              UseFul Links
            </h2>
            <ul>
              <li>Home</li>
              <li>Cart</li>
              <li>Man Fashion</li>
              <li>Woman Fashion</li>
              <li>Accessories</li>
            </ul>
          </div>
          <div>
            <h2 className="text-slate-600 text-xl font-semibold mb-2">
              UseFul Links
            </h2>
            <ul>
              <li>Home</li>
              <li>Cart</li>
              <li>Man Fashion</li>
              <li>Woman Fashion</li>
              <li>Accessories</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
