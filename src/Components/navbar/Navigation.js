import { NavLink } from 'react-router-dom'
import { data } from '../../data'
import '../../styles/Header.scss'

const Navigation = ({isActive}) => {
  return (
    
    <div className="navigation-full">
      <ul>
        {data.map((item, index) => {
          return (
            
            <li key={index}>
              
              <NavLink className={item.name.toLowerCase()} to={`/${item.name.toLowerCase()}`}>{item.name.toUpperCase()}</NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Navigation
