import React from 'react'
import error from '../../images/icon-error.svg'

const Contact = () => {
  return (
    <div>
      <section>
        <p><span>35,000+</span>ALREADY JOINED</p>
        <h3>Stay up-to-date with what we’re doing</h3>
        <div>
          <div className='relative'>
            <input type="text" placeholder='Enter your email address'/>
            <img src={error} alt="" className='absolute right-0 top-1/2 transform -translate-y-1/2 mr-2' />
          </div>
          <button type='submit'>Contact Us</button>
        </div>
      </section>
    </div>
  )
}

export default Contact