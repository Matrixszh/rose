import React, { useState } from "react";
import Image from "next/image";
import PopupForm from '@/components/PopupForm';

const ExpertCard = ({ title, subtitle, imgSrc, number }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="container flex flex-col w-full bg-[#b7fec7]/5 overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-95">
      <div className="flex flex-col lg:grid lg:grid-cols-2 justify-between lg:gap-6 p-6">
        <div className="text mb-4">
          <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
          <div className="text-gray-300 mb-6">{subtitle}</div>
          <button
            className="relative overflow-hidden group bg-[#B7FEC7] hover:bg-[#58f499] shadow-md text-black font-semibold rounded-md px-[50px] py-[12px] transition-transform duration-300 hover:scale-105"
            onClick={openPopup}
          >
            <span className="relative z-10">Book a Call</span>
            <div className="absolute inset-0 bg-[#58f499] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
        <div className="flex flex-row image relative">
          <Image
            src={imgSrc}
            alt={title}
            layout="responsive"
            objectFit="contain"
            className="rounded-2xl w-full h-full object-cover lg:h-64 xl:h-80 justify-center"
          />
          <div className="absolute bottom-4 right-3 text-8xl font-bold text-white opacity-30 select-none">
            {number}
          </div>
        </div>
      </div>
      {isPopupOpen && (
        <PopupForm isOpen={isPopupOpen} onClose={closePopup} title={title} />
      )}
    </div>
  );
};

export default ExpertCard;