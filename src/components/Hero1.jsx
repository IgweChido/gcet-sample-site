import React from 'react'
import '../styles/Hero.css'

import hero2 from '../images/hero2.png'

function Hero1() {
  return (
    <div className='hero'>
        {/* marginp */}
        <div className='hero-main marginp'>

            {/* left */}
            <div className='hero-left'>
                <p className='h-header'>Plan Your Dream</p>

                <p className='h-p'>
                You have an IT roadmap, or have not developed one yet,
                 we are here to help you build 
                your IT dream from planning phase to full execution.
                </p>

                {/* circle dots */}
                <div className='h-circle'>
                    <div ></div>
                    <div className='current-circle'></div>
                    <div></div>
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
                <img src={hero2} alt=''></img>

            </div>
        </div>
    </div>
  )
}

export default Hero1