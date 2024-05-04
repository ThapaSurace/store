import React from 'react'

const Register = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-full max-w-2xl p-5 bg-white shadow-md border border-slate-500/75 rounded-md">
        <h1 className="text-lg font-light mb-6">CREATE AN ACCOUNT</h1>
        <form className="grid grid-cols-2 gap-2">
          <input type='text' className="flex-1" placeholder="firstname" />
          <input type='text' className="flex-1" placeholder="lastname" />
          <input type='text' className="flex-1" placeholder="username" />
          <input type='email' className="flex-1" placeholder="email" />
          <input type='password' className="flex-1" placeholder="password" />
          <input type='password' className="flex-1" placeholder="conform passowrd" />
          <button className="bg-teal-600 hover:bg-teal-500 p-2 rounded-md text-white font-semibold mt-2">CREATE</button>
        </form>
        <div className="mt-5">
        <p className="text-[12px] mt-1">ALREADY HAVE AN ACCOUNT? LOGIN</p>
        </div>
      </div>
    </div>
  )
}

export default Register