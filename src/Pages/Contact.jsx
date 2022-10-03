import React from 'react'
//components
import Experience from '../components/Experiences'
import PageLayout from '../components/PageLayout';
function Contact() {
  return (
    <div>
        <PageLayout 
          text="Contact us" 
          subtext="GCET brings to the table a team of renowned professionals who have worked across all sectors of Nigeria's economy. We go the extra mile in providing customer-centric and comprehensive services that includes reliable Customer and Technical support with regular product updates. At Global Concept Emerge Technologies Limited, having built the necessary portfolio of technology partnerships, we combine the most effective ways to solve our customer's issues with the most secure and bespoke solutions."
          title="Send us a Message"
          messageInput="Message" 
          optionalInput="Message Subject"
        />
        <Experience />
    </div>
  )
}

export default Contact