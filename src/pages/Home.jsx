import React from 'react'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
   <>
   <Navbar />
    <div className="max-w-[1240px] mx-auto px-6">
        <Categories />
      </div>

      <div className="max-w-[1240px] mx-auto px-6 mb-10">
        <h1 className="text-slate-900 font-bold text-3xl mb-6">Popular Products</h1>
        <Products />
      </div>
   </>
  )
}

export default Home