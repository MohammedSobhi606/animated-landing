import React from "react";
import { motion } from "framer-motion";
import Logos from "./sub/Logos";
import { fadeIn } from "../assets/motion";
export default function LogosSlider() {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: true }}
      className="
  w-full container  mx-auto py-20 px-4 sm:px-6 lg:px-8  flex flex-col md:flex-row   items-start md:items-center
  overflow-x-hidden
  "
    >
      <div className="w-[300px] shrink-0 text-gray-600 border-l-4 border-blue-500 bg-white text-xl font-semibold text-left px-4 z-10 ">
        Proud partner at <br /> Bambo & Segment
      </div>
      {/* logos */}
      <div>
        <Logos />
      </div>
    </motion.div>
  );
}
