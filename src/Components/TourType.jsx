import { featuredData } from "../data/featuredData";
import BlurStaggeredText from "./BlurStaggeredText";
import FeaturedBox from "./FeaturedBox";

export default function TourType() {
  return (
    <section className=" w-full bg-neutral-100">
      <div className="header max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 leading-[1.05]">
          <BlurStaggeredText text={`Define Your Own Horizon`} />
        </h3>
        <p className="mt-6 text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
          <BlurStaggeredText
            text={`Discover a curated collection of tours designed for the discerning traveler.`}
          />
        </p>
      </div>
      {/* Types of tours */}
      <section className="bg-neutral-100 px-4 md:px-10 py-5 mt-10 flex flex-col gap-5 relative">
        {featuredData.map((elem, index) => (
          <FeaturedBox {...elem} key={index} />
        ))}
      </section>
    </section>
  );
}
