import React, { useState } from 'react'
import logo from '/images/logo-bookmark.svg'
import menuOpen from '/images/icon-hamburger.svg'
import menuClose from '/images/icon-close.svg'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion";
import facebook from '/images/icon-facebook.svg';
import twitter from '/images/icon-twitter.svg';

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false)


  const handleBtn = () => {
    setOpenMenu(!openMenu);
  }

  const showMenu = () => {
    setOpenMenu(false);
  }

  const closeMenu = ()=> {
    setOpenMenu(false)
  }

  return (
    <nav>

    {/* =================mobile menu ======================= */}

    <div className='flex items-center justify-between mx-[2.5rem] h-[7rem] lg:hidden xl:hidden md:hidden'>
      <div className="" onClick={closeMenu}>
        <NavLink to="/">
        <img src={logo} alt=""/>
        </NavLink>
      </div>

      <AnimatePresence>
      { openMenu && (
      <motion.ul
      initial={{opacity:0, y: 100}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: 100}}
      transition={{ease: "easeOut"}}
       onClick={showMenu}
       className='flex items-center bg-Very-Dark-Blue bg-opacity-90 flex-col justify-center text-White font-[Rubik] tracking-widest text-xl rounded-t-3xl absolute bottom-0 left-0 w-[100vw] h-[88vh] gap-[1.5rem]'>
          <hr className='w-[80vw] text-Grayish-Blue'/>
          <NavLink to="/features">
            FEATURES
          </NavLink>
          <hr className='w-[80vw] text-Grayish-Blue'/>
          <NavLink to="/pricing">
            PRICING
          </NavLink>
          <hr className='w-[80vw] text-Grayish-Blue'/>
          <NavLink to="/contact">
            CONTACT
          </NavLink>
          <hr className='w-[80vw] text-Grayish-Blue'/>
          <button>
          <NavLink to="/login" className="border-White border-2 rounded-lg px-[7rem] py-[0.8rem]">
            LOGIN
          </NavLink>
          </button>
      <div className="flex items-center justify-center gap-[3rem] absolute bottom-[6rem]">
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
      </div>
      </motion.ul>
      ) }
      </AnimatePresence>


      <button onClick={handleBtn} className='z-10'>
        <img src={!openMenu ? menuOpen : menuClose} alt="" className='transition-all duration-300'/>
      </button>
    </div>

        {/* ======================DESKTOP NAVBAR ========================= */}
      <div className="hidden md:flex lg:flex xl:flex items-center justify-between lg:mx-[8rem] xl:mx-[12rem] md:mx-[4rem] h-[7.5rem] font-[Rubik] text-Grayish-Blue">
        <div className="">
          <NavLink to="/">
          <img src={logo}  />
          </NavLink>
        </div>

        <ul className='gap-11 md:gap flex text-[0.9rem] items-center'>
          <NavLink to="/features" className="hover:text-Soft-Red duration-300">
            FEATURES
          </NavLink>
          <NavLink to="/pricing" className="hover:text-Soft-Red duration-300">
            PRICING
          </NavLink>
          <NavLink to="/contact" className="hover:text-Soft-Red duration-300">
            CONTACT
          </NavLink>
          <NavLink to="/login" className="bg-Soft-Red px-[2.3rem] rounded-md py-[0.7rem] text-[0.8rem] text-White font-[500] hover:bg-White hover:border-Soft-Red border-2 duration-300 hover:text-Soft-Red">
            LOGIN
          </NavLink>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
