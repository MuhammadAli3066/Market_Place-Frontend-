import React, { useState } from "react";
import Timer from "./Timer";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ["pic1.png", "pic2.png", "pic3.png"];

  const showSlide = (index) => {
    if (index >= images.length) {
      setCurrentIndex(0);
    } else if (index < 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(index);
    }
  };

  return (
    <>
      <div className="slider-container relative w-full mx-auto overflow-hidden">
        <div
          className="slider flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${-currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto"
            />
          ))}
        </div>
        <button
          onClick={() => showSlide(currentIndex - 1)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#d7d7d7] hover:bg-[#939393] text-white p-2 rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={() => showSlide(currentIndex + 1)}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#d7d7d7] hover:bg-[#939393] p-2 rounded-full"
        >
          &gt;
        </button>
      </div>
      <div className="flex w-full h-32 gap-3 justify-start text-start mt-3">
        <div className="flex flex-col bg-green-100 w-4/6 py-4 rounded-lg justify-evenly">
          <div className="flex flex-row justify-evenly">
            <div className="flex flex-col w-4/6  text-start">
              <h1 className="font-bold text-green-700">
                Visit us to get the best prices
              </h1>
              <p>
                Kontraliga igen i transsofi donas: portad och båvaktig. Oktigt
                nusm nigon, i nyvement sare.
              </p>
            </div>

            <div className="flex flex-col justify-center">
              <button className="bg-green-600 hover:bg-green-700 px-2 py-2 rounded-md ml-1 text-white text-xs font-bold">
                View More
              </button>
            </div>
          </div>
        </div>

        <div className="inline-flex w-4/6 py-4 bg-red-100 rounded-lg">
          <div className="flex flex-row justify-evenly">
            <div className="flex flex-col w-4/6  text-start">
              <Timer></Timer>
              <p>
                Kontraliga igen i transsofi donas: portad och båvaktig. Oktigt
                nusm nigon, i nyvement sare.
              </p>
            </div>

            <div className="flex flex-col justify-center">
              <button className="bg-red-600 hover:bg-red-700 px-2 py-2 rounded-md ml-1 text-white text-xs font-bold">
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
