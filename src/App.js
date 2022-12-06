import { Link, Route, Routes, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalStoreContext } from './Store/GlobalStore'
import { AnimatePresence } from 'framer-motion'
//img
import mercuryAll from './assets/planet-mercury.svg'
import mercuryHalf from './assets/planet-mercury-internal.svg'
import merkuryInside from './assets/geology-mercury.png'
import venusAll from './assets/planet-venus.svg'
import venusHalf from './assets/planet-venus-internal.svg'
import venusInside from './assets/geology-venus.png'
import earthAll from './assets/planet-earth.svg'
import earthHalf from './assets/planet-earth-internal.svg'
import earthInside from './assets/geology-earth.png'
import marsAll from './assets/planet-mars.svg'
import marsHalf from './assets/planet-mars-internal.svg'
import marsInside from './assets/geology-mars.png'
import jupiterAll from './assets/planet-jupiter.svg'
import jupiterHalf from './assets/planet-jupiter-internal.svg'
import jupiterInside from './assets/geology-jupiter.png'
import saturnAll from './assets/planet-saturn.svg'
import saturnHalf from './assets/planet-saturn-internal.svg'
import saturnInside from './assets/geology-saturn.png'
import uranusAll from './assets/planet-uranus.svg'
import uranusHalf from './assets/planet-uranus-internal.svg'
import uranusInside from './assets/geology-uranus.png'
import neptuneAll from './assets/planet-neptune.svg'
import neptuneHalf from './assets/planet-neptune-internal.svg'
import neptuneInside from './assets/geology-neptune.png'
//data
import { mercury, venus, earth, mars, jupiter, saturn, uranus, neptune } from './Components/Planet/data'
//pages
import Home from './Pages/Home/Home'
import Navbar from './Components/navbar/Navbar'
import Mobilenav from './Components/navbar/Mobilenav'
import Navigation from './Components/navbar/Navigation'
import Planet from './Components/Planet/Planet'
// import Mercury from './Pages/Mercury/Mercury'
//styles
import './styles/App.scss'
import './styles/Header.scss'

const App = () => {
  const GlobalStore = useContext(GlobalStoreContext)

  const changeSidebarState = () => {
    GlobalStore.handleFalse()
  }
  const location = useLocation()

  return (
    <div className="app">
      <div className="header">
        <h1 className="title">
          <Link to="/" onClick={changeSidebarState}>
            THE PLANETS
          </Link>
        </h1>
        <Navigation />
        <Navbar />
      </div>
      <AnimatePresence>
        <Routes key={location.pathname} location={location}>
          <Route path="/mobile" element={<Mobilenav />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/mercury"
            element={
              <Planet
                className="mercury"
                imgAll={mercuryAll}
                imgHalf={mercuryHalf}
                imgInside={merkuryInside}
                data={mercury}
              />
            }
          />
          <Route
            path="/venus"
            element={
              <Planet className="venus" imgAll={venusAll} imgHalf={venusHalf} imgInside={venusInside} data={venus} />
            }
          />
          <Route
            path="/earth"
            element={
              <Planet className="earth" imgAll={earthAll} imgHalf={earthHalf} imgInside={earthInside} data={earth} />
            }
          />
          <Route
            path="/mars"
            element={<Planet className="mars" imgAll={marsAll} imgHalf={marsHalf} imgInside={marsInside} data={mars} />}
          />
          <Route
            path="/jupiter"
            element={
              <Planet
                className="jupiter"
                imgAll={jupiterAll}
                imgHalf={jupiterHalf}
                imgInside={jupiterInside}
                data={jupiter}
              />
            }
          />
          <Route
            path="/saturn"
            element={
              <Planet
                className="saturn"
                imgAll={saturnAll}
                imgHalf={saturnHalf}
                imgInside={saturnInside}
                data={saturn}
              />
            }
          />
          <Route
            path="/uranus"
            element={
              <Planet
                className="uranus"
                imgAll={uranusAll}
                imgHalf={uranusHalf}
                imgInside={uranusInside}
                data={uranus}
              />
            }
          />
          <Route
            path="/neptune"
            element={
              <Planet
                className="neptune"
                imgAll={neptuneAll}
                imgHalf={neptuneHalf}
                imgInside={neptuneInside}
                data={neptune}
              />
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
