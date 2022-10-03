import React from 'react'
import SolutionsBody from '../components/SolutionsBody'
import SolutionsHero from '../components/SolutionsHero'
import SolutionsPartner from '../components/SolutionsPartner'
import back from '../images/esss-back.png'
import body from '../images/esss-body.png'
function Solutions() {
  return (
    <div>
        <SolutionsHero image={back} header='Enterprise Security Solutions 
& Services (ESSS)'/>
        <SolutionsBody image={body}/>
        <SolutionsPartner/>
    </div>
  )
}

export default Solutions