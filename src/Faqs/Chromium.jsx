import React, { useState } from "react";
import ArrowDown from "/images/icon-arrow.svg";
import { motion, AnimatePresence } from "framer-motion";

const Chromium = () => {

    const [show, setShow] = useState(false);

    const open = () => {
      setShow(!show);
    };

  return (
    <div className="">
       <div className="w-5/6 md:w-3/6 lg:w-[40%] mx-auto">
          <div className="flex items-center justify-between">
            <button
              className="flex text-Very-Dark-Blue items-center w-[95%] lg:text-[1.3rem] justify-between hover:text-Soft-Red"
              onClick={open}
            >
              What of other chromium browsers?
              <span className={`duration-300 ${show ? "rotate-180" : ""}`}>
                <img src={ArrowDown} />
              </span>
            </button>
          </div>
          <AnimatePresence>
              
            {show && (
              <motion.p
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
                className="py-[1rem] lg:w-[95%] text-Grayish-Blue xl:w-[95%]"
              >
                Not available on Chromium browsers either.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
    </div>
  )
}

export default Chromium
