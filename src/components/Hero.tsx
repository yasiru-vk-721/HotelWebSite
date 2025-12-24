"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import pic1 from "../resource/330490389.jpg"; // Local image import
import pic3 from "../resource/330490222.jpg"; // Local image import
import pic2 from "../resource/32980.jpg"; // Local image import
import { StaticImageData } from "next/image";

// Define type for a slide
type Slide = {
  image: string | StaticImageData;
  title: string;
  subtitle: string;
};

const slides: Slide[] = [
  {
    image: pic1, // local image
    title: "Shanora Beach Hotel",
    subtitle: "Oceanfront comfort in the heart of Mirissa",
  },
  {
    image: pic3, // local image
    title: "Wake Up to the Ocean",
    subtitle: "Luxury rooms with breathtaking sea views",
  },
  {
    image: pic2, // local image
    title: "Relax. Explore. Enjoy.",
    subtitle: "Your perfect coastal getaway",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${
              typeof slides[index].image === "string"
                ? slides[index].image
                : slides[index].image.src
            })`,
          }}
        />
      </AnimatePresence>

      {/* overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-white max-w-2xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {slides[index].title}
          </h1>
          <p className="text-lg md:text-xl mb-8">
            {slides[index].subtitle}
          </p>

          <a
            href="#contact"
            className="inline-block bg-[#E6C27A] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
