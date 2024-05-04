import React from 'react'
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
      <div className='flex flex-col items-center'>
      <h1 className='text-5xl text-red-500 font-bold mb-6'>Oops!</h1>
      <p className='text-xl font-semibold text-slate-950'>Sorry, an unexpected error has occurred.</p>
      <p className='text-lg mt-4'>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to='/' className='underline mt-4 hover:text-sky-600'>Go back to home page</Link>
      </div>
    </div>
  )
}

export default ErrorPage