"use client";
import helixImage from "@/assets/images/helix2.png";
import emojiImage from "@/assets/images/emojistar.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  return (
    <section
      className="bg-black text-white py-[72px] sm:py-24 overflow-x-clip"
      ref={sectionRef}
    >
      <div className="container max-w-xl relative">
        <motion.div
          style={{
            translateY,
          }}
        >
          <Image
            src={helixImage}
            alt="iamge_helix"
            className="absolute top-6 left-[calc(100%+36px)]"
          />
        </motion.div>
        <motion.div
          style={{
            translateY,
          }}
        >
          <Image
            src={emojiImage}
            alt="iamge_helix"
            className="absolute -top-[120px] right-[calc(100%+24px)]"
          />
        </motion.div>
        <h2 className="font-bold text-5xl sm:text-6xl text-white tracking-tighter text-center">
          Get instant access{" "}
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </div>
        <form className="mt-10 flex flex-col sm:flex-row gap-2.5 max-w-sm mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="h-12  bg-white/20 rounded-lg font-medium px-5 placeholder:text-[#9ca3af] sm:flex-1"
          />
          <button className="bg-white font-medium text-black h-12 rounded-lg px-5">
            Get for free
          </button>
        </form>
      </div>
    </section>
  );
};
