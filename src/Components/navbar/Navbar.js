import './Navbar.scss'
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalStoreContext } from '../../Store/GlobalStore'
import { useNavigate } from 'react-router-dom'
import * as MdOutlineClose from 'react-icons/md'

// import data from '../../data.json'

const Navbar = () => {
  const GlobalStore = useContext(GlobalStoreContext)
  const navigate = useNavigate()

  const showSidebar = () => {
    GlobalStore.changeSidebar()
  }

  const closeSidebar = () => {
    GlobalStore.changeSidebar()
    navigate(-1)
  }

  return (
    <>
    
      <Link to="/mobile" className='burgerMenu'>
        {!GlobalStore.sidebar && <FaIcons.FaBars onClick={showSidebar} className="hamburger" />}
        {GlobalStore.sidebar && <MdOutlineClose.MdOutlineClose onClick={closeSidebar} className="close" />}
      </Link>
    </>
  )
}

export default Navbar
