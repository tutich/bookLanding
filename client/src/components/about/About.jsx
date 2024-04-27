import React from 'react';
import { useState } from 'react';
import image1 from '../../images/illustration-features-tab-1.svg';
import image2 from '../../images/illustration-features-tab-2.svg';
import image3 from '../../images/illustration-features-tab-3.svg';


const Data = [
  {
    id: 1,
    title: 'Bookmark in one click',
    desc: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    image: image1
  },

  {
    id: 2,
    title: 'Intelligent search',
    desc: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    image: image2
  },

  {
    id: 3,
    title: 'Share your bookmarks',
    desc: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    image: image3
  },
]
 

const About = () => {

  const [selectedId, setSelectedId] = useState(1);

  const handleClick = (id) => {
    setSelectedId(id);
  };

  return (
    <div className='mb-6'>
      <section className='mx-auto py-8 '>
        <article className=''>
          <h2 className='text-xl font-bold text-[#242946] p-4'>Features</h2>
          <p className='text-gray-500'>Our aim is to make it quick and easy for you to access your <br /> favourite websites.
          Your bookmarks sync between your devices <br /> so you can access them on the go.
          </p>
        </article>
      </section>

      <section className='flex flex-col justify-between  mx-auto lg:w-[50%] lg:flex-row py-2'>
        <button onClick={() => handleClick(1)}>Simple Bookmarking</button>
        <button onClick={() => handleClick(2)}>Speedy Searching</button>
        <button onClick={() => handleClick(3)}>Easy Sharing</button>
       
      </section>
      <div className='mx-auto lg:w-[50%] mb-3'><hr /></div>

      <section>
        <article>
        {selectedId && (
            <div className='flex flex-col items-center justify-center gap-16 mx-auto lg:flex-row lg:w-[80%]'>
              <img src={Data[selectedId - 1].image} alt={Data[selectedId - 1].title} />
              <div className='lg:text-left w-[80%]'>
                <h3 className='text-xl font-bold text-[#242946] py-4'>{Data[selectedId - 1].title}</h3>
                <p className='text-gray-500 py-4'>{Data[selectedId - 1].desc}</p>
                <button className='hidden lg:block bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded '>More Info</button>
              </div>
            </div>
          )}
        </article>
      </section>
    </div>
  )
}

export default About