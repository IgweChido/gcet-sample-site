import React, { useState, useEffect, useRef } from 'react'
import arrow from '../images/arrow-down.png'
import {Link} from 'react-router-dom'

function DropHeaderComp1() {
    const [drop, setDrop] = useState(false)
    const ref = useRef(null);
    

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (ref.current && !ref.current.contains(event.target)) {
            drop && setDrop(false)
          }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
          document.removeEventListener('click', handleClickOutside, true);
        };
      }, [ drop ]);

      
  return (
    //  {/* link */}
     <div  ref={ref}>
        <div className='drop-link' onClick={()=>{
            drop?
            setDrop(false)
            :
            setDrop(true)
            
        }}>
             <p>Services</p>
            <img src={arrow} alt=''></img>
        </div>
       

        {/* hidden links */}
        <div className={drop ?'hidden-link1 show' :'hidden-link1'}>
            <div>
                <Link to=''>IT Advisory and Managed Services</Link>
            </div>
            <div>
                <Link to=''>Network Assessment Services</Link>
            </div>
            
        </div>
    </div>
  )
}

export default DropHeaderComp1