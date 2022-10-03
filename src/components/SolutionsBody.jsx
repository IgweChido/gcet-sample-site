import React from 'react'
import '../styles/Solutions.css'


function SolutionsBody(props) {
  return (
    <div className='sol-body'>
        {/* marginp */}
        <div className='sol-b-main marginp'>
            {/* left */}
            <div className='sol-b-left'>
                {/* line */}
                <div className='sol-b-line'></div>

                {/* overview */}
                <p className='sol-b-head'>Overview</p>

                {/* image */}
                <div className='sol-b-image'>
                    <img src={props.image} alt=''></img>
                </div>

            </div>

            {/* right */}
            <div className='sol-b-right'>
                {/* words */}
                <div className='esss-word'>
                    <p className='word1'>
                    Our goal for this highly sensitive area is to provide security solutions across all levels of the IT Infrastructure from Network, Servers, Storage infrastructure to Application and Database.
                    </p>

                    <p className='word1'>
                    With our security solutions and services, we deliver end to end Information, Network, Data, process and people security for organizations of all types. Such products and services includes:
                    </p>
                    {/* list */}
                    <div className='esss-list'>
                        {/* item */}
                        <div className='esss-item'>
                            {/* dot */}
                            <div className='esss-dot'></div>
                            {/* word */}
                            <p className='esss-p'>  UTMs/NGFs/NGIPS</p>
                        </div>

                        {/* item */}
                        <div className='esss-item'>
                            {/* dot */}
                            <div className='esss-dot'></div>
                            {/* word */}
                            <p className='esss-p'>    Endpoint Security (antivirus/antimalware/antibot/Encryption)</p>
                        </div>


                        {/* item */}
                        <div className='esss-item'>
                            {/* dot */}
                            <div className='esss-dot'></div>
                            {/* word */}
                            <p className='esss-p'>  Gateway security solutions</p>
                        </div>

                        {/* item */}
                        <div className='esss-item'>
                            {/* dot */}
                            <div className='esss-dot'></div>
                            {/* word */}
                            <p className='esss-p'>  Events and log monitoring /management</p>
                        </div>

                        {/* item */}
                        <div className='esss-item'>
                            {/* dot */}
                            <div className='esss-dot'></div>
                            {/* word */}
                            <p className='esss-p'>   DB, App & data encryption</p>
                        </div>

                        <div className='esss-item'>
                            {/* dot */}
                            <div className='esss-dot'></div>
                            {/* word */}
                            <p className='esss-p'>     System & user activity monitoring and management</p>
                        </div>
                    </div>

                    {/* bold */}
                    <p className='esss-bold'>
                         We help organizations secure, manage, monitor, or document what is important to them in very cost-effective manner.
                    </p>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default SolutionsBody