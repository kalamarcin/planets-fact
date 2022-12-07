import { Link } from 'react-router-dom'
import { data } from '../../data'
import '../../styles/Header.scss'

const Navigation = () => {
  return (
    <div className="navigation-full">
      <ul>
        {data.map((item, index) => {
          return (
            <li key={index}>
              <Link to={`/${item.name.toLowerCase()}`}>{item.name.toUpperCase()}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Navigation
