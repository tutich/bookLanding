import React from 'react'
import chrome from '../../images/logo-chrome.svg';
import firefox from '../../images/logo-firefox.svg';
import opera from '../../images/logo-opera.svg';
import dots from '../../images/bg-dots.svg'

const Links = () => {
  return (
    <div className='' >
      <section className='mx-auto py-8'>
        <h3 className='text-xl font-bold text-[#242946] p-4'>Download the extension</h3>
        <p  className='text-gray-500'>We’ve got more browsers in the pipeline. Please do let us know if <br /> you’ve got a 
          favourite you’d like us to prioritize.
        </p>
      </section>

      <section className='flex flex-col lg:flex-row items-center justify-between mx-auto  lg:w-[70%]'>
        <div className='grid grid-col-1   items-center mb-12 lg:mb-36 justify-center  w-[250px] text-center bg-white shadow-md p-3 rounded-lg'>
          <img src={chrome} alt="" className="mx-auto mb-2" />
          <h4 className=' font-bold text-[#242946] '>Add to Chrome</h4>
          <p  className='text-gray-500'>Minimum version 62</p>
          <img src={dots} alt=""className="mx-auto mt-2 mb-2" />
          <button className='bg-blue-500 hover:bg-blue-700 text-white py-1  rounded'>Add & Install Extension</button>
        </div>

        <div className='grid grid-col-1 items-center mb-12 lg:mb-24 justify-center w-[250px] text-center bg-white shadow-lg p-3 rounded-lg'>
          <img src={firefox} alt="" className="mx-auto mb-2" />
          <h4  className=' font-bold text-[#242946] '>Add to Firefox</h4>
          <p  className='text-gray-500'>Minimum version 55</p>
          <img src={dots} alt="" className="mx-auto mt-2 mb-2" />
          <button className='bg-blue-500 hover:bg-blue-700 text-white py-1  rounded'>Add & Install Extension</button>
        </div>

        <div className='grid grid-col-1 items-center mb-12 lg:mb-12 justify-center w-[250px] text-center bg-white shadow-md p-3 rounded-lg'>
          <img src={opera} alt="" className="mx-auto mb-2" />
          <h4  className=' font-bold text-[#242946] '>Add to Opera</h4>
          <p  className='text-gray-500'>Minimum version 46</p>
          <img src={dots} alt=""  className="mx-auto mt-2 mb-2" />
          <button className='bg-blue-500 hover:bg-blue-700 text-white py-1  rounded'>Add & Install Extension</button>
        </div>
      </section>
    </div>
  )
}

export default Links