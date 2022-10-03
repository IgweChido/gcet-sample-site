import React from 'react'
import '../styles/HomeSec3.css'
import know from '../images/know-img.png'

function HomeSec3() {
  return (
    <div className='homesec3'>
       {/* container */}
       <div className='homesec3-cont'>

        {/* marginp */}
        <div className='homesec3-main ' >
            {/* left */}
            <div className='hs3-left'>
                <p className='hs3-head'>Know About GCET</p>

                <p className='hs3-body'>Global Concept Emerge Technologies Limited is an 
                    IT Solutions delivery company incorporated under
                    the Companies and Allied Matters Act 1990, to 
                    undertake and provide various information
                    technology, as well as advisory services to all sectors 
                    of the Nigerian economy including Government departments
                    & as well as educational institutions.
                </p>

                <p className='hs3-body1'>
                As certified technology company with interest in carefully 
                tailored Information Technology Solutions, we are geared solely
                 towards Consulting, Enterprise solutions architecture, 
                Service delivery and implementation of both Networks, Security and Infrastructure.
                </p>

                <button className='hs3-button'>About Us</button>

            </div>

            {/* right */}
            <div className='hs3-right'>
                <img src={know} alt=''></img>

            </div>
        </div>
       </div>


    </div>
  )
}

export default HomeSec3