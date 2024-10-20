import React from "react";

const WorkCard = ({ IconComponent, title, subtitle }) => {
  return (
    <div className="flex flex-col gap-5 p-10 h-full rounded-md bg-[#B7FEC70D] bg-opacity-20 justify-center items-center transition-transform duration-300 hover:scale-105">
      <div className="rounded-full bg-[#B7FEC7] flex items-center justify-center p-5">
        <IconComponent size={32} color="#19743F" />
      </div>
      <div className="text-2xl font-semibold">{title}</div>
      <div className="text-sm text-center text-gray-400">{subtitle}</div>
    </div>
  );
};

export default WorkCard;
