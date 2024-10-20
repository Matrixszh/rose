'use client';
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import "dotenv/config";
import Subtitle from "./Subtitle";
import { motion } from "framer-motion";
import Confetti from 'react-confetti';

const Contact = () => {
  const template = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const service = process.env.NEXT_PUBLIC_SERVICE_ID;
  const key = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      number: "",
      email: "",
      message: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const onSubmit = (data) => {
    setLoading(true);
    emailjs
      .send(service, template, data, key)
      .then((response) => {
        setLoading(false);
        reset();
        setShowConfetti(true);
        setTimeout(() => {
          setShowConfetti(false);
        }, 3000); // Show confetti for 3 seconds
      })
      .catch((error) => {
        setLoading(false);
        console.error("FAILED...", error);
        toast.error("Form Submission Failed!");
      });
  };

  return (
    <>
      <div id="Contact" className="flex flex-col gap-5 justify-center items-center px-4 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-5 justify-center items-center mt-[80px]"
        >
          <Subtitle text="contact" />
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="font-semibold text-4xl lg:text-6xl"
          >
            Let's <span className="text-[#58F499]">Find</span> your Dream Home
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm lg:w-[40%] text-center"
          >
            Ready to find your dream home?
          </motion.p>
        </motion.div>

        <form className="w-[min(100%,38rem)] mt-8" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-[#d9d9d9]/10 text-white placeholder-gray-400 py-3 px-4 rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-[#58F499]"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <div className="text-red-500">{errors.name.message}</div>
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full bg-[#d9d9d9]/10 text-white placeholder-gray-400 py-3 px-4 rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-[#58F499]"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full bg-[#d9d9d9]/10 text-white placeholder-gray-400 py-3 px-4 rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-[#58F499]"
            {...register("number", {
              required: "Phone number is required",
              minLength: {
                value: 10,
                message: "Phone number must be at least 10 digits",
              },
            })}
          />
          {errors.number && (
            <div className="text-red-500">{errors.number.message}</div>
          )}

          <textarea
            placeholder="Message"
            className="w-full bg-[#d9d9d9]/10 text-white placeholder-gray-400 py-3 px-4 rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-[#58F499]"
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 5,
                message: "Message must be at least 5 characters long",
              },
            })}
            rows={4}
          />
          {errors.message && (
            <div className="text-red-500">{errors.message.message}</div>
          )}

          <button
            type="submit"
            className="w-full bg-[#B7FEC7] hover:bg-[#58f499] rounded-lg shadow border border-[#58F499]/5 text-[#041A2F] font-semibold py-3 px-4"
            disabled={loading}
          >
            {loading ? (
              <div className="flex justify-center">
                <div className="animate-spin inline-block w-8 h-8 border-4 rounded-full border-black" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              "Contact Us"
            )}
          </button>
        </form>

        {/* Ensure Confetti is displayed correctly */}
        {showConfetti && (
          <div className="fixed top-0 left-0 justify-center items-center w-full h-full z-50">
            <Confetti />
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;
