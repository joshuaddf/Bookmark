import React, { useState } from "react";
import ArrowDown from "/images/icon-arrow.svg";
import { motion, AnimatePresence } from "framer-motion";

const Mobileapp = () => {

    const [show, setShow] = useState(false);

    const open = () => {
      setShow(!show);
    };

  return (
    <div>
       <div className="w-5/6 md:w-3/6 lg:w-[40%] mx-auto">
          <div className="flex items-center justify-between">
            <button
              className="flex items-center text-Very-Dark-Blue w-[95%] lg:text-[1.3rem] justify-between hover:text-Soft-Red"
              onClick={open}
            >
              Is there a mobile app?
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
                className="py-[1rem] lg:w-[95%] xl:w-[95%] text-Grayish-Blue"
              >
                It's not available on mobile yet.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
    </div>
  )
}

export default Mobileapp
