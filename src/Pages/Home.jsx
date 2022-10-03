import React from 'react'
import Hero from '../components/Hero'
import Hero1 from '../components/Hero1'
import Hero2 from '../components/Hero2'
import Heros from '../components/Heros'
import HomeSec2 from '../components/HomeSec2'
import HomeSec3 from '../components/HomeSec3'
import HomeSec4 from '../components/HomeSec4'
import HomeSec5 from '../components/HomeSec5'
import HomeSec6 from '../components/HomeSec6'

function Home() {
  return (
    <div>
        <Heros/>
       
        <HomeSec2/>
        <HomeSec3/>
        <HomeSec4/>
        <HomeSec5/>
        <HomeSec6/>
    </div>
  )
}

export default Home