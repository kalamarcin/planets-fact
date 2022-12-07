
import './Home.scss'

import rocket from '../../assets/rocket.png'

import { Link } from 'react-router-dom'

const Home = () => {
 
  
  return (
    <div>
      <div className="wrapper">
        <div className="button-box">
          <Link to={'/mercury'}>
            <img src={rocket} alt="" className='animateRocket' />
            LET'S START!
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
