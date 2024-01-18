import React, { useState } from "react";
import ArrowDown from "/images/icon-arrow.svg";
import { motion, AnimatePresence } from "framer-motion";
import Whatis from "../Faqs/Whatis";
import Request from "../Faqs/Request";
import Mobileapp from "../Faqs/Mobileapp";
import Chromium from "../Faqs/Chromium";

const Faq = () => {
 

  return (
    <section className="font-[Rubik]">
        <div className="flex  md:w-3/6 flex-col lg:w-2/6 xl:w-[2/6] w-[85%] text-center items-center justify-center mx-auto">
            <h2 className="font-[500] text-[1.5rem] leading-tight pb-[1.3rem] text-Very-Dark-Blue lg:text-[2rem]">Frequently Asked Questions</h2>
            <p className="text-Grayish-Blue lg:text-[1.2rem] lg:pb-[3.5rem] pb-[2.5rem]">Here are some of our FAQs. If you have any other questions that you'd like answered, please feel free to email us.</p>
        </div>
      <div className="flex flex-col gap-6 lg:ml-[2rem] xl:ml-[2rem]">
        <Whatis />
        <Request />
        <Mobileapp />
        <Chromium />
      </div>
    </section>
  );
};

export default Faq;
