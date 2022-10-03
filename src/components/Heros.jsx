import React, { useEffect, useState } from 'react'
import Hero from './Hero'
import Hero1 from './Hero1'
import Hero2 from './Hero2'
import hero1 from '../images/hero1.png'
import hero2 from '../images/hero2.png'
import hero3 from '../images/hero3.png'

function Heros() {
    const [state, setState]= useState(0)
    
    const show =[{id:'1',head:'Grow Your Business', word:' We help businesses build their IT organisation from the heart of growth and innovation to increased all-round efficiency.', image:hero1},
    {id:'2',head:'Plan Your Dream', word:' You have an IT roadmap, or have not developed one yet, we are here to help you build your IT dream from planning phase to full execution.', image:hero2},
    {id:'3',head:'Make Your Dream True', word:' We understand that all thriving global businesses rely on technology to sustain growth, we are your right partner for IT initiatives, implementation and support.', image:hero3},]
    
     useEffect(()=>{
        setTimeout(()=>{
            setState((state+1) % show.length)
        },5000)
     },[state])
   
       
  
   

  return (
    <div>
     {
        show.map((item, i)=>{
            let className='';
            if(i=== state){
                className='active-h'
            }
            else{
                className='nActive-h'
            }
            return <Hero key={item.id} head={item.head} word={item.word} image={item.image} class={className} id={item.id}/>
         } )
     }
      
    </div>
  )
}

export default Heros