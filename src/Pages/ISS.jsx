import React from 'react'
import SolutionsBody from '../components/SolutionsBody'
import SolutionsHero from '../components/SolutionsHero'
import SolutionsPartner from '../components/SolutionsPartner'
import back from '../images/iss-back.png'
import body from '../images/iss-body.png'
function ISS() {
  return (
    <div>
        <SolutionsHero image={back} header='Infrastructure Solutions 
        & Services (ISS)'/>
        <SolutionsBody image={body}/>
        <SolutionsPartner/>
    </div>
  )
}

export default ISS