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
    <div>
      <section>
        <p><span>35,000+</span>ALREADY JOINED</p>
        <h3>Stay up-to-date with what we’re doing</h3>
        <div>
          <div className='relative'>
            <input type="text" placeholder='Enter your email address' value={email}
               onChange={handleChange}
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
          <button type='submit'>Contact Us</button>
        </div>
      </section>
    </div>
  )
}

export default Contact