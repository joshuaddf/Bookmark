import React from 'react'
import easyImg from "/images/illustration-features-tab-3.svg";
import { NavLink } from "react-router-dom";

const Easy = () => {
  return (
    <section className="font-[Rubik]">
    <div className="flex flex-col mx-auto lg:flex-row xl:flex-row lg:gap-[5rem] xl:gap-[6rem] lg:mx-[10rem] xl:mx-[11rem]">
      <div className="w-[80vw]  lg:w-[30rem] h-full my-[1rem]">
        <img src={easyImg} className="mx-auto"/>
      </div>
      <div className="flex flex-col my-[2rem] items-center justify-center lg:items-start lg:mt-[-3rem] xl:mt-[-3rem]">
        <h2 className="text-[1.5rem] font-[500] text-Very-Dark-Blue lg:text-[1.8rem]">Share Your Bookmarks</h2>
        <p className="text-center tracking-wide leading-6 lg:leading-8 mx-[-1rem] text-Faded-Very-Dark-Blue py-[1rem] lg:py-[2rem] xl:py-[2rem] lg:text-[1.2rem] lg:w-[30rem] lg:text-left lg:ml-[0.1rem] md:w-4/6">
          Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.
        </p>
        <button className="hidden lg:block xl:block bg-Soft-Blue px-[2rem] py-[1rem] rounded-lg border-2 duration-300 text-White hover:text-Very-Dark-Blue border-Soft-Blue hover:bg-White">
          <NavLink to="/moreinfo">
            More Info
          </NavLink>
        </button>
      </div>
    </div>
  </section>
  )
}

export default Easy
