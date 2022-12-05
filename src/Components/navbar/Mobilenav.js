import React from 'react'
import { Link } from 'react-router-dom'
import './Mobilenav.scss'
import arrow from '../../assets/icon-chevron.svg'

const Mobilenav = () => {
  return (
    <div className="mobile">
      <ul>
        <li>
          <Link to="/mercury">
            <i className="fa-solid fa-circle mercury" />
            MERCURY
          </Link>
          <img src={arrow} alt="" />
        </li>
        <li>
          <Link to="/venus">
            <i className="fa-solid fa-circle venus" />
            VENUS
          </Link>
          <img src={arrow} alt="" />
        </li>
        <li>
          <Link to="/earth">
            <i className="fa-solid fa-circle earth" />
            EARTH
          </Link>
          <img src={arrow} alt="" />
        </li>
        <li>
          <Link to="/mars">
            <i className="fa-solid fa-circle mars" />
            MARS
          </Link>
          <img src={arrow} alt="" />
        </li>
        <li>
          <Link to="/jupiter">
            <i className="fa-solid fa-circle jupiter" />
            JUPITER
          </Link>
          <img src={arrow} alt="" />
        </li>
        <li>
          <Link to="/saturn">
            <i className="fa-solid fa-circle saturn" />
            SATURN
          </Link>
          <img src={arrow} alt="" />
        </li>
        <li>
          <Link to="/uranus">
            <i className="fa-solid fa-circle uranus" />
            URANUS
          </Link>
          <img src={arrow} alt="" />
        </li>
        <li>
          <Link to="/neptune">
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
