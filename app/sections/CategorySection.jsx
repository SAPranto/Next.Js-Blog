import React from 'react'
import Carousel from './components/Carousel'

const CategorySection = () => {
  return (
    <div className='wrapper'>
        <div className='cont'>
          <div className='flex flex-col lg:flex-row gap-10 justify-between items-center'>
            <h2 className='heading'>Top Categories</h2>
              <Carousel/>
          </div>
        </div>
    </div>
  )
}

export default CategorySection