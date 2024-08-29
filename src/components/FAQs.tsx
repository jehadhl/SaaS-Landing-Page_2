"use client";
import { items } from "@/utils/constant";
import PlusIcon from "@/assets/icons/plus.svg";
import MinusIcon from "@/assets/icons/minus.svg";
import { useState } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const AccordingItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="py-7 border-b border-white/30"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex w-full items-center ">
        {" "}
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            // className={clsx("mt-4 text-white/70", {
            //   hidden: !isOpen,
            //   "": isOpen === true,
            // })}
            className="text-white/70"
            initial={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
              marginTop: "16px",
            }}
            exit={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
          >
            {" "}
            {answer}{" "}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQs = () => {
  return (
    <section className="bg-black text-white bg-gradient-to-t from-black to-[#5d2ca8] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="font-bold text-5xl sm:text-6xl sm:max-w-[648px] mx-auto text-white tracking-tighter text-center">
          Frequently asked questions
        </h2>

        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }, index) => (
            <AccordingItem question={question} answer={answer} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
