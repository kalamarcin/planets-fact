import React from 'react'
import sun from '../../assets/sun.png'
import './Home.scss'
const Home = () => {
  return (
    <div>
      <div className="galaxy">
        <img className='sun' src={sun} alt="" />
      </div>
    </div>
  )
}

export default Home
