import React from 'react'
import error from '../../images/icon-error.svg'
import { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(validateEmail(e.target.value));
  };

  const validateEmail = (email) => {
    // You can implement your email validation logic here
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className='bg-[#5266df]'>
      <section className='py-12 px-6 text-white'>
        <p className='tracking-widest text-gray-300'><span>35,000+</span>    ALREADY JOINED</p>
        <h3 className='font-bold text-2xl py-4'>Stay up-to-date with what <br /> we’re doing</h3>
        <div className='lg:flex items-center justify-center mx-auto lg:gap-4'>
          <div className='relative py-4'>
            <input type="text" placeholder='Enter your email address' value={email}
               onChange={handleChange}
               className='p-2 border rounded-md text-black'
              />
           {!isValidEmail && (
            <img
              src={error}
              alt="Error"
              className='absolute right-0 top-1/2 transform -translate-y-1/2 mr-2'
            />
          )}
          </div>
          {!isValidEmail && (
          <p className="text-red-500">Whoops, make sure it's an email</p>
          )}
          <button type='submit' className='bg-[#fb5859] h-[42px] w-[220px]  rounded-md'>Contact Us</button>
        </div>
      </section>
    </div>
  )
}

export default Contact 