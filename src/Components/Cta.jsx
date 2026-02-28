import { motion } from "framer-motion";
import BlurStaggeredText from "./BlurStaggeredText";
import { SlideText } from "./SlideText";

export function Cta() {
  return (
    <section className="bg-neutral-100 py-24 px-6 relative">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
          <BlurStaggeredText text={`Travel Beyond Boundaries.`} />
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
          <BlurStaggeredText
            text={`Curated journeys crafted with the world’s most trusted hospitality partners. Discover unforgettable destinations with comfort, authenticity, and seamless planning.`}
          />
        </p>

        {/* Partners Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-10 pt-6"
        >
          <span className="text-neutral-500 font-bold text-lg">Marriott</span>
          <span className="text-neutral-500 font-bold text-lg">Hilton</span>
          <span className="text-neutral-500 font-bold text-lg">Emirates</span>
          <span className="text-neutral-500 font-bold text-lg">Airbnb</span>
        </motion.div>

        {/* Image */}
        <div className="pt-5 md:pt-16">
          <div className="overflow-hidden rounded-[40px] ">
            <img
              src="https://images.pexels.com/photos/2537391/pexels-photo-2537391.jpeg"
              alt="Scenic travel destination"
              className="w-full h-[200px] md:h-[500px] object-cover"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-10">
          <button className="bg-neutral-900 text-neutral-50 px-5 pt-2 pb-0.5 rounded-xl text-lg font-medium transition-all duration-300 hover:bg-neutral-800 active:scale-95 ">
            <SlideText text={`Plan Your Journey`} />
          </button>
        </div>
      </div>
    </section>
  );
}
