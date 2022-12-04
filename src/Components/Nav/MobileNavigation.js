import HomeLink from "./HomeLink"
import NavLinks from "./NavLinks"
import styles from '../../styles/Nav.module.scss'

const MobileNavigation = () => {
  return (
    <>
    <HomeLink />
    <nav className={styles.mobileNavigation}>
    <NavLinks />
    </nav>
    </>
  )
}

export default MobileNavigation