"use client";
import React from "react";
import Subtitle from "./Subtitle";
import Image from "next/image";
import Placeholder from "../public/images/Placeholder.svg";
import { PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section>
      <div className="flex flex-col gap-5 justify-center items-center mt-[80px]">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <Subtitle text={"WHY US"} />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="font-semibold text-center text-3xl lg:text-6xl w-full"
        >
          Watch This Video{" "}
          <span className="font-bold text-[#58F499]">For More Information</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-gray-400 text-sm lg:w-[40%] text-center"
        >
          Our aim is to make your real estate journey fulfilling and a
          satisfying experience. We provide all the services you need to make
          your next transition seamless.
        </motion.p>
        <div className="mt-10 w-[min(100%,38rem)]">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <div className="relative group border border-[#b7fec7] border-opacity-5 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <video
                src="/images/vid.mp4"
                className="w-full"
                controls
                autoPlay //comment to stop automatically playing on load
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;