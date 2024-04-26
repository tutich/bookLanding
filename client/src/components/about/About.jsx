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
    <div>
      <section>
        <article>
          <h2>Features</h2>
          <p>Our aim is to make it quick and easy for you to access your favourite websites.
          Your bookmarks sync between your devices so you can access them on the go.
          </p>
        </article>
      </section>

      <section>
        <button onClick={() => handleClick(1)}>Simple Bookmarking</button>
        <button onClick={() => handleClick(2)}>Speedy Searching</button>
        <button onClick={() => handleClick(3)}>Easy Sharing</button>
      </section>

      <section>
        <article>
        {selectedId && (
            <>
              <img src={Data[selectedId - 1].image} alt={Data[selectedId - 1].title} />
              <h3>{Data[selectedId - 1].title}</h3>
              <p>{Data[selectedId - 1].desc}</p>
            </>
          )}
        </article>
      </section>
    </div>
  )
}

export default About