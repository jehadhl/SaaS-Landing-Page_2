"use client";
import Image from "next/image";
import Link from "next/link";
import ArrowRightIcon from "@/assets/icons/arrow-w.svg";
import cursorImage from "@/assets/images/cursor.png";
import messageImage from "@/assets/images/message.png";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="bg-black overflow-clip text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] lg:w-[2400px] lg:h-[1200px] sm:h-[768px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#b48cde] bg-[radial-gradient(closest-side,#000_82%,#9560e8)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]" />
      <div className="container relative">
        <div className="flex items-center justify-center">
          <Link
            href={"#"}
            className="border rounded-lg p-1 px-2 border-white/30 gap-3 inline-flex"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text font-medium">
              {" "}
              Version 2.0 is here{" "}
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Read More </span>
              <ArrowRightIcon />
            </span>
          </Link>
        </div>
        <div className="flex justify-center">
          <div className="relative inline-flex">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center mt-8">
              One Task <br /> at a Time
            </h1>
            <motion.div
              className="absolute right-[476px] top-[108px] hidden sm:inline"
              drag
              dragSnapToOrigin
            >
              <Image
                src={cursorImage}
                width={200}
                height={200}
                alt="cursor"
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
            <motion.div
              drag
              dragSnapToOrigin
              className="absolute left-[498px] top-[56px] hidden sm:inline"
            >
              <Image
                src={messageImage}
                alt="cursor"
                width={200}
                height={200}
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black px-5 py-3 rounded-lg font-medium">
            Get for free
          </button>
        </div>
      </div>
    </section>
  );
};
