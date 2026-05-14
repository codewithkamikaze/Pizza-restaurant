"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      
      {/* TEXT CONTAINER - Adjusted padding and gap for mobile responsiveness */}
      <div className="h-1/2 flex items-center justify-center flex-col gap-4 p-4 md:gap-8 md:p-10 lg:h-full lg:flex-1 text-red-500 font-bold">
        <h1 className="text-4xl text-center uppercase md:text-6xl xl:text-7xl leading-tight">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-3 px-6 md:py-4 md:px-8 rounded-md hover:bg-red-600 transition-all">
          Order Now
        </button>
      </div>

      {/* IMAGE CONTAINER - Half height on mobile, full width on desktop */}
      <div className="w-full h-1/2 relative lg:h-full lg:flex-1">
        <Image
          src={data[currentSlide].image}
          alt="Promotional Slide"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default Slider;