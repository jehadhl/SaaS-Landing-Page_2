"use client";
import { features } from "@/utils/constant";
import EcoSustemIcon from "@/assets/icons/ecosystem.svg";
import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export const Features = () => {
  const offestX = useMotionValue(-100);
  const offestY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offestX}px ${offestY}px, black , transparent)`;
  const borderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!borderRef.current) return;
      const rect = borderRef.current?.getBoundingClientRect();
      offestX.set(e.x - rect?.x);
      offestY.set(e.y - rect?.y);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <section className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="font-bold text-5xl sm:text-6xl text-white tracking-tighter text-center">
          Everything you need
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>
        <div className="mt-16 flex flex-col gap-4 sm:flex-row">
          {features.map((item, index) => (
            <div
              key={index}
              className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1 relative"
            >
              <motion.div
                ref={borderRef}
                className="absolute border-2 border-purple-400  inset-0 rounded-xl"
                style={{
                  WebkitMaskImage: maskImage,
                  maskImage,
                }}
              ></motion.div>
              <div className="inline-flex h-14 w-14  bg-white text-black justify-center items-center rounded-lg">
                <EcoSustemIcon />
              </div>
              <h3 className="font-bold mt-6">{item.title}</h3>
              <p className="mt-2 text-white/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
