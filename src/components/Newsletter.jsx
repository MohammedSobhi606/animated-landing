import { Ri24HoursFill, RiAccountBox2Line } from "@remixicon/react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../assets/motion";
export default function Newsletter() {
  return (
    <div
      id="newsletter"
      className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <motion.h2
              variants={textVariant(0.3)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: true }}
              className="text-4xl font-semibold tracking-tight "
            >
              Subscribe to our newsletter
            </motion.h2>
            <motion.p
              variants={textVariant(0.4)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: true }}
              className="mt-4 text-lg text-gray-800"
            >
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
              velit quis. Duis tempor incididunt dolore.
            </motion.p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <motion.div
              variants={fadeIn("down", 0.3)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: true }}
              className="flex flex-col items-start"
            >
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <Ri24HoursFill
                  aria-hidden="true"
                  className="size-6 text-indigo-700"
                />
              </div>
              <dt className="mt-4 text-base font-semibold ">Weekly articles</dt>
              <dd className="mt-2 text-base/7 text-gray-800">
                Non laboris consequat cupidatat laborum magna. Eiusmod non irure
                cupidatat duis commodo amet.
              </dd>
            </motion.div>
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: true }}
              className="flex flex-col items-start"
            >
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <RiAccountBox2Line
                  aria-hidden="true"
                  className="size-6 text-indigo-700"
                />
              </div>
              <dt className="mt-4 text-base font-semibold">No spam</dt>
              <dd className="mt-2 text-base/7 text-gray-800">
                Officia excepteur ullamco ut sint duis proident non adipisicing.
                Voluptate incididunt anim.
              </dd>
            </motion.div>
          </dl>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
    </div>
  );
}
