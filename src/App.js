import { Route, Routes } from 'react-router-dom'
//pages

import Home from './Pages/Home/Home'
import Mercury from './Pages/Mercury/Mercury'
import Venus from './Pages/Venus/Venus'
import Earth from './Pages/Earth/Earth'
import Mars from './Pages/Mars/Mars'
import Jupiter from './Pages/Jupiter/Jupiter'
import Saturn from './Pages/Saturn/Saturn'
import Uranus from './Pages/Uranus/Uranus'
import Neptune from './Pages/Neptune/Neptune'
//styles
import './styles/App.scss'
import './styles/Header.scss'
import Navbar from './Components/navbar/Navbar'


const App = () => {
  return (
    

    <div className="app">
      <div className="header">
        <h1>THE PLANETS</h1>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mercury" element={<Mercury />} />
        <Route path="/venus" element={<Venus />} />
        <Route path="/earth" element={<Earth />} />
        <Route path="/mars" element={<Mars />} />
        <Route path="/jupiter" element={<Jupiter />} />
        <Route path="/saturn" element={<Saturn />} />
        <Route path="/uranus" element={<Uranus />} />
        <Route path="/neptune" element={<Neptune />} />

      </Routes>
    </div>
    
  )
}

export default App
