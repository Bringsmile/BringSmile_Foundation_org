"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import CustomDonationForm from "./CustomDonationForm";

const slides = [
  {
    src: "/frontend/heroSection/slide1.jpg", // Use relative path from public directory
    heading: "One act of kindness can ignite a spark of hope, changing a girl's world forever.",
    buttonText: "Donate Now",
  },
  {
    src: "/frontend/heroSection/slide2.jpg",
    heading:
      "Your generosity today is the key that unlocks a future full of possibility and promise.",
    buttonText: "Donate Now",
  },
  {
    src: "/frontend/heroSection/slide3.jpg",
    heading:
      "Together, we have the power to break barriers and build a new generation of unstoppable leaders.",
    buttonText: "Donate Now",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Functions to open and close the modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length); // Change slide every 5 seconds
    }, 5000);
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slide transition */}
      <motion.div
        key={currentSlide}
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${slides[currentSlide].src})`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <motion.div
        className="relative flex flex-col items-start justify-center h-full text-white px-8 sm:px-16"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-sm sm:text-lg uppercase tracking-widest font-medium">
          Empower the Future
        </h2>
        <h1 className="text-3xl sm:text-5xl font-bold mt-4 text-[#ff5a5f]">
          Invest in Education
        </h1>
        <h1 className="text-lg sm:text-2xl font-bold mt-4">
          {slides[currentSlide].heading}
        </h1>
        <motion.button
          className="bg-[#28a745] text-white py-3 px-6 text-lg font-semibold hover:bg-[#218838] rounded-md mt-8 transition"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          onClick={openModal}
        >
          {slides[currentSlide].buttonText} <span className="ml-2 text-white">❤</span>
        </motion.button>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <CustomDonationForm setIsModalOpen={setIsModalOpen} />
        </motion.div>
      )}

      {/* Slider Dots */}
      <motion.div
        className="absolute bottom-10 sm:bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-4 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer ${
              currentSlide === i ? "bg-yellow-400" : "bg-white"
            }`}
          ></div>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroSection;
