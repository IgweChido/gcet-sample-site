import React from 'react'
import '../styles/HomeSec5.css'
import image from '../images/request.png'

function HomeSec5() {
  return (
    <div className='homesec5'>
        {/* marginp */}
        <div className='homesec5-main marginp'>
            {/* left */}
            <div className='hs5-left'>
                <p className='hs5-head'>Request for a Call Back</p>

                <p className='hs5-body'>We are available through our open channels to 
                    review your enquiry and respond at the shortest
                     possible time. Kindly fill the call back form 
                     to receive a call from one of our experts, or 
                     chat with us online. You can as well send us 
                     an email on info@gcetng.com and you will receive
                      our response within 24 hours.
                </p>
            </div>

            {/* right */}
            <div className='hs5-right'>
                <img src={image} alt=''></img>
            </div>
        </div>
    </div>
  )
}

export default HomeSec5