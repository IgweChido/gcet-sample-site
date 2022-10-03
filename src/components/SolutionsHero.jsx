import React from 'react'
import '../styles/Solutions.css'

function SolutionsHero(props) {

  const backGround={
    backgroundImage:`url(${props.image})`
  }

  
  return (
    <div className='sol-hero' style={backGround}>
        {/* marginp */}
        <div className='sol-h-main marginp'>
            {/* word */}
            <div className='sol-h-word' >
                <p>{props.header}
                </p>
            </div>
        </div>
    </div>
  )
}

export default SolutionsHero