import React from 'react'
import HomeLink from './HomeLink'
import NavLinks from './NavLinks'
import styles from '../../styles/Nav.module.scss'

const Navigation = () => {
  return (
    <>
      <HomeLink />
      <nav className={styles.navigation}>
        <NavLinks />
      </nav>
    </>
  )
}

export default Navigation
