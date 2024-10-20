'use client';
import React from "react";
import Subtitle from "./Subtitle";
import { Handshake } from "lucide-react";
import { motion } from "framer-motion";

const CollaborationCard = ({ imageSrc }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
    viewport={{ once: true }}
    className="bg-[#b7fec7]/5 border border-[#b7fec7] border-opacity-5 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
  >
    <motion.img
      src={imageSrc}
      alt="heading"
      className="w-full h-72 object-cover"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
    />
    {/* <div className="p-4">
      <motion.h3
        className="text-white text-lg font-semibold mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
      >
        {heading}
      </motion.h3>
      <motion.p
        className="text-gray-400 text-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
      >
        {text}
      </motion.p>
    </div> */}
  </motion.div>
);

const CollaborationSectionOne = () => {
  const cardData = [
    {
      imageSrc: "/images/collab1.png",
      // heading: "Small heading",
      // text: "Text explaining the collab (if video). This is placeholder text that is used until the actual text is provided by the user. This text or anything can be used since all text is a placeholder for the information the user wants to send and to display"
    },
    {
      imageSrc: "/images/collab1.png",
      // heading: "Small heading",
      // text: "Text explaining the collab (if video). This is placeholder text that is used until the actual text is provided by the user. This text or anything can be used since all text is a placeholder for the information the user wants to send and to display"
    },
    {
      imageSrc: "/images/collab1.png",
      // heading: "Small heading",
      // text: "Text explaining the collab (if video). This is placeholder text that is used until the actual text is provided by the user. This text or anything can be used since all text is a placeholder for the information the user wants to send and to display"
    },
    {
      imageSrc: "/images/collab1.png",
      // heading: "Small heading",
      // text: "Text explaining the collab (if video). This is placeholder text that is used until the actual text is provided by the user. This text or anything can be used since all text is a placeholder for the information the user wants to send and to display"
    }
  ];

  return (
    <div id="CollaborationSectionOne" className="flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="flex flex-col gap-5 pb-[45px] justify-center items-center mt-[80px]"
      >
        <Subtitle text="Collaboration" />
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="font-semibold text-3xl lg:text-6xl text-nowrap px-2"
        >
          Collaboration with the <span className="text-[#58F499]">Best</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-gray-400 text-sm lg:w-[40%] text-center"
        >
          Our mission is to make your real estate journey a fulfilling and satisfying experience
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl text-justify">
        {cardData.map((card, index) => (
          <CollaborationCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CollaborationSectionOne;