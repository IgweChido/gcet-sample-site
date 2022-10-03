import React from 'react'
import SolutionsBody from '../components/SolutionsBody'
import SolutionsHero from '../components/SolutionsHero'
import SolutionsPartner from '../components/SolutionsPartner'
import back from '../images/bsms-back.png'

function BSMS() {
  return (
    <div>
         <SolutionsHero image={back} header='Business Service 
          Management Solutions'/>
          <SolutionsBody/>
        <SolutionsPartner/>
    </div>
  )
}

export default BSMS