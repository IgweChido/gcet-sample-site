import React from 'react'
import '../styles/Solutions.css'
import '../styles/HomeSec6.css'
import PartnerComp from './PartnerComp'
import PartnerImg from '../PartnersImg'

function SolutionsPartner() {
    const Images=[PartnerImg.paloalto, PartnerImg.fortinet, 
        PartnerImg.f5, PartnerImg.cisco, PartnerImg.baracuda, PartnerImg.coreview]
  return (
    <div className='sol-partners'>
         {/* marginp */}
         <div className='homesec6-main marginp'>

            <p className='hs6-head'>Our Partners</p>

            {/* partners */}
            <div className='sol-partner'>
            
                {
                    Images.map((img, index)=>(
                        <PartnerComp image={Images[index]}/>
                    ))
                
                    
                }
            </div>
        </div>
    </div>
  )
}

export default SolutionsPartner