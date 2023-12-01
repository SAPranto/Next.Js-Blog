import React from 'react'

const HeroSection = () => {
  return (
    <div className='hero'>
      <div className='flex flex-col h-full justify-end md:items-end'>
        <div className='flex flex-col gap-4 md:gap-6 pb-10 md:pb-20 md:pe-10 z-10'>
          <h1 className='text-center text-3xl md:text-5xl font-bold text-white uppercase'>Holiday 2023</h1>
          <div className='flex justify-center'>
          <button className='hero-btn'>Shop Gifts</button>
          <button className='hero-btn border-s-2 border-black'>Shop Gifts</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection