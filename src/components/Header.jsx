import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Header.css'
import logo from '../images/logo.svg'
import {Link} from 'react-router-dom'
import cart from '../images/cart.svg'
import DropHeaderComp from './DropHeaderComp'
import DropHeaderComp1 from './DropHeaderComp1'

function Header() {
    const navigate = useNavigate('')
  return (
    <div className='head-container'>
       <div className='head-main marginp'>

        {/* logo */}
        <Link to='/' className='logo-div'>
            <img src={logo} alt=''></img>

        </Link>

        {/* links and buttons */}
        <div className='link-buttons'>
            {/* link */}
            <div>
                <Link to=''>About us</Link>
            </div>

            {/* drop down link */}
            <DropHeaderComp/>

            {/* drop down link */}
            <DropHeaderComp1/>

             {/* link */}
             <div>
                <Link to='/blog'>Blog</Link>
            </div>

             {/* link */}
             <div>
                <Link to='/contact'>Contact</Link>
            </div>

            {/* cart */}
            <div>
                <img src={cart} alt=''></img>
            </div>

            {/* button */}
            <button onClick={()=>
             navigate('/consultancy')
            }>Get Consultancy</button>

        </div>

       </div>

    </div>
  )
}

export default Header