'use client';
import React from "react";
import Subtitle from "./Subtitle";
import WorkCard from "./WorkCard";
import { Briefcase, CheckCircle, Award } from "lucide-react";
import { motion } from "framer-motion";

const WorkSection = () => {
  return (
    <div id="WorkSection" className="flex flex-col gap-5 justify-center items-center mt-[80px] px-4 md:px-0">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <Subtitle text="Choose Us" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="font-semibold text-3xl lg:text-6xl text-center text-nowrap"
      >
        Why <span className="font-bold text-[#58F499]">Choose</span> Us
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="text-gray-400 text-sm lg:w-[40%] text-center"
      >
        We make your real estate journey smooth and rewarding. From property selection
        to design and investment strategies, our personalized services ensure success every step of the way.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <WorkCard
            title={"Experience"}
            subtitle={
              "With over 15 years of experience in real estate, I’ve mastered the art of property investment, development, and flipping. My expertise ensures every decision is backed by deep industry knowledge."
            }
            IconComponent={Briefcase}
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <WorkCard
            title={"Reliability"}
            subtitle={
              "Count on me to deliver results on time and on budget. I focus on consistency and trust, ensuring that every project runs smoothly from start to finish, meeting your expectations."
            }
            IconComponent={CheckCircle}
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <WorkCard
            title={"Professionalism"}
            subtitle={
              "I maintain the highest standards of professionalism in every interaction. My focus on clear communication, attention to detail, and dedication ensures you receive top-tier service."
            }
            IconComponent={Award}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default WorkSection;
