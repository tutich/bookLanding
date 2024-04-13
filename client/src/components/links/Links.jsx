import React from 'react'
import chrome from '../../images/logo-chrome.svg';
import firefox from '../../images/logo-firefox.svg';
import opera from '../../images/logo-opera.svg';
import dots from '../../images/bg-dots.svg'

const Links = () => {
  return (
    <div>
      <section>
        <h3>Download the extension</h3>
        <p>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a 
          favourite you’d like us to prioritize.
        </p>
      </section>

      <section>
        <div>
          <img src={chrome} alt="" />
          <h4>Add to Chrome</h4>
          <p>Minimum version 62</p>
          <img src={dots} alt="" />
          <button>Add & Install Extension</button>
        </div>

        <div>
          <img src={firefox} alt="" />
          <h4>Add to Firefox</h4>
          <p>Minimum version 55</p>
          <img src={dots} alt="" />
          <button>Add & Install Extension</button>
        </div>

        <div>
          <img src={opera} alt="" />
          <h4>Add to Opera</h4>
          <p>Minimum version 46</p>
          <img src={dots} alt="" />
          <button>Add & Install Extension</button>
        </div>
      </section>
      <section>
        <button>More Info</button>
      </section>
    </div>
  )
}

export default Links