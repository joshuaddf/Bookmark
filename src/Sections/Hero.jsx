import React from "react";
import heroImage from "/images/illustration-hero.svg";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="font-[Rubik] lg:ml-[-2rem]">
      <div className="grid grid-cols-1 mt-[1.5rem] lg:mt-[2.5rem] lg:grid-cols-2 xl:grid-cols-2">
        <div className="w-full h-full lg:order-1">
          <img src={heroImage} className="mx-auto" />
        </div>

        <div className="flex items-center lg:ml-[12rem] justify-center flex-col mt-[-2rem]">
          <h1 className="font-[500] mx-[2rem] text-3xl text-center text-Very-Dark-Blue mt-5 lg:text-[3rem] lg:text-left lg:leading-[3.5rem] ">
            A Simple Bookmark Manager
          </h1>
          <p className="text-center font-[400] mx-[2rem] leading-7 my-[1.2rem] text-Faded-Very-Dark-Blue lg:my-[1.6rem] lg:text-start xl:text-start lg:text-[1.2rem]">
            A clean and simple interface to organize your favourite websites. Open
            a new browser tab and see your sites load instantly. Try it for free.
          </p>
          <div className="flex items-center gap-3 md:gap-8 my-2 text-[0.9rem] lg:ml-[-8rem]">
            <button className="bg-Soft-Blue px-[1.2rem] lg:ml-0 py-[0.8rem] text-White rounded-lg shadow-md lg:py-[1.1rem] lg:px-[1.4rem] xl:py-[1.1rem] xl:px-[1.4rem] hover:bg-White hover:text-Soft-Blue hover:border-Soft-Blue border-2 duration-300">
              <NavLink to="/getinchrome">Get it on Chrome</NavLink>
            </button>
            <button className="px-[1.2rem] lg:ml-0  py-[0.8rem] bg-Button-White rounded-lg  shadow-Sh-Soft-Blue shadow-lg text-Very-Dark-Blue lg:py-[1.1rem] lg:px-[1.4rem] xl:py-[1.1rem] xl:px-[1.4rem] border-2 border-Button-White hover:border-Very-Dark-Blue duration-300 hover:bg-White">
              <NavLink to="/getinfirefox">Get it on Firefox</NavLink>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
