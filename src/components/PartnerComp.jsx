import React from 'react'

import PartnerImg from '../PartnersImg'

function PartnerComp(props) {
  return (
    // {/* partner component */}
    <div className='partner-comp'>
        <img src={props.image} alt=''></img>

    </div>
  )
}

export default PartnerComp