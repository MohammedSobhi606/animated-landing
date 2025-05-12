import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../assets/motion";
export default function Pricing() {
  const [productCount, setProductCount] = useState(1);
  return (
    <section className="py-30 ">
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
        className="container mx-auto  px-4 sm:px-6 lg:px-8 flex flex-col gap-12"
      >
        <h1 className="text-4xl font-bold text-center">Pricing</h1>
        {/* display prices */}
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-12 place-items-center">
          <div className="shadow-lg rounded-3xl w-full p-8 space-y-4">
            <p className="text-gray-600 font-semibold text-xl">Starter</p>
            <h2 className="text-4xl font-bold">
              {" "}
              {productCount * 2} Egp{" "}
              <span className="text-lg text-gray-600"> /mo</span>{" "}
            </h2>
          </div>
          <div className="shadow-lg rounded-3xl w-full p-8 space-y-4">
            <p className="text-gray-600 font-semibold text-xl">Businiss</p>
            <h2 className="text-4xl font-bold">
              {" "}
              {productCount * 3} Egp{" "}
              <span className="text-lg text-gray-600"> /mo</span>
            </h2>
          </div>
        </div>
        {/* slider setter */}
        <div className="flex flex-col gap-12">
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-gray-600 font-semibold">
              {productCount} products
            </p>
            <input
              type="range"
              onChange={(e) => {
                setProductCount(e.target.value);
              }}
              defaultValue={150}
              max={300}
              className="lg:w-1/2 md:w-2/3 w-full  accent-blue-400 "
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-gray-600 font-semibold">
              Ready to get started ?
            </p>
            <input
              type="button"
              className="bg-blue-500 py-2.5 px-6 rounded-lg text-white hover:bg-blue-700 transition-all shadow-sm hover:shadow-blue-100 cursor-pointer"
              value={"Get Started"}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
