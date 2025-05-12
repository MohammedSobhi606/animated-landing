import React from "react";
import { logos } from "../../assets/data";
export default function Logos() {
  return (
    <div className="  h-20 overflow-x-hidden relative logos flex items-center ">
      {/* colection1 */}
      <div className="logos-slide ">
        {logos.map((item, i) => (
          <div key={i} className="mx-10 md:w-60 w-20">
            <img
              src={item}
              key={i}
              className="h-10  md:h-20 w-full grayscale hover:grayscale-0"
            />
          </div>
        ))}
      </div>
      {/* colection2 */}
      <div className="logos-slide ">
        {logos.map((item, i) => (
          <div key={i} className="mx-10 md:w-60 w-20">
            <img
              src={item}
              key={i}
              className="h-10 md:h-20  w-full grayscale hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
