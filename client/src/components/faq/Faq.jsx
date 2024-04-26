import React from 'react';
import { useState } from 'react';
import arrow from '../../images/icon-arrow.svg'

const Faq = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isRequest, setIsRequest] = useState(false);
  const [isBrowser, setIsBrowser] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const toggleRequest = () => {
    setIsRequest(!isRequest);
  };

  const handleAccordion = () => {
    setIsMobile(!isMobile);
  };

  const toggleBrowser = () => {
    setIsBrowser(!isBrowser);
  };

  return (
    <div>
      <section >
        <h2 className='text-xl font-bold text-[#242946] p-4'>Frequently Asked Questions </h2>
        <p className='text-gray-500 py-7'>Here are some of our FAQs. If you have any other questions <br /> you’d like answered please feel free to email us.</p>
      </section>

      <section className='mx-auto  w-[90%] lg:w-[40%]'>
        <div>
        <hr />
          <div className="flex items-center py-4  justify-between">
            <h3 className='hover:text-[#fb5859] cursor-pointer'>What is Bookmark?</h3>
            <button onClick={toggleAccordion}><img src={arrow} alt="" className={isOpen ? 'transform rotate-180' : ''}/></button>
          </div>
          {isOpen && (
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo 
              eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
            </p>
          )}
        </div>

        <div className=''>
         <hr />
          <div className="flex items-center py-4  justify-between">
            
            <h3 className='hover:text-[#fb5859] cursor-pointer'>How can I request a new browser?</h3>
            <button onClick={toggleRequest}><img src={arrow} alt="" className={isRequest ? 'transform rotate-180' : ''}/></button>
          </div>
          <div>
            {isRequest&& (
              <p>Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non
                ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies.
                Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros
                aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
                imperdiet.
              </p>
            )}
          </div>
        </div>
        

        <div>
         <hr />
          <div className="flex items-center py-4  justify-between">
            <h3 className='hover:text-[#fb5859] cursor-pointer'>Is there a mobile app?</h3>
            <button onClick={handleAccordion}><img src={arrow} alt="" className={isMobile ? 'transform rotate-180' : ''}/></button>
          </div>
          {isMobile && (
            <p>Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, 
              ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet 
              pharetra purus. Sed sollicitudin ex et ultricies bibendum.
            </p>
          )}
        </div>

        <div>
        <hr />
          <div className="flex items-center py-4 justify-between">
            <h3 className='hover:text-[#fb5859] cursor-pointer'>What about other Chromium browsers?</h3>
            <button onClick={toggleBrowser} className=""><img src={arrow} alt="" className={isBrowser ? 'transform rotate-180 ' : ''}/></button>
          </div>
          {isBrowser && (
            <p>Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod
             dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.
            </p>
          )}
        </div>
        <hr />
      </section>
      <section className='mx-auto py-8'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded '>More Info</button>
      </section>
    </div>
  )
}

export default Faq