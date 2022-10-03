import React, { useState, useEffect, useRef } from 'react'
import arrow from '../images/arrow-down.png'
import {Link} from 'react-router-dom'

function DropHeaderComp() {
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
             <p>Solutions</p>
            <img src={arrow} alt=''></img>
        </div>
       

        {/* hidden links */}
        <div className={drop ?'hidden-link show' :'hidden-link'}>
            <div onClick={()=>setDrop(false)}>
                <Link to='/solutions/esss'>Enterprise Security Solutions & Services (ESSS)</Link>
            </div>
            <div onClick={()=>setDrop(false)}>
                <Link to='/solutions/iss'>Infrastructure Solutions & Services (ISS)</Link>
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
  )
}

export default DropHeaderComp