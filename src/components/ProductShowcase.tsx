"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import appScreen from "../assets/images/app-screen.png";
import { useRef } from "react";

export const ProductShowcase = () => {
  const ImageRef = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: ImageRef,
    offset: ["start end", "end end"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <section className="bg-black text-white bg-gradient-to-b from-black to-[#5d2ca8] py-[72px] sm:py-24 overflow-x-clip">
      <div className="container">
        <h2 className="font-bold text-5xl sm:text-6xl text-white tracking-tighter text-center">
          Intuitive interface
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes,
            one task at a time.
          </p>
        </div>
        <motion.div
          style={{
            opacity: opacity,
            rotateX,
            transformPerspective: "800px",
          }}
        >
          <Image
            src={appScreen}
            alt="image_product"
            className="mt-14 w-full"
            quality={100}
            ref={ImageRef}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};
