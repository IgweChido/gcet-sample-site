import React from 'react'
import SolutionsBody from '../components/SolutionsBody'
import SolutionsHero from '../components/SolutionsHero'
import SolutionsPartner from '../components/SolutionsPartner'
import back from '../images/cms-back.png'

function CMS() {
  return (
    <div>
        <SolutionsHero image={back} header='Cloud and Mobile 
        Solutions'/>
        <SolutionsBody/>
        <SolutionsPartner/>
    </div>
  )
}

export default CMS