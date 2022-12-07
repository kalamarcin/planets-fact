import { motion } from 'framer-motion'
import { useState } from 'react'

import './Planet.scss'

const Planet = props => {
  const [overview, setOverview] = useState(true)
  const [structure, setStructure] = useState(false)
  const [surface, setSurface] = useState(false)

  const changeClass1 = () => {
    setOverview(true)
    setStructure(false)
    setSurface(false)
  }
  const changeClass2 = () => {
    setOverview(false)
    setStructure(true)
    setSurface(false)
  }
  const changeClass3 = () => {
    setOverview(false)
    setStructure(false)
    setSurface(true)
  }
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
      <div className="planet-grid">
        <div className="planet-nav">
          <button className={overview ? `${props.className}` : ''} onClick={changeClass1}>
            <p className="hidden">01</p> OVERVIEW
          </button>
          <button className={structure ? `${props.className}` : ''} onClick={changeClass2}>
            <p className="hidden">02</p> STRUCTURE
          </button>
          <button className={surface ? `${props.className}` : ''} onClick={changeClass3}>
            <p className="hidden">03</p> SURFACE
          </button>
        </div>

        <div className="img-wrapper">
          {overview && <img src={props.imgAll} alt="" />}
          {structure && <img src={props.imgHalf} alt="" />}
          {surface && (
            <>
              <img className="inide-img" src={props.imgAll} alt="" />
              <img className="inside-all" src={props.imgInside} alt="" />
            </>
          )}
        </div>

        <div className="box-title">
          <div className="title">
            <h1>{props.data.name}</h1>
          </div>
          <div className="desc">
            {overview && <h2>{props.data.overview.content}</h2>}
            {structure && <h2>{props.data.structure.content}</h2>}
            {surface && <h2>{props.data.geology.content}</h2>}
            <h2 className="source">
              Source :
              <span>
                <a href={props.data.overview.source}> Wikipedia</a>
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div className="stats-grid">
        <div className="border-stats">
          <h3>ROTATION TIME</h3>
          <p>{props.data.rotation}</p>
        </div>
        <div className="border-stats">
          <h3>REVOLUTION TIME</h3>
          <p>{props.data.revolution}</p>
        </div>
        <div className="border-stats">
          <h3>RADIUS</h3>
          <p>{props.data.radius}</p>
        </div>
        <div className="border-stats">
          <h3>AVERAGE TEMP.</h3>
          <p>{props.data.temperature}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Planet
