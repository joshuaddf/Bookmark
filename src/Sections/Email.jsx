import React from 'react'
import { NavLink } from 'react-router-dom'

const Email = () => {
  return (
    <section className='bg-Soft-Blue mt-[3rem]'>
      <div className="flex items-center justify-center mx-auto text-center py-[2rem] lg:py-[4rem]">
        <div className="flex flex-col w-5/6 lg:w-2/6 mb-[5rem] md:my-[3rem] lg:mb-[0rem] xl:mb-[0rem] lg:my-[1.5rem]">
            <span className='tracking-[0.25rem] lg:pb-[1.5rem] text-[0.9rem] text-White'>35,000+ ALREADY JOINED</span>
            <h3 className='py-[1rem] text-[1.5rem] text-White mx-auto leading-tight lg:text-[2rem] w-[80%]'>Stay up-to-date with what we're doing</h3>
            <div className="flex-col md:flex-row lg:flex-row mx-auto h-[4.3rem] flex pt-[1rem] gap-[1rem]">
                <input type="text" className='py-[1rem] lg:py-[0rem] lg:px-[1.5rem] text-center rounded-lg text-[1.1rem]' placeholder='example@email.com'/>
                <button className='bg-Soft-Red py-[1rem] border hover:border-Soft-Red border-Soft-Red hover:bg-White duration-300 hover:text-Very-Dark-Blue rounded-lg text-White text-[0.9rem] lg:py-[0rem] lg:px-[1.5rem] md:py-[0rem] md:px-[1.5rem]'>
                  <NavLink to="/contactUs">Contact Us</NavLink>
                </button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Email
