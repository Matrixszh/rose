"use client";
import React from "react";
import Subtitle from "./Subtitle";
import Image from "next/image";
import Placeholder from "../public/images/Placeholder.svg";
import { PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import img from "../public/images/about.png";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="flex flex-col gap-5 justify-center items-center mt-[80px]">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <Subtitle text={"ABOUT ME"} />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="font-semibold text-center text-3xl lg:text-6xl w-full text-nowrap"
        >
          About <span className="font-bold text-[#58F499]">Me</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-gray-400 text-sm lg:w-[40%] text-center"
        >
          Your Trusted Partner in Finding Dream Homes and Smart Investments with
          Integrity and Expertise.
        </motion.p>

        <div className="flex flex-col lg:flex-row mt-10 gap-5 p-4 lg:p-10 w-full max-w-7xl mx-auto rounded-md bg-opacity-20 justify-between items-stretch transition-transform duration-300 hover:scale-[1.02]">
          <div className="w-full lg:w-[48%] flex items-center justify-center">
            <div className="relative w-full aspect-[6/4]">
              <Image
                src={img}
                alt="Rose-RealEstate team"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex flex-col justify-center text-lg text-white w-full lg:w-[48%] leading-relaxed"
          ><p className="text-left tracking-wide leading-loose">
              <span className="text-[#58F499] font-semibold">Rashida Shams</span> is a
              <span className="text-[#58F499] font-semibold"> seasoned real estate expert </span>
              with <span className="text-[#58F499] font-semibold"> 15+ years of experience </span>
              in flipping homes, investment properties, and ground-up development. With a
              <span className="text-[#58F499] font-semibold"> Master's Degree in Interior Design and Architecture</span>,
              she offers a unique blend of design and real estate expertise. Ms Rose helps clients
              <span className="text-[#58F499] font-semibold"> build and grow their investment portfolios</span>,
              providing <span className="text-[#58F499] font-semibold"> strategic guidance </span>
              to <span className="text-[#58F499] font-semibold"> maximize returns</span>.
            </p>
            <p className="mt-4 text-left tracking-wide leading-loose">
              We pride ourselves on our{" "}
              <span className="text-[#58F499] font-semibold">integrity</span>,{" "}
              <span className="text-[#58F499] font-semibold">transparency</span>
              , and commitment to ensuring that every client experiences smooth
              and stress-free transactions.{" "}
              <span className="font-semibold">At Rose-RealEstate</span>, your{" "}
              <span className="text-[#58F499] font-semibold">vision</span> is
              our <span className="text-[#58F499] font-semibold">mission</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
