import React from 'react'
import '../styles/Experience.css';

//images
import experience from '../images/experience.jpg'

function Experiences() {
  return (
    <div className='gcet__experience marginp'>
        <div className="gcet__experience-img">
            <img src={experience} alt="people" />
        </div>
        <div className="gcet__experience-text">
            <h2>Our 21 Years of Proven Experience</h2>
            <p>Our promise to you is this; From the general to the more specific solutions, we will help you do the most with the least required, while making the Complex Look Simple.</p>
            
        </div>
    </div>
  )
}

export default Experiences