"use client";
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./css/carousel.css"

const ProductCard = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  };

  const product = [
    {
      name: `Category 1`,
      img: `/students/image1.avif`,
      price: '450',
    },
    {
      name: `Category 2`,
      img: `/students/image2.avif`,
      price: '450',
    },
    {
      name: `Category 3`,
      img: `/students/image3.avif`,
      price: '450',
    },
    {
      name: `Category 4`,
      img: `/students/image4.avif`,
      price: '450',
    },
    {
      name: `Category 5`,
      img: `/students/image5.avif`,
      price: '450',
    },
    {
        name: `Category 6`,
        img: `/students/image6.avif`,
        price: '450',
    },
    
  ];
  return (
    <div className='border'>
      <Slider {...settings}>
    {product.map((d) => (
      <div className='bg-white max-w-xs '>
        <img className='w-full h-[480px] object-cover' src={d.img} alt="" />
        <div className='flex flex-col gap-2 ms-6 mt-4'>
          <h3 className='text-xl font-bold'>{d.name}</h3>
          <span className='text-sm font-semibold'>{d.price}</span>
        </div>
      </div>
      ))}
      </Slider>
      </div>
  )
}

export default ProductCard