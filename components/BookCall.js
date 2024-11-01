"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Subtitle from "./Subtitle";
import { InlineWidget } from "react-calendly";
import { motion } from "framer-motion";

const BookCall = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6; // Disable weekends
  };

  return (
    <div id="BookCall" className="flex flex-col gap-5 justify-center items-center px-4 lg:px-0">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="flex flex-col gap-5 justify-center items-center mt-[80px]"
      >
        <Subtitle text="book a call" />
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="font-semibold text-3xl lg:text-6xl text-nowrap"
        >
          Book a <span className="text-[#58F499]">Call</span> With us Now
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-gray-400 text-sm lg:w-[40%] text-center"
        >
          Ready to find your dream home?
        </motion.p>
      </motion.div>
      <div className="w-full">
        <InlineWidget
          styles={{ height: "126vh" }}
          url="https://calendly.com/rshams4u?hide_event_type_details=1&hide_gdpr_banner=1"
        />
      </div>
    </div>
  );
};

export default BookCall;
