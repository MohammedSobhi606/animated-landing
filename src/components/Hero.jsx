import React from "react";
import { RiArrowRightDownLine, RiBardFill } from "@remixicon/react";
import heroImage from "../assets/hero-image.png";
import { motion } from "framer-motion";
import { fadeIn, slideIn, textVariant } from "../assets/motion";
export default function Hero() {
  return (
    <section
      className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-44 pb-6 px-4 sm:px-6 lg:px-8"
      id="home"
    >
      {/* left col */}
      <div className="w-full md:w-2/3 space-y-8">
        {/* star badge */}
        <motion.div
          variants={slideIn("left", "spring", 0.2, 0.4)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true }}
          className="flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group"
        >
          <RiBardFill
            className="text-blue-600 group-hover:text-amber-300 group-hover:scale-110 transition-all"
            size={28}
          />
          <span className="text-sm font-medium">jump start your growth</span>
        </motion.div>
        <motion.h1
          variants={textVariant(0.4)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          We boost the growth for
          <span className="text-blue-500 relative inline-block">
            Startup to Fortune 500
            {/* line */}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60" />
          </span>
          <span className="inline-block ">
            Companies
            <span className="animate-pulse ml-2">⏰</span>
          </span>
        </motion.h1>
        <motion.p
          variants={textVariant(0.6)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true }}
          className="text-gray-600 text-lg md:text-xl max-w-xl"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea,
          asperiores quas, excepturi qui at maiores velit dolor dignissimos amet
          aut.
        </motion.p>
        <form className="flex gap-3 max-w-md">
          <motion.input
            variants={fadeIn("up", 0.2)}
            initial={"hidden"}
            animate={"show"}
            viewport={{ once: true }}
            required
            type="email"
            placeholder="Email address"
            className="flex-1 px-6 py-4 border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all focus:outline-none rounded-xl"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-4 rounded-xl hover:bg-blue-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-300 hover:-translate-y-1 active:translate-0 active:shadow-none"
          >
            <RiArrowRightDownLine />
          </button>
        </form>
      </div>

      {/* right col */}
      <div className="w-full md:w-1/3 mt-16 md:mt-0 pl-0 md:pl-12 ">
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial={"hidden"}
          animate={"show"}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src={heroImage}
            className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
}
