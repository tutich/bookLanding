import React from 'react'
import hero from '../../images/illustration-hero.svg';

const Intro = () => {
  return (
    <div>
        <section className='flex flex-col-reverse items-center justify-center mx-auto lg:flex-row lg:w-[80%]'>
            <article className='lg:text-left'>
                <h2 className='text-xl font-bold text-[#242946] py-4'>A Simple Bookmark Manager </h2>
                <p className='text-gray-500 py-4'>A clean and simple interface to organize your favourite websites. 
                    Open a new browser tab and see your sites load instantly. Try it for free.
                </p>
                <div>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mr-2'>Get it on Chrome</button>
                    <button className='bg-gray-100 hover:bg-gray hover:shadow-md  font-semibold py-2 px-4 rounded'>Get it on Firefox</button>
                </div>
            </article>


            <article>
                <img src={hero} alt="" />
            </article>
        </section>
    </div>
  )
}

export default Intro