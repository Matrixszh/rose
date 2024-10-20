'use client';
import React from "react";
import Subtitle from "./Subtitle";
import { PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

const VideoCard = ({ videoSrc, posterSrc }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="relative group border border-[#b7fec7] border-opacity-5 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
      <video
        src={videoSrc}
        poster={posterSrc} // Set the poster image here
        className="w-full object-cover"
        controls
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <PlayCircle className="text-white w-16 h-16" />
      </div>
    </div>
  </motion.div>
);

const CollabSectionTwo = () => {
  const videoData = [
    {
      videoSrc: "/videos/sample1.mp4", // your video file path
      posterSrc: "/images/collab2.png" // thumbnail image for this video
    },
    {
      videoSrc: "/videos/sample2.mp4",
      posterSrc: "/images/collab2.png"
    },
    {
      videoSrc: "/videos/sample3.mp4",
      posterSrc: "/images/collab2.png"
    },
    {
      videoSrc: "/videos/sample4.mp4",
      posterSrc: "/images/collab2.png"
    }
  ];

  return (
    <div className="flex flex-col gap-5 justify-center items-center px-4 lg:px-0">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="flex flex-col gap-5 justify-center items-center mt-36"
      >
        <Subtitle text="teamwork" />
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="font-semibold text-4xl lg:text-6xl"
        >
          <span className="text-[#58F499]">Collaborations</span> with other Creators
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-gray-400 text-sm lg:w-[40%] text-center"
        >
          Our mission is to make your real estate journey a fulfilling and satisfying experience
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut", delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 w-full max-w-6xl mt-[50px]">
          {videoData.map((video, index) => (
            <VideoCard key={index} videoSrc={video.videoSrc} posterSrc={video.posterSrc} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CollabSectionTwo;