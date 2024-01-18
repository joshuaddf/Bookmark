import React from 'react'
import logoWhite from '/images/logo-white.svg'
import { NavLink } from 'react-router-dom'
import facebook from '/images/icon-facebook.svg'
import twitter from '/images/icon-twitter.svg'

const Footer = () => {
  return (
    <section className='bg-Very-Dark-Blue'>
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row mx-auto">
        <div className="py-[2.7rem] mx-auto">
        <img src={logoWhite} alt="" />
        </div>

       
        <ul className='md:flex-row flex flex-col items-center justify-center gap-8 md:mr-[6rem] lg:pl-[5rem] lg:mr-[10rem] mx-auto  lg:translate-x-[-25rem]  xl:translate-x-[-26rem] md:translate-x-[-10rem] text-Grayish-Blue lg:text-[0.9rem]'>
          <NavLink to="/features" className="hover:text-Soft-Red duration-300">
            FEATURES
          </NavLink>
          <NavLink to="/pricing"className="hover:text-Soft-Red duration-300">
            PRICING
          </NavLink>
          <NavLink to="/contact"className="hover:text-Soft-Red duration-300">
            CONTACT
          </NavLink>
        </ul>

        <div className="flex items-center justify-center gap-12 py-[2.5rem] md:mr-[2rem] md:gap-8 lg:translate-x-[-9rem]">
          <img src={facebook}/>
          <img src={twitter} />
        </div>
      </div>
    </section>
  )
}

export default Footer
