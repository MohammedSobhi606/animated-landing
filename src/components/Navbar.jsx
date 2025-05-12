import React, { useState } from "react";
import { RiMenuLine, RiCloseLine } from "@remixicon/react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "../assets/motion";
export default function Navbar() {
  const [activeLink, setactiveLink] = useState("Home");
  const [mobilMenue, setmobilMenue] = useState(false);
  const NavLinks = [
    { href: "#home", lable: "Home" },
    { href: "#about", lable: "About" },
    { href: "#services", lable: "Our Services" },
    { href: "#testimonials", lable: "Testimonials" },
  ];
  return (
    <motion.nav
      variants={fadeIn("down", 0.2)}
      initial={"hidden"}
      animate={"show"}
      className="fixed top-0 right-0 left-0 bg-white z-50 backdrop-blur-sm border-b border-gray-100 shadow-sm"
    >
      <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* logo */}
        <div className="flex items-center justify-center cursor-pointer">
          <div className="size-4 bg-blue-500 opacity-75 hover:opacity-100 rounded-full" />
          <div className="size-4 bg-red-500 opacity-75 hover:opacity-100  rounded-full -ml-2" />
        </div>
        {/*mobile menu bars  */}
        <button
          onClick={() => setmobilMenue(!mobilMenue)}
          className="hidden max-md:block cursor-pointer text-gray-800  "
        >
          {mobilMenue ? <RiCloseLine /> : <RiMenuLine />}
        </button>
        {/* desktop menu */}
        <div className="hidden md:flex items-center gap-10 text-sm text-gray-500">
          {NavLinks.map(({ href, lable }, i) => (
            <a
              className={`relative after:absolute after:w-full after:scale-0 after:bottom-0 after:left-0 after:bg-blue-500 after:h-0.5 after:rounded-full hover:after:scale-100 after:transition-all duration-150 after:origin-left hover:text-blue-500 ${
                activeLink == lable && "after:scale-100 text-blue-500"
              }`}
              href={href}
              key={i}
              onClick={() => setactiveLink(lable)}
            >
              {lable}
            </a>
          ))}
        </div>
        {/* button */}
        <a
          href="#newsletter"
          className="bg-blue-500 py-2.5 px-6 rounded-lg text-white hover:bg-blue-700 transition-all shadow-sm hover:shadow-blue-100 hidden md:block"
        >
          Get In Touch
        </a>
      </div>
      {/* mobile nav */}
      {mobilMenue && (
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial={"hidden"}
          animate={"show"}
          viewport={{ once: true }}
          className="md:hidden bg-white border-t border-gray-100 py-4 "
        >
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial={"hidden"}
            animate={"show"}
            viewport={{ once: true }}
            className="container px-4 space-y-2 mx-auto flex flex-col"
          >
            {NavLinks.map(({ href, lable }, i) => (
              <motion.a
                variants={fadeIn("left", 0.2 * i)}
                initial={"hidden"}
                animate={"show"}
                viewport={{ once: true }}
                className={`
                    block 
                    hover:bg-blue-400 rounded-sm p-2 hover:text-white font-semibold
                     ${activeLink == lable && "text-white bg-blue-500"}`}
                href={href}
                key={i}
                onClick={() => setactiveLink(lable)}
              >
                {lable}
              </motion.a>
            ))}
            {/* button */}
            <a
              href="#newsletter"
              className="bg-blue-500 py-2.5 px-6 rounded-lg 
               text-white hover:bg-blue-700 transition-all shadow-sm 
              hover:shadow-blue-100 
              text-center
              self-center
              "
            >
              Get In Touch
            </a>{" "}
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
}
