import { motion } from "motion/react";
import { SlideText } from "./SlideText";
import { ArrowRight } from "lucide-react";
import BlurStaggeredText from "./BlurStaggeredText";

const FeaturedBox = ({
  title = "Step Into the Echoes of History",
  description = "Journey through ancient corridors and cobblestone streets. Our heritage tours bring forgotten stories to life with expert local historians guiding every step.",
  imageSrc = "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
  ctaText = "Explore the past",
  isReversed = false,
  onClick,
}) => {
  const variants = {
    hidden: {
      y: 60,
      opacity: 0,
      rotateZ: 2,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateZ: 0,
    },
    exit: {
      y: 40,
      opacity: 0,
      rotateZ: -2,
    },
  };
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: false, amount: 0.25 }}
      className={`
        max-w-6xl mx-auto bg-neutral-200 rounded-[40px] p-8 md:p-10  
        grid grid-cols-1 lg:flex items-center gap-8 md:gap-12 lg:gap-20 
        transition-all duration-500
        ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"}
      `}
    >
      {/* 1. Title - Forced to the top on mobile via order-1 */}
      <h2 className="text-2xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.1] lg:hidden order-1">
        {title}
      </h2>

      {/* 2. Image Side - order-2 on mobile */}
      <div className="flex-1 w-full order-2 lg:order-none">
        <div className="relative group">
          <div className="overflow-hidden rounded-[32px]">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-[200px] md:h-[400px] object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>
        </div>
      </div>

      {/* 3. Description & CTA Side - order-3 on mobile */}
      <div className="flex-1 space-y-6 md:space-y-8 text-left order-3 lg:order-none">
        {/* Title for Desktop only */}
        <h2 className="hidden lg:block text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
          <BlurStaggeredText text={title} />
        </h2>

        <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-lg">
          <BlurStaggeredText text={description} />
        </p>

        <button
          onClick={onClick}
          className="flex items-center justify-center py-3 px-6 bg-neutral-800 text-neutral-50 rounded-xl group transition-all duration-300 ease-in-out hover:bg-neutral-700 active:scale-95"
        >
          <SlideText text={ctaText} />
          <div className="w-0 opacity-0 transition-all duration-300 ease-out group-hover:w-4 group-hover:ml-3 group-hover:opacity-100">
            <ArrowRight size={18} />
          </div>
        </button>
      </div>
    </motion.div>
  );
};

export default FeaturedBox;
