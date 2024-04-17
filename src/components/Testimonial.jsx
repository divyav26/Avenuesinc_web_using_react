import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonial } from '../Data/NavItem';


const Testimonial = () => {
    const settings = {
    dots:true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 3,
    autoplay: true,
    speed: 1000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
    ]
    };
    
  return (
    <div className="h-[80vh] p-[2rem]">
      <Slider {...settings}>
        {
            testimonial.map((item)=>{
                return(
                    <>
                    <div className='border-2 border-gray-300 p-[2rem] text-center w-[90%] h-[50vh]'>
                        <p className='text-sm text-gray-500'>{item.description}</p>
                        <h1 className='text-xl font-bold'>{item.title}</h1>
                        <h3 className='text-sm text-gray-500'>{item.sub_title}</h3>
                    </div>
                    </>
                )
            })
        }
      </Slider>
    </div>
  )
}

export default Testimonial
