import React from 'react'
import { categories } from '../data'
import CategoryCard from './card/CategoryCard'

const Categories = () => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-10'>
        {
            categories.map(cat=>(
                <CategoryCard cat={cat} key={cat.id} />
            ))
        }
    </div>
  )
}

export default Categories