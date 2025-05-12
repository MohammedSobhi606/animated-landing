import React from "react";
import { services } from "../assets/data";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../assets/motion";
export default function Services() {
  return (
    <section className=" bg-gray-50" id="services">
      {/* left side  */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-16 px-4 sm:px-6 lg:px-8 gap-6 my-16">
        <div className="flex flex-col justify-center items-start gap-y-5 basis-md">
          <motion.h2
            variants={textVariant(0.4)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true }}
            className="text-5xl font-bold"
          >
            Future of support with new shape
          </motion.h2>
          <p className="text-gray-600">
            Future of support with new shape Future of support with new shape
          </p>
          <ul className="text-gray-800 list-inside list-disc space-y-2">
            <li>Ux design strategy</li>
            <li>Development bring</li>
          </ul>
          <button className="bg-indigo-700 py-2.5 px-6 rounded-full text-white hover:bg-indigo-800 transition-all shadow-sm hover:shadow-blue-100 cursor-pointer">
            Get Started
          </button>
        </div>

        {/* right side  */}
        <motion.div className="grid grid-cols-2  gap-6 max-sm:grid-cols-1">
          {services.map((item, i) => (
            <motion.div
              variants={fadeIn("up", 0.3 * i)}
              initial={"hidden"}
              animate={"show"}
              viewport={{ once: true }}
              key={i}
              className="flex flex-col gap-3 shadow rounded-lg p-3 bg-white hover:scale-105 transition-transform"
            >
              <item.icon className={item.className} />
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm  text-gray-600">{item.description}</p>
              <a href={item.link} className="text-blue-400 hover:underline">
                Learn more
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
