import React from "react";
import { features1 } from "../assets/data";
import { motion } from "framer-motion";
import { fadeIn } from "../assets/motion";
export default function Pupose() {
  return (
    <section id="about" className="w-full bg-gray-50 py-20">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 items-center px-4 sm:px-6 lg:px-8 py-4 container mx-auto">
        {/* heading */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true }}
          className=""
        >
          <p className="text-sm text-purple-600 font-medium mb-2">
            ACHIVE MORE
          </p>
          <h2 className="text-3xl md:w-4/5 w-full md:text-4xl font-bold text-gray-950">
            Purpose of convay is to keep your team elegant{" "}
          </h2>
        </motion.div>
        {/* bullet points */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true }}
          className="col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8 "
        >
          {features1.map((item, i) => {
            return (
              <div
                key={i}
                className="flex 
                 gap-4"
              >
                <span className="">{item.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 ">
                    {item.title}{" "}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
