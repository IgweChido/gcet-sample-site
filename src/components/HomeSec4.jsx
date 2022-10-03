import React from 'react'
import '../styles/HomeSec4.css'
import image from '../images/proven.png'

function HomeSec4() {
  return (
    <div className='homesec4'>
        {/* marginp */}
        <div className='homesec4-main marginp'>
            {/* left */}
            <div className='hs4-left'>
                <img src={image} alt=''></img>

            </div>

            {/* right */}
            <div className='hs4-right'>
                <p className='hs4-head'>
                    Our 21 Years of 
                    Proven Experience
                </p>

                <p className='hs4-body'>
                    Our promise to you is this; From the general to the more 
                    specific solutions, we will help you do the most
                    with the least required, while making the Complex Look
                    Simple.
                </p>

            </div>
        </div>
    </div>
  )
}

export default HomeSec4