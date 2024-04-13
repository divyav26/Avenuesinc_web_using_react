import { useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { TbSquareDotFilled } from "react-icons/tb";
import {slides } from '../Data/NavItem';

const HomeCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        const newIndex = (currentIndex + 1) % slides.length;
        setCurrentIndex(newIndex);
      }, 3000); // Change slide every 5 seconds
  
      return () => clearInterval(intervalId);
    }, [currentIndex, slides.length]);
  
    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };
  return (
    <div className="w-full h-screen object-cover relative">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full brightness-50 h-screen bg-cover duration-500"
      ></div>
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-white text-center animate-slide-down">
            <p className="uppercase text-xl font-bold mb-5">
              {index === currentIndex && slide.headline}
            </p>
            <h1 className="text-4xl mb-1 font-extrabold">
              {index === currentIndex && slide.line1}
            </h1>
            <h1 className="text-4xl mb-1 font-extrabold">
              {index === currentIndex && slide.line2}
            </h1>
            <h1 className="text-4xl mb-1 font-extrabold">
              {index === currentIndex && slide.line3}
            </h1>
            <h1 className="text-4xl font-extrabold">
              {index === currentIndex && slide.line4}
            </h1>
          </div>
        </div>
      ))}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8">
        {/* Centered Icons */}
        <div className="flex items-center space-x-4">
          <MdKeyboardArrowLeft
            onClick={prevSlide}
            className="border border-white p-1 cursor-pointer text-white text-5xl"
          />
          <div className="flex">
            {slides.map((slide, slideIndex) => (
              <div key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                {slideIndex === currentIndex ? (
                  <TbSquareDotFilled className="text-2xl text-red-600 cursor-pointer" />
                ) : (
                  <TbSquareDotFilled className="text-2xl text-white cursor-pointer" />
                )}
              </div>
            ))}
          </div>
          <MdKeyboardArrowRight
            onClick={nextSlide}
            className="border border-white p-1 cursor-pointer text-white text-5xl"
          />
        </div>
      </div>
    </div>
  )
}

export default HomeCarousel
