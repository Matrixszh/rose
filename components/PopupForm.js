import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { ToastContainer, toast } from "react-toastify";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import Confetti from 'react-confetti';

const PopupForm = ({ isOpen, onClose, title }) => {
  const template = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const service = process.env.NEXT_PUBLIC_SERVICE_ID;
  const key = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  const titleMapping = {
    "Airbnb": "Start your Airbnb journey with us",
    "Fix and Flip": "Learn how to Fix & Flip",
    "Buy and Hold": "Start building your Real Estate Portfolio",
    "Ground-Up Construction": "Consult us for your Construction needs"
  };

  const displayTitle = titleMapping[title] || title;

  const {
    register,
    handleSubmit: handleFormSubmit,
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

  const onSubmit = (data) => {
    setLoading(true);
    const formData = { ...data, title: title };
    emailjs
      .send(service, template, formData, key)
      .then((response) => {
        setLoading(false);
        reset();
        setShowConfetti(true);
        setTimeout(() => {
          setShowConfetti(false);
        }, 3000);
      })
      .catch((error) => {
        setLoading(false);
        console.error("FAILED...", error);
        toast.error("Form Submission Failed!");
      });
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      backgroundColor: '#09272C',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '90vw',  // Use viewport width for better responsiveness
      maxWidth: '600px', 
      maxHeight: '80vh', // Prevent overflow on smaller screens
      overflowY: 'auto',
      padding: '2rem',  // Add padding for better visual balance
      borderRadius: '10px',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="bg-[#09272C] rounded-lg p-2">
        <div className="flex items-center justify-center gap-2 mb-6">
          <h2 className="text-white text-3xl font-bold">{displayTitle}</h2>
        </div>
        <form className="w-[min(100%,38rem)] mt-8" onSubmit={handleFormSubmit(onSubmit)}>
          <input type="text" placeholder="Name" className="w-full bg-[#d9d9d9]/10 text-white placeholder-gray-400 py-3 px-4 rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-[#58F499]" {...register("name", { required: "Name is required" })} />
          {errors.name && (
            <div className="text-red-500">{errors.name.message}</div>
          )}
          <input type="email" placeholder="Email" className="w-full bg-[#d9d9d9]/10 text-white placeholder-gray-400 py-3 px-4 rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-[#58F499]" {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })} />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
          <input type ="tel" placeholder="Phone Number" className="w-full bg-[#d9d9d9]/10 text-white placeholder-gray-400 py-3 px-4 rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-[#58F499]" {...register("number", {
            required: "Phone number is required",
            minLength: {
 value: 10,
              message: "Phone number must be at least 10 digits",
            },
          })} />
          {errors.number && (
            <div className="text-red-500">{errors.number.message}</div>
          )}
          <textarea placeholder="Message" className="w-full bg-[#d9d9d9]/10 text-white placeholder-gray-400 py-3 px-4 rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-[#58F499]" {...register("message", {
            required: "Message is required",
            minLength: {
              value: 5,
              message: "Message must be at least 5 characters long",
            },
          })} rows={4} />
          {errors.message && (
            <div className="text-red-500">{errors.message.message}</div>
          )}
          <button
            type="submit"
            className="w-full bg-[#58f499] rounded-lg shadow border border-[#58F499]/5 text-[#041A2F] font-semibold py-3 px-4"
            disabled={loading}
          >
            {loading ? (
              <div className="flex justify-center">
                <div className="animate-spin inline-block w-8 h-8 border-4 border-black rounded-full" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              'Submit'
            )}
          </button>
        </form>
        {showConfetti && <Confetti />}
      </div>
      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </Modal>
  );
};

export default PopupForm;