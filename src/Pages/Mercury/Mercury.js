import { useState } from 'react'
import { data } from './data'
import './Mercury.scss'
import mercuryAll from '../../assets/planet-mercury.svg'
import mercuryHalf from '../../assets/planet-mercury-internal.svg'
import mercuryInside from '../../assets/geology-mercury.png'

const Mercury = () => {
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

  return (
    <>
      <div className="planet-grid">
        <div className="planet-nav">
          <button className={overview ? 'active' : ''} onClick={changeClass1}>
            OVERVIEW
          </button>
          <button className={structure ? 'active' : ''} onClick={changeClass2}>
            STRUCTURE
          </button>
          <button className={surface ? 'active' : ''} onClick={changeClass3}>
            SURFACE
          </button>
        </div>
        <div className="img-wrapper">
          {overview && <img src={mercuryAll} alt="" />}
          {structure && <img src={mercuryHalf} alt="" />}
          {surface && <img src={mercuryInside} alt="" />}
        </div>
        <div className="title">
          <h1>{data.name.toUpperCase()}</h1>
        </div>
        <div className="desc">
          {overview && <h2>{data.overview.content}</h2>}
          {structure && <h2>{data.structure.content}</h2>}
          {surface && <h2>{data.geology.content}</h2>}
          <h2 className="source">
            Source :
            <span>
              <a href={data.overview.source}> Wikipedia</a>
            </span>
          </h2>
        </div>
      </div>
      <div className="stats-grid">
        <div className="border-stats">
          <h3>ROTATION TIME</h3>
          <p>{data.rotation}</p>
        </div>
        <div className="border-stats">
          <h3>REVOLUTION TIME</h3>
          <p>{data.revolution}</p>
        </div>
        <div className="border-stats">
          <h3>RADIUS</h3>
          <p>{data.radius}</p>
        </div>
        <div className="border-stats">
          <h3>AVERAGE TEMP.</h3>
          <p>{data.temperature}</p>
        </div>
      </div>
    </>
  )
}

export default Mercury
