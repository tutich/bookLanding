import React from 'react'
import hero from '../../images/illustration-hero.svg';

const Intro = () => {
  return (
    <div>
        <section>
            <article>
                <h2>A Simple Bookmark Manager </h2>
                <p>A clean and simple interface to organize your favourite websites. 
                    Open a new browser tab and see your sites load instantly. Try it for free.
                </p>
                <div>
                    <button>Get it on Chrome</button>
                    <button>Get it on Firefox</button>
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