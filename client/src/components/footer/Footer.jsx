import React from 'react';
import bookmark from '../../images/logo-bookmark copy.svg';
import facebook from '../../images/icon-facebook.svg';
import twitter from '../../images/icon-twitter.svg'

const Footer = () => {
  return (
    <div>
      <section className="bg-[#242946] text-white flex flex-col justify-between mx-auto items-center px-6  py-6">
        <div>
          <img className='p-6' src={bookmark} alt="" />

        
        <div className=''>
          <ul className=''>
            <li>Features</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>
        </div>

        <div className='gap-5'>
          <img className='' src={facebook} alt="" />
          <img src={twitter} alt=""/>
        </div>
      </section>
    </div>
  )
}

export default Footer