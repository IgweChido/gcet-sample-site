import React from 'react'
import '../styles/Hero.css'

import hero3 from '../images/hero3.png'


function Hero2() {
  return (
    <div className='hero'>
        {/* marginp */}
        <div className='hero-main marginp'>

            {/* left */}
            <div className='hero-left'>
                <p className='h-header'>Make Your Dream True</p>

                <p className='h-p'>
                We understand that all thriving global businesses rely on technology
                 to sustain growth, we are your right 
                partner for IT initiatives, implementation and support.
                </p>

                {/* circle dots */}
                <div className='h-circle'>
                    <div ></div>
                    <div></div>
                    <div className='current-circle'></div>
                </div>

                {/* buttons */}
                <div className='hero-buttons'>
                    {/* button1 */}
                    <button className='h-b1'>Get Consultancy</button>

                    {/* button2 */}
                    <button className='h-b2'> Quick Call back</button>
                </div>

            </div>

            {/* right */}
            <div className='hero-right'>
                <img src={hero3} alt=''></img>

            </div>
        </div>
    </div>
  )
}

export default Hero2