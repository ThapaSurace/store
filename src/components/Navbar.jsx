import React, { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="border-b border-slate-300/65 shadow-sm">
      <div className="flex justify-between items-center max-w-[1240px] mx-auto p-4">
        <div className="hidden md:flex md:gap-2 md:items-center">
          <span className="text-slate-900 text-xl">EN</span>
          <input
            type="search"
            placeholder="Search"
            className="border border-slate-400 p-1 rounded-md"
          />
        </div>

        {/* Logo */}
        <Link to="/">
          <div className="text-xl md:text-2xl font-bold">Mero Store.</div>
        </Link>

        <div className="flex gap-4 items-center">
          <Link to="/register" className="uppercase text-sm md:text-base">
            register
          </Link>
          <Link to="/login" className="uppercase text-sm md:text-base">
            sign in
          </Link>
          <Link to="/cart">
            <CiShoppingCart className="cursor-pointer" size={30} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
