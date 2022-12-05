// import { Link } from 'react-router-dom'
import './Navbar.scss'
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom'
// import * as AiIcons from 'react-icons/ai';
// import { useState } from 'react';
// import data from '../../data.json'

const Navbar = () => {
  // const [sidebar, setSidebar] = useState(false)

  // const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <Link to="/mobile">
        <FaIcons.FaBars className="hamburger" />
      </Link>
    </>
  )
}

export default Navbar
