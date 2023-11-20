import React from 'react'
import Slider from './Slider'

const CategorySlider = () => {
  return (
    <div className='wrapper'>
        <div className='cont'>
          <div className='flex flex-col lg:flex-row gap-10 justify-between items-center'>
            <h2 className='heading'>Top Categories</h2>
              <Slider/>
          </div>
        </div>
    </div>
  )
}

export default CategorySlider