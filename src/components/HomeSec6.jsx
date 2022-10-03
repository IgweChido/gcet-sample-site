import React from 'react'
import '../styles/HomeSec6.css'
import PartnerImg from '../PartnersImg'
import PartnerComp from './PartnerComp'

function HomeSec6() {
    const Images=[PartnerImg.hp,PartnerImg.dell,PartnerImg.nimble,PartnerImg.netapp,
        PartnerImg.veeam,PartnerImg.baracuda,PartnerImg.coreview,PartnerImg.commvault,
        PartnerImg.vmware,PartnerImg.cisco,PartnerImg.sophos,PartnerImg.f5,PartnerImg.microsoft,
        PartnerImg.trendmicro,PartnerImg.forescout,PartnerImg.fortinet,PartnerImg.bcloud,
        PartnerImg.alienvault]
  return (
    <div className='homesec6'>
        {/* marginp */}
        <div className='homesec6-main marginp'>

            <p className='hs6-head'>Our Partners</p>

            {/* partners */}
            <div className='hs6-partners'>
               
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

export default HomeSec6