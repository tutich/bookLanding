import React from 'react';
import bookmark from '../../images/logo-bookmark copy.svg';
import facebook from '../../images/icon-facebook.svg';
import twitter from '../../images/icon-twitter.svg'

const Footer = () => {
  return (
    <div className='bg-[#242946]'>
      <section className=" text-white flex flex-col justify-center mx-auto items-center  px-6  py-6 gap-6 lg:flex-row lg:w-[80%] ">
        <div  className=' gap-4 justify-center mx-auto items-center lg:flex-row lg:w-[80%] '>
          <img className='my-4' src={bookmark} alt="" />

        
        <div className=''>
          <ul className='flex flex-col justify-center mx-auto items-center gap-4 lg:flex-row lg:w-[80%] lg:justify-center lg:-mt-10'>
            <li>Features</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>
        </div>

        <div className='flex items-center justify-center lg:mt-2'>
          <img className='px-6' src={facebook} alt="" />
          <img src={twitter} alt=""/>
        </div>
      </section>
    </div>
  )
}

export default Footer