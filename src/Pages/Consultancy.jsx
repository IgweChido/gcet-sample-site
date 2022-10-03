import React from 'react'
//componenets
import PageLayout from '../components/PageLayout';
function Consultancy() {
  return (
    <div>
        <PageLayout 
          text="How can we help?" 
          subtext="Enter your information below, and we will follow up with an email to find a suitable day and time to connect. We look forward to learning more about you and your organization and how we can help achieve your goals."
          title="Get Consultancy"
          messageInput="What can we help you with?" 
          optionalInput="Organization"
        />
    </div>
  )
}

export default Consultancy