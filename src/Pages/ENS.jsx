import React from 'react'
import SolutionsBody from '../components/SolutionsBody'
import SolutionsHero from '../components/SolutionsHero'
import SolutionsPartner from '../components/SolutionsPartner'
import back from '../images/ens-back.png'

function ENS() {
  return (
    <div>
        <SolutionsHero image={back} header='Enterprise Networking 
         Solution'/>
         <SolutionsBody/>
        <SolutionsPartner/>
    </div>
  )
}

export default ENS