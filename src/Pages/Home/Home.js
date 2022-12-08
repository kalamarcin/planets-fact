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
import Tippy from '@tippyjs/react'


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
            <img src={rocket} alt="" className="animateRocket" />
            <Link to={'/mercury'}>
              <h1>LET'S START!</h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="solar">
        <img className="sun" src={sun} alt="" />
        <Link  to="/mercury">
          <Tippy content={<div className='tippy'><h1>Mercury</h1></div>}>
          <img  className="mercury-img" src={mercury} alt="" />
          </Tippy>
        </Link>
        <Link to="/venus">
        <Tippy content={<div className='tippy'><h1>Venus</h1></div>}>
          <img className="venus-img" src={venus} alt="" />
          </Tippy>
        </Link>
        <Link to="/earth">
        <Tippy content={<div className='tippy'><h1>earth</h1></div>}>
          <img className="earth-img" src={earth} alt="" />
          </Tippy>
        </Link>
        <Link to="/mars">
        <Tippy content={<div className='tippy'><h1>mars</h1></div>}>
          <img className="mars-img" src={mars} alt="" />
          </Tippy>
        </Link>
        <Link to="/jupiter">
        <Tippy content={<div className='tippy'><h1>jupiter</h1></div>}>
          <img className="jupiter-img" src={jupiter} alt="" />
          </Tippy>
        </Link>
        <Link to="/saturn">
        <Tippy content={<div className='tippy'><h1>saturn</h1></div>}>
          <img className="saturn-img" src={saturn} alt="" />
          </Tippy>
        </Link>
        <Link to="/uranus">
        <Tippy content={<div className='tippy'><h1>uranus</h1></div>}>
          <img className="uranus-img" src={uranus} alt="" />
          </Tippy>
        </Link>
        <Link to="/neptune">
        <Tippy content={<div className='tippy'><h1>neptune</h1></div>}>
          <img className="neptune-img" src={neptune} alt="" />
          </Tippy>
        </Link>
      </div>
    </motion.div>
  )
}

export default Home
