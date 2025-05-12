import React from "react";
import { features } from "../assets/data";
export default function Features() {
  return (
    <section className="container mx-auto px-4 py-16 flex flex-col space-y-12 ">
      {/* heading text */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          How can we help you business
        </h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          dicta autem.
        </p>
      </div>
      {/* features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  ">
        {features.map((item, i) => {
          return (
            <div key={i} className="flex flex-col items-center justify-center">
              <div className="size-10 bg-blue-500 grid place-items-center rounded-full">
                {item.icon}
              </div>
              <h1 className="text-xl font-bold text-gray-800 text-center">
                {item.title}
              </h1>
              <p className="text-center text-gray-600">{item.description}</p>
            </div>
          );
        })}
      </div>
      <button
        className="self-center bg-blue-500 py-2.5 px-6 rounded-full text-white hover:bg-blue-700 transition-all shadow-sm hover:shadow-blue-100 cursor-pointer font-semibold "
        type="button"
      >
        become a partener
      </button>
    </section>
  );
}
