"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import BlurStaggeredText from "./BlurStaggeredText";
import { SlideText } from "./SlideText";

export function Footer() {
  return (
    <footer className="relative overflow-hidden rounded-t-[40px] bg-neutral-900 text-neutral-100">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=80"
          alt="Night sky over mountains"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/40 to-neutral-950/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 py-28 max-w-6xl mx-auto">
        {/* Headline */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight leading-tight">
            <BlurStaggeredText text={`Travel further.`} />
            <br />
            <BlurStaggeredText text={`Discover deeper.`} />
            <br />
            <BlurStaggeredText text={`Take the journey.`} />
          </h2>

          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
            <BlurStaggeredText
              text={`Plan seamless adventures with trusted partners across the globe. Flights, stays curated experiences, all in one place.`}
            />
          </p>

          <button className="mt-6 inline-flex items-center gap-3 bg-white text-neutral-900 px-8 py-4 rounded-2xl text-lg font-medium transition-all duration-300  active:scale-95">
            <SlideText text={`Start Your Journey`} />
            <ArrowRight size={18} />
          </button>
        </motion.div>

        {/* Bottom Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-neutral-300">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Wanderly</h3>
            <p>
              Your gateway to curated global adventures. Discover destinations,
              book with confidence, and travel with ease.
            </p>
            <p className="pt-4 text-sm">Follow us on Twitter</p>
          </div>

          {/* Explore */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold">Explore</h4>
            <ul className="space-y-2">
              <li>Destinations</li>
              <li>Experiences</li>
              <li>Adventure Tours</li>
              <li>Luxury Escapes</li>
              <li>Travel Guides</li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold">Company</h4>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Partners</li>
              <li>Careers</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
