"use client";
import React from "react";
import Subtitle from "./Subtitle";
import { motion } from "framer-motion";

const TestimonialCard = ({ text, author }) => (
  <div className="bg-[#b7fec7]/5 border border-[#b7fec7] border-opacity-5 rounded-lg p-6">
    <div className="h-16">
      <div className="text-[#b7fec7] text-6xl lg:text-8xl font-normal font-['GTWalsheimPro']">
        ‘’
      </div>
    </div>
    <p className="text-white text-sm mb-4 w-[80%]">{text}</p>
    <p className="text-gray-400 text-sm">{author}</p>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      text: "I struggled to find a property to rehab. I spent months looking but got nowhere. Rose helped me laser focus on my search and got me under contract. As an agent, she helped me think like an investor to find properties. Thank you for all your help.",
      author: "Vita O’Sea",
    },
    {
      text: "Rose has been a wonderful mentor for me since I started my real estate investment journey. She is someone I can trust. She uplifts me with confidence and beliefs that I can succeed in this business. Rose shares her wealth of knowledge and experience to help me think outside the box to succeed in real estate.",
      author: "April Hamlet",
    },
    {
      text: "Special S/O to Rashida Rose Shams for not only doing her job, but in ways the buyer's agent job as well during my last closing. She made tremendous sacrifices behind the scenes to expedite the closing process, despite her very busy schedule. Honored to have you in my corner!",
      author: "Torrence Sorrell",
    },
    {
      text: "Rashida was wonderful to work with. We were on a deal together and couldn't have asked for a smoother experience. She is very professional and gets the job done right! Hope to work with her again in the near future.",
      author: "Dan Rogers",
    },

  ];

  return (
    <section id="Testimonials">
      <div className="flex flex-col gap-5 justify-center items-center px-4 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-5 pb-[4px] justify-center items-center mt-[80px]"
        >
          <Subtitle text="testimonials" />
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="font-semibold text-3xl lg:text-6xl text-nowrap"
          >
            Don't take <span className="text-[#58F499]">Our</span> Word for it
          </motion.p>
          <p className="text-gray-400 text-sm lg:w-[40%] text-center">
            See what our customers have to say about us
          </p>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="font-semibold text-lg lg:text-xl text-center lg:w-1/2"
          >
            "I feel so relieved and glad that I found this company. Their services enabled me to find the best property at a premium rate!"
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="font-medium text-lg lg:text-xl"
          >
            - Sarah
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="font-normal text-base text-[#5c5c5c]"
          >
            Proud Home Owner
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {testimonials.map((card, index) => (
            <TestimonialCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

