import React from 'react'
import { Link } from 'react-router-dom'
import './Mobilenav.scss'
import arrow from '../../assets/icon-chevron.svg'
import { GlobalStoreContext } from '../../Store/GlobalStore'
import { useContext } from 'react'
import data from '../../data.json'

const Mobilenav = () => {
  const GlobalStore = useContext(GlobalStoreContext)

  const changeState = () => {
    GlobalStore.changeSidebar()
  }

  return (
    <div className="mobile">
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
    </div>
  )
}

export default Mobilenav
