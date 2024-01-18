import React, { useState } from "react";
import ArrowDown from "/images/icon-arrow.svg";
import { motion, AnimatePresence } from "framer-motion";

const Whatis = () => {

    const [show, setShow] = useState(false);

    const open = () => {
      setShow(!show);
    };

  return (
    <div>
       <div className="w-5/6 md:w-3/6 lg:w-[40%] mx-auto">
          <div className="flex items-center justify-between">
            <button
              className="flex text-Very-Dark-Blue lg:text-[1.3rem] items-center w-[95%] justify-between hover:text-Soft-Red"
              onClick={open}
            >
              What ia a bookmark?
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
                A bookmark is an internet address that you keep because you
                visit it often: A bookmark simply serves as a shortcut back to
                the website.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
    </div>
  )
}

export default Whatis
