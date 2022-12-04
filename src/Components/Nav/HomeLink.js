import styles from '../../styles/Nav.module.scss'
import { Link } from 'react-router-dom'

const HomeLink = () => {
  return (
    <div className={styles.home}>
      <Link to="/">THE PLANETS</Link>
    </div>
  )
}

export default HomeLink
