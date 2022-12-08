import mercury from '../../assets/planet-mercury.svg'
import venus from '../../assets/planet-venus.svg'
import earth from '../../assets/planet-earth.svg'
import mars from '../../assets/planet-mars.svg'
import jupiter from '../../assets/planet-jupiter.svg'
import saturn from '../../assets/planet-saturn.svg'
import uranus from '../../assets/planet-uranus.svg'
import neptune from '../../assets/planet-neptune.svg'
import './Home.scss'
import rocket from '../../assets/rocket.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import sun from '../../assets/sun.png'

const Home = () => {
  const nextVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.4, stiffness: 120 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.4, stiffness: 120 },
    },
  }
  return (
    <motion.div variants={nextVariants} initial="hidden" animate="visible" exit="exit">
      <div>
        <div className="wrapper">
          <div className="button-box">
            <Link to={'/mercury'}>
              <img src={rocket} alt="" className="animateRocket" />
              <h1>LET'S START!</h1>
              
            </Link>
          </div>
        </div>
      </div>
      <div className="solar">

      <img className='sun' src={sun} alt="" />
       <Link to='/mercury'> <img className='mercury-img' src={mercury} alt="" /></Link>
       <Link to='/venus'> <img className='venus-img' src={venus} alt="" /></Link>
       <Link to='/earth'> <img className='earth-img' src={earth} alt="" /></Link>
       <Link to='/mars'> <img className='mars-img' src={mars} alt="" /></Link>
       <Link to='/jupiter'> <img className='jupiter-img' src={jupiter} alt="" /></Link>
       <Link to='/saturn'> <img className='saturn-img' src={saturn} alt="" /></Link>
       <Link to='/uranus'> <img className='uranus-img' src={uranus} alt="" /></Link>
       <Link to='/neptune'><img className='neptune-img' src={neptune} alt="" /></Link>
      </div>
    </motion.div>
  )
}

export default Home
