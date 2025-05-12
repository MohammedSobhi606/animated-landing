import React from "react";
import businiss from "../assets/stats.webp";
import monitor from "../assets/monitor-card.webp";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
export default function Schedual() {
  return (
    <section className=" bg-gray-50 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-16 px-4 sm:px-6 lg:px-8 gap-6">
        <div className=" rounded-bl-4xl  rounded-tr-4xl  basis-1/2">
          <img src={businiss} alt="card" />
        </div>
        <div className="basis-1/2 flex flex-col items-start justify-center gap-y-2 ">
          <span className="uppercase text-orange-400 font-bold">schedual</span>
          <h1 className="text-2xl md:text-4xl  font-bold capitalize ">
            streamline your buisiness with smart solutions{" "}
          </h1>
          <p className="text-sm sm:text-lg text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            eveniet mollitia iusto sequi quam delectus debitis odit animi fuga
            maiores temporibus aperiam cum saepe corrupti officiis, ab id esse
            molestias?
          </p>
          <a
            href="#"
            className="capitalize text-blue-400 flex gap-2 items-center hover:text-orange-500 transition-all group"
          >
            explore schedualing Features{" "}
            <RiArrowRightLine className="group-hover:translate-x-1 transition-transform " />
          </a>
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-16 px-4 sm:px-6 lg:px-8 gap-6">
        <div className="basis-1/2 flex flex-col items-start justify-center gap-y-2 ">
          <span className="uppercase text-green-400 font-bold">monitor</span>
          <h1 className="text-2xl md:text-4xl  font-bold capitalize ">
            introduce best mobile carusel
          </h1>
          <p className="text-sm sm:text-lg text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            eveniet mollitia iusto sequi quam delectus debitis odit animi fuga
            maiores temporibus aperiam cum saepe corrupti officiis, ab id esse
            molestias?
          </p>
          <a
            href="#"
            className="capitalize text-blue-400 flex gap-2 items-center hover:text-orange-500 transition-all group"
          >
            explore schedualing Features{" "}
            <RiArrowRightLine className="group-hover:translate-x-1 transition-transform " />
          </a>
        </div>{" "}
        <div className=" rounded-bl-4xl  rounded-tr-4xl  basis-1/2">
          <img src={monitor} alt="card" />
        </div>
      </div>
    </section>
  );
}
