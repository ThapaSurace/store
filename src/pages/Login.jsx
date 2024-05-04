import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-full max-w-sm p-5 bg-white shadow-md border border-slate-500/75 rounded-md">
        <h1 className="text-lg font-light mb-6">SIGN IN</h1>
        <form className="flex flex-col gap-6">
          <input className="flex-1" placeholder="username" />
          <input className="flex-1" placeholder="password" />
          <button className="bg-teal-600 hover:bg-teal-500 p-2 rounded-md text-white font-semibold">LOGIN</button>
        </form>
        <div className="mt-5">
        <p className="text-[12px]">DO NOT YOU REMEMBER THE PASSWORD?</p>
        <p className="text-[12px] mt-1">CREATE A NEW ACCOUNT</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
