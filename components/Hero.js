'use client';
import React, { useState } from 'react';
import Image from "next/image";
import Button from "./Button";
import House1 from "../public/images/house1.png";
import House2 from "../public/images/house2.png";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [House1, House2];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="Hero">
      <div className="flex flex-col lg:flex-row w-full min-h-screen overflow-hidden lg:mt-[100px] mt-[50px]">
        {/* Left side content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between lg:pr-8 pb-4">
          <div className="mb-8">
            <div className="flex flex-row items-center mb-4">
              <div className="flex flex-col">
                <h1 className="font-medium text-4xl lg:text-6xl">
                  Your <span className="font-medium text-[#58F499]">Guide To</span>
                </h1>
                <h1 className="font-medium text-4xl lg:text-6xl">
                  Real Estate <span className="font-medium text-[#58F499]">Success</span>
                </h1>
              </div>
            </div>

            <div className="flex flex-row items-center gap-2 w-[70%] mt-7">
              <p className="text-md font-medium whitespace-nowrap">
                Let's get acquainted
              </p>
              <hr className="flex-grow border-t border-current" />
            </div>

            <div className="flex flex-col gap-5 w-full mt-10">
              <p className="text-gray-400 text-sm lg:w-[75%]">
                Meet Rose, a seasoned real estate expert with 15+ years of experience
                in flipping homes, investment properties, and ground-up development. With a Master's Degree in Interior Design and Architecture, she brings a unique eye for detail to every client interaction.
              </p>
              <Button text={"Book a Call"} />
            </div>
          </div>

          {/* Image carousel for small screens */}
          <div className="lg:hidden w-full h-[500px] relative mt-8">
            <Image
              src={images[currentImage]}
              layout="fill"
              objectFit="cover"
              alt={`House ${currentImage + 1}`}
              className="rounded-xl"
              quality={100}
            />
            <button 
              onClick={prevImage} 
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextImage} 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* First image for large screens */}
          <div className="hidden lg:block w-full h-[700px] relative">
            <Image
              src={House1}
              layout="fill"
              objectFit="cover"
              alt="House 1"
              className="rounded-xl" 
              quality={100}
            />
          </div>
        </div>

        {/* Right side image for large screens */}
        <div className="hidden lg:flex w-full lg:w-1/2 flex-col justify-end pb-4">
          <div className="w-full h-[1000px] relative">
            <Image
              src={House2}
              layout="fill"
              objectFit="cover"
              alt="House 2"
              className="rounded-xl"
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;