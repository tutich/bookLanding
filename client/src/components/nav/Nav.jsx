import React from 'react'
import logo from '../../images/logo-bookmark.svg'

const Nav = () => {
  return (
    <div>
      <section className='mx-auto justify-between mb-12  py-6 flex lg:w-[80%]'>
        <div>
          <img src={logo} alt="" />
        </div>
        <div className='flex mr-9 items-center  gap-5'>
          <ul className='flex gap-7'>
            <li className='text-sm text-gray-500 cursor-pointer'>FEATURES</li>
            <li className='text-sm text-gray-500 cursor-pointer'>PRICING</li>
            <li className='text-sm text-gray-500 cursor-pointer'>CONTACT</li>
          </ul>
          <button className='bg-red-500 hover:bg-red-700 text-white py- px-2 rounded'>LOGIN</button>
        </div>
      </section>
    </div>
  )
}

export default Nav