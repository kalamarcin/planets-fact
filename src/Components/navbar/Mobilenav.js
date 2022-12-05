import React from 'react'
import { Link } from 'react-router-dom'
import './Mobilenav.scss'
import arrow from '../../assets/icon-chevron.svg'
import { GlobalStoreContext } from '../../Store/GlobalStore'
import { useContext } from 'react'

const Mobilenav = () => {
  const GlobalStore = useContext(GlobalStoreContext)

  const changeState = () => {
    GlobalStore.changeSidebar()
  }

  return (
    <div className="mobile">
      <ul>
        <li>
          <Link to="/mercury" onClick={changeState}>
            <i className="fa-solid fa-circle mercury" />
            MERCURY
          </Link>
          <img src={arrow} alt="" />
        </li>
        <li>
          <Link to="/venus" onClick={changeState}>
            <i className="fa-solid fa-circle venus" />
            VENUS
          </Link>
          <img src={arrow} alt="" />
        </li>
        <li>
          <Link to="/earth" onClick={changeState}>
            <i className="fa-solid fa-circle earth" />
            EARTH
          </Link>
          <img src={arrow} alt="" />
        </li>
        <li>
          <Link to="/mars" onClick={changeState}>
            <i className="fa-solid fa-circle mars" />
            MARS
          </Link>
          <img src={arrow} alt="" />
        </li>
        <li>
          <Link to="/jupiter" onClick={changeState}>
            <i className="fa-solid fa-circle jupiter" />
            JUPITER
          </Link>
          <img src={arrow} alt="" />
        </li>
        <li>
          <Link to="/saturn" onClick={changeState}>
            <i className="fa-solid fa-circle saturn" />
            SATURN
          </Link>
          <img src={arrow} alt="" />
        </li>
        <li>
          <Link to="/uranus" onClick={changeState}>
            <i className="fa-solid fa-circle uranus" />
            URANUS
          </Link>
          <img src={arrow} alt="" />
        </li>
        <li>
          <Link to="/neptune" onClick={changeState}>
            <i className="fa-solid fa-circle neptune" />
            NEPTUNE
          </Link>
          <img src={arrow} alt="" />
        </li>
      </ul>
    </div>
  )
}

export default Mobilenav
