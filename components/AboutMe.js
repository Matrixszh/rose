"use client";
import React from "react";
import Subtitle from "./Subtitle";
import Image from "next/image";
import { motion } from "framer-motion";
import img1 from "../public/images/aboutme2.png"; // Keep only one image

const AboutMe = () => {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-5 justify-center items-center max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <Subtitle text={"KNOW ME"} />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="font-semibold text-center text-3xl sm:text-4xl lg:text-6xl w-full"
        >
          About <span className="font-bold text-[#58F499]">Me</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg text-center max-w-2xl"
        >
          Know Ms Rose and her journey to establish an empire providing an arsenal of services
        </motion.p>

        <div className="flex flex-col lg:flex-row mt-10 gap-8 w-full rounded-md bg-opacity-20 justify-between items-stretch transition-transform duration-300 hover:scale-[1.02]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex flex-col justify-center text-white w-full lg:w-1/2 leading-relaxed space-y-4" /* Use space-y for consistent spacing between elements */
          >
            <p className="text-left tracking-wide leading-loose text-lg">
              <span className="text-[#58F499] font-semibold">Rashida Shams</span>, a
              <span className="text-[#58F499] font-semibold"> Real Estate Broker at Home Smart Realty Group Inc</span>,
              is a <span className="text-[#58F499] font-semibold">seasoned real estate expert</span> with
              <span className="text-[#58F499] font-semibold"> 15+ years of experience</span> in flipping homes, investment properties,
              and ground-up development. With a <span className="text-[#58F499] font-semibold">Master's Degree in Interior Design and Architecture</span>,
              she offers a unique blend of design and real estate expertise. Ms Rose helps clients
              <span className="text-[#58F499] font-semibold"> build and grow their investment portfolios</span>,
              providing <span className="text-[#58F499] font-semibold">strategic guidance</span> to
              <span className="text-[#58F499] font-semibold"> maximize returns</span>.
            </p>
            <p className="mt-4 text-left tracking-wide leading-loose text-lg">
              As an <span className="text-[#58F499] font-semibold">investor</span> herself, and a
              <span className="text-[#58F499] font-semibold"> Real Estate Broker at Home Smart Realty Group Inc</span>,
              with a <span className="text-[#58F499] font-semibold">portfolio of Airbnb properties</span>, Ms Rose brings
              her <span className="text-[#58F499] font-semibold">experience</span> and <span className="text-[#58F499] font-semibold">industry connections </span>
              to ensure clients receive <span className="text-[#58F499] font-semibold">top-tier guidance</span> for achieving their
              <span className="text-[#58F499] font-semibold"> real estate goals</span>.
            </p>
          </motion.div>

          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="relative w-full max-w-[28rem] h-[30rem] overflow-hidden rounded-md"> {/* Adjusted height */}
              <Image
                src={img1} // Only one image now
                alt="About me"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

