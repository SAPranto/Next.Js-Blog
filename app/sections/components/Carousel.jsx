"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./css/carousel.css"
const Carousel = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
      };

    return (
        <div className='w-3/4 m-auto'>
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="text-black rounded-xl ">
              <div className='flex justify-center items-center rounded-t-xl'>
                <img src={d.img} alt="" className="h-40 w-40 object-cover rounded-full"/>
              </div>
                <p className="text-sm font-bold text-center mt-2">{d.name}</p>
            </div>
          ))}
        </Slider>
        
      </div>
    );
  }
  
  const data = [
    {
      name: `Category 1`,
      img: `/students/image1.avif`
    },
    {
      name: `Category 2`,
      img: `/students/image2.avif`
    },
    {
      name: `Category 3`,
      img: `/students/image3.avif`
    },
    {
      name: `Category 4`,
      img: `/students/image4.avif`
    },
    {
      name: `Category 5`,
      img: `/students/image5.avif`
    },
    {
        name: `Category 6`,
        img: `/students/image6.avif`
    },
    
  ];
  

export default Carousel