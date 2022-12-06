import { useState } from 'react'
import { data } from './data'
import './Mercury.scss'
import mercuryAll from '../../assets/planet-mercury.svg'
import mercuryHalf from '../../assets/planet-mercury-internal.svg'

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
      </div>
      <div className="title">
        <h1>{data.name}</h1>
      </div>
      <div className="desc">{overview && <h2>{data.overview.content}</h2>}</div>

      <h2 className="source">
        Source :
        <span>
          <a href={data.overview.source}> Wikipedia</a>
        </span>
      </h2>
    </>
  )
}

export default Mercury
