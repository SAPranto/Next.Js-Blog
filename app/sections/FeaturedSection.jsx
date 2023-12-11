import React from 'react'

const FeaturedSection = () => {
  return (
    <div className='wrapper'>
        <div className='cont'>
            <div className='flex'>
            <div className ="bg-[url('/featured.avif')] w-full py-96 flex gap-6 flex-col justify-center items-center bg-no-repeat">
                    <h2 className='heading text-white'>Pumps and Heels</h2>
                    <button className='hero-btn'>Shop Now</button>
                </div>
            </div>
        </div>
        </div>
  )
}

export default FeaturedSection