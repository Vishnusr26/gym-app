import React from 'react'
import aboutimage from '../images/about2.jpeg'

function About() {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={aboutimage} alt='' />
        </div>
        <div className='about-text'>
            <h1>LEARN MORE...</h1>
            <p>Our team is available for 24 hours.</p>
            <button>READ MORE</button>
        </div>
    </div>
  )
}

export default About