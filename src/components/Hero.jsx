import React from 'react'
import '../styles/Hero.css'

import hero1 from '../images/hero1.png'

function Hero(props) {
  return (
    <div className={`hero ${props.class}`}>
        {/* marginp */}
        <div className='hero-main marginp'>

            {/* left */}
            <div className='hero-left'>
                <p className='h-header'>{props.head}</p>

                <p className='h-p'>
                {props.word}
                </p>

                {/* circle dots */}
                <div className='h-circle'>
                    <div className={props.id==='1' && 'current-circle'}></div>
                    <div className={props.id==='2' && 'current-circle'}></div>
                    <div className={props.id==='3' && 'current-circle'}></div>
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
                <img src={props.image} alt=''></img>

            </div>
        </div>
    </div>
  )
}

export default Hero