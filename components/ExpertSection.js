'use client';
import React from "react";
import Subtitle from "./Subtitle";
import ExpertCard from "./ExpertCard";
import PopupForm from '@/components/PopupForm';
import E1 from "../public/images/expert.png";
import E2 from "../public/images/fixnflip.png";
import E3 from "../public/images/construction.png";
import E4 from "../public/images/buynhold.png";
import E5 from "../public/images/airbnb.png";
import Image from "next/image";
import { motion } from "framer-motion";

const ExpertSection = () => {
  const CustomImage = () => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <Image src={E2} alt="Expert" width={400} />
      </motion.div>
    );
  };

  return (
    <section id="ExpertSection">
      <div className="flex flex-col gap-5 justify-center items-center mt-[80px]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <Subtitle text="Expertise" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="font-semibold text-3xl lg:text-6xl text-center text-nowrap"
        >
          We're <span className="text-[#58F499]">Experts</span> in
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-gray-400 text-sm lg:w-[40%] text-center"
        >
          Our goal is to enhance your real estate journey, making it fulfilling and efficient.
          We offer comprehensive services tailored to ensure your next transition is smooth and successful.
        </motion.p>
        <div className="flex flex-col gap-8 justify-center items-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="w-full flex justify-center"
          >
            <ExpertCard
              title={"Fix and Flip"}
              subtitle={
                <div className="flex flex-col justify-between gap-6">
                  <p>
                    With over 40 successful home flips, I have honed the art of transforming properties for maximum profit. Whether you’re just starting or looking to grow your flipping business, I can guide you through every step — from property selection and design choices to staging and selling. My expertise in architecture and interior design ensures that every flip stands out in the market, offering you the potential for higher returns and faster sales.
                  </p>
                </div>
              }
              imgSrc={E2}
              number={"1"}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="w-full flex justify-center"
          >
            <ExpertCard
              title={"Airbnb"}
              subtitle={
                <div className="flex flex-col justify-between gap-10 space-y-4">
                  <p>
                    Looking to tap into the lucrative short-term rental market? With a keen eye for design and deep knowledge of what makes properties attractive to renters, I can help you transform your home or investment into a top-performing Airbnb. I’ll guide you through optimizing the space, staging it for success, and setting the right price to attract a steady stream of guests, ensuring you maximize your rental income.
                  </p>
                </div>
              }
              imgSrc={E5}
              number={"2"}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="w-full flex justify-center"
          >
            <ExpertCard
              title={"Ground-Up Construction"}
              subtitle={
                <div className="flex flex-col justify-between gap-10">
                  <p>
                    Building from scratch can be daunting, but with my experience in design and real estate, I can make the process seamless. Whether you’re looking to create a custom home or a high-end investment property, I’ll assist you with everything from blueprint to final sale. My architectural background ensures that your project is designed for maximum value and market appeal, guiding you through each stage to bring your vision to life.
                  </p>
                </div>
              }
              imgSrc={E3}
              number={"3"}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="w-full flex justify-center"
          >
            <ExpertCard
              title={"Buy and Hold"}
              subtitle={
                <div className="flex flex-col justify-between gap-10">
                  <p>
                    The buy-and-hold strategy is a smart way to build long-term wealth in real estate. With my extensive experience in rentals and property management, I can help you identify high-potential properties, secure financing, and navigate the day-to-day challenges of managing tenants. Whether you’re new to real estate investing or looking to expand your portfolio, I’ll show you how to create steady cash flow while growing the value of your assets.
                  </p>
                </div>
              }
              imgSrc={E4}
              number={"4"}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;
