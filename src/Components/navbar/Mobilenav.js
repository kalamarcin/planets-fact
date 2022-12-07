import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../../assets/icon-chevron.svg'
import { GlobalStoreContext } from '../../Store/GlobalStore'
import { useContext } from 'react'
import { motion } from 'framer-motion'
import { data } from '../../data'
import './Mobilenav.scss'

const Mobilenav = () => {
  const GlobalStore = useContext(GlobalStoreContext)

  const changeState = () => {
    GlobalStore.changeSidebar()
  }
  const nextVariants = {
    hidden: {
      x: '100vw',
    },
    visible: {
      x: 0,
      transition: { duration: 0.6, stiffness: 120 },
    },
    exit: { 
      x: '100vw',
      transition: { duration: 0.6, stiffness: 120 }
   },
  }
  return (
    <motion.div variants={nextVariants} initial="hidden" animate="visible" exit="exit" className="mobile">
      <ul>
        {data.map((item, index) => {
          return (
            <li key={index}>
              <i className={`fa-solid fa-circle ${item.name.toLowerCase()}`} />
              <Link to={`/${item.name.toLowerCase()}`} onClick={changeState}>
                {item.name.toUpperCase()}
                <img src={arrow} alt="" />
              </Link>
            </li>
          )
        })}
      </ul>
    </motion.div>
  )
}

export default Mobilenav
