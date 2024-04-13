import React from 'react';
import bookmark from '../../images/logo-bookmark.svg';
import facebook from '../../images/icon-facebook.svg';
import twitter from '../../images/icon-twitter.svg'

const Footer = () => {
  return (
    <div>
      <section className="bg-blue-500">
        <div>
        <img src={bookmark} alt="" />
        <div>
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>
        </div>

        <div >
          <img src={facebook} alt="" />
          <img src={twitter} alt=""/>
        </div>
      </section>
    </div>
  )
}

export default Footer