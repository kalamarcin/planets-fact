import React from 'react'
import sun from '../../assets/sun.png'
import './Home.scss'
import stars from '../../assets/boken.png'
const Home = () => {
  return (
    <div>
      <div className="galaxy">
        <img className='stars' src={stars} alt="" />
        <img className="sun" src={sun} alt="" />
      </div>
    </div>
  )
}

export default Home
