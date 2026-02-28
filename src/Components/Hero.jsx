"use client";

import { ArrowRight } from "lucide-react";
import { SlideText } from "./SlideText";
import BlurStaggeredText from "./BlurStaggeredText";
import { motion } from "framer-motion";

export default function Hero() {
  const images = [
    "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
  ];

  return (
    <section className="relative bg-neutral-100 py-14 md:py-36 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center flex flex-col items-center ">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-900 leading-[1.05]">
          <BlurStaggeredText text={`Discover breathtaking`} />
          <br />
          <BlurStaggeredText
            delay={0.6}
            text={`destinations around the world.`}
          />
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
          <BlurStaggeredText
            delay={0.9}
            text={`Plan unforgettable journeys, explore hidden gems, and book your next adventure with confidence.`}
          />
        </p>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <button className="flex items-center justify-center py-2 px-5 bg-neutral-800 text-neutral-50 rounded-xl group transition-all duration-300 ease-in-out hover:pr-6 hover:bg-neutral-300 hover:text-neutral-700">
            <SlideText text={"Start your journey"} />
            <div className="w-0 opacity-0 transition-all duration-300 ease-out group-hover:w-2 group-hover:ml-3 group-hover:opacity-100">
              <ArrowRight size={16} />
            </div>
          </button>
        </div>
      </div>

      {/* Image Strip */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="mt-20 md:mt-28 flex flex-wrap justify-center md:gap-6 px-6 max-w-6xl mx-auto"
      >
        {images.map((src, i) => (
          <div
            key={i}
            className={`
        relative 
        w-[100px] h-[100px] 
        md:w-[220px] md:h-[240px]
        lg:w-[300px] lg:h-[220 px]
        rounded-2xl 
        shadow-lg 
        transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]
        hover:-translate-y-10 hover:scale-105 hover:z-50 hover:rotate-0 hover:shadow-2xl
        ${i % 2 === 0 ? "-rotate-3" : "rotate-3"}
      `}
          >
            <img
              src={`${src}?auto=format&fit=crop&w=800&q=80`}
              alt="Travel destination"
              className="w-full h-full object-cover border border-neutral-200 rounded-2xl"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
