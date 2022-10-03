import React from 'react'
import SolutionsBody from '../components/SolutionsBody'
import SolutionsHero from '../components/SolutionsHero'
import SolutionsPartner from '../components/SolutionsPartner'
import back from '../images/bes-back.png'

function BES() {
  return (
    <div><SolutionsHero image={back} header='Business Enterprise
    Software'/>
    <SolutionsBody/>
        <SolutionsPartner/>
    </div>
  )
}

export default BES