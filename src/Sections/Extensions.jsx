import React from "react";
import chrome from "/images/logo-chrome.svg";
import firefox from "/images/logo-firefox.svg";
import opera from "/images/logo-opera.svg";
import { NavLink } from "react-router-dom";
import dots from "/images/bg-dots.svg"

const Extensions = () => {
  return (
    <section className="font-[Rubik] mb-[10rem] lg:mb-[15rem] xl:mb-[17rem]">
      <div className="flex flex-col items-center justify-center mx-[2rem] text-center">
        <div className="">
          <h2 className="font-[500] text-[1.5rem] lg:text-[1.8rem] xl:text-[1.8rem]">
            Download the extension
          </h2>
          <p className="text-Faded-Very-Dark-Blue py-[1rem] leading-7 lg:w-[40rem] lg:text-[1.2rem] xl:text-[1.3rem] md:w-4/6 mx-auto">
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize.
          </p>
        </div>

        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-[2rem] lg:gap-[2rem] xl:gap-[2rem]">
          <div className="bg-White shadow-xl w-[18rem] mx-auto py-[1rem] rounded-2xl mt-[2rem] lg:mt-0">
            <div className="flex flex-col py-[2rem]">
              <img src={chrome} className="mx-auto w-[6rem]" />
              <div className="my-[1.3rem]">
                <h3 className="font-[500] text-Very-Dark-Blue text-[1.2rem] my-[0.5rem]">Add to Chrome</h3>
                <p className="text-Faded-Very-Dark-Blue text-[0.9rem]">Minimum version 62</p>
              </div>
            </div>
            <img src={dots} className="translate-y-[-1.5rem]"/>
            <button className="bg-Soft-Blue px-[2rem] py-[1rem] border-2 border-Soft-Blue rounded-lg text-White hover:bg-White duration-300 hover:text-Very-Dark-Blue">
              <NavLink to="/add">Add & Install Extension</NavLink>
            </button>
          </div>
          <div className="bg-White shadow-xl w-[18rem] mx-auto py-[1rem] rounded-2xl mt-[2rem] lg:mt-0 lg:translate-y-[3rem]">
            <div className="flex flex-col py-[2rem]">
              <img src={firefox} className="mx-auto w-[6rem]" />
              <div className="my-[1.3rem]">
                <h3 className="font-[500] text-Very-Dark-Blue text-[1.2rem] my-[0.5rem]">Add to Firefox</h3>
                <p className="text-Faded-Very-Dark-Blue text-[0.9rem]">Minimum version 55</p>
              </div>
            </div>
            <img src={dots} className="translate-y-[-1.5rem]"/>
            <button className="bg-Soft-Blue px-[2rem] py-[1rem] border-2 border-Soft-Blue rounded-lg text-White hover:bg-White duration-300 hover:text-Very-Dark-Blue">
              <NavLink to="/add">Add & Install Extension</NavLink>
            </button>
          </div>
          <div className="bg-White shadow-xl w-[18rem] mx-auto py-[1rem] rounded-2xl mt-[2rem] lg:mt-0 lg:translate-y-[6rem]">
            <div className="flex flex-col py-[2rem]">
              <img src={opera} className="mx-auto w-[6rem]" />
              <div className="my-[1.3rem]">
                <h3 className="font-[500] text-Very-Dark-Blue text-[1.2rem] my-[0.5rem]">Add to Opera</h3>
                <p className="text-Faded-Very-Dark-Blue text-[0.9rem]">Minimum version 46</p>
              </div>
            </div>
            <img src={dots} className="translate-y-[-1.5rem]"/>
            <button className="bg-Soft-Blue px-[2rem] py-[1rem] border-2 border-Soft-Blue rounded-lg text-White hover:bg-White duration-300 hover:text-Very-Dark-Blue">
              <NavLink to="/add">Add & Install Extension</NavLink>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extensions;
