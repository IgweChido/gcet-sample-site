import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Footer.css'
import logo from '../images/footer-logo.svg'
import phone from '../images/phone.svg'
import mail from '../images/mail.svg'
import copy from '../images/copyright.svg'

function Footer() {
  return (
    <div className='footer'>
        {/* margin p */}
        <div className='foot-main marginp'>
            {/* top */}
            <div className='foot-top'>
                {/* part 1 */}
                <div className='part1'>
                    <div className='foot-logo'>
                        <img src={logo} alt=''></img>
                    </div>

                    {/* words */}
                    <div>
                        <p>
                            Global Concept Emerge Technologies
                            Limited has infrastructure, 
                            network & security certified experts and 
                            specialists in these business IT solutions.
                        </p>
                    </div>

                </div>

                {/* part 2 */}
                <div className='part2'>
                    <p className='foot-head'>Solution</p>

                    <div>
                            <div>
                                <Link to=''>Enterprise Security Solutions & Services (ESSS)</Link>
                            </div>
                            <div>
                                <Link to=''>Infrastructure Solutions & Services (ISS)</Link>
                            </div>
                            <div>
                                <Link to=''>Business Service Management Solutions</Link>
                            </div>
                            <div>
                                <Link to=''>Enterprise Networking Solutions</Link>
                            </div>
                            <div>
                                <Link to=''>Cloud and Mobile Solutions</Link>
                            </div>
                            <div>
                                <Link to=''>Business Enterprise Software</Link>
                            </div>
                    </div>
                    

                </div>

                {/* part 3 */}
                <div className='part3'>

                    <p className='foot-head'>Services</p>

                    <div className='foot-links'>
                            <div>
                                <Link to=''>IT Advisory and Managed Services</Link>
                            </div>
                            <div>
                                <Link to=''>Network Assessment Services</Link>
                            </div>
                            
                    </div>

                </div>

                {/* part 4 */}
                <div className='part4'>
                    <p className='foot-head'>Corporate Office</p>

                    <div className='part4-dets'>
                        <p>24b Tijani Amodu Close, off Sanusi Fafunwa, Victoria Island Lagos.</p>
                        <div className='p4-dets'>
                            <img src={phone} alt=''></img>
                            <p>+234 8118193875</p>
                        </div>
                        <div className='p4-dets'>
                            <img src={mail} alt=''></img>
                            <p>info@gcetng.com</p>
                        </div>
                    </div>

                </div>

            </div>

            {/* bottom */}
            <div className='foot-bottom'>
                <img src={copy} alt=''></img>
                <p>Copyrights GCET. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer