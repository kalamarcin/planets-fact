import { Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav/HomeLink'
import Home from './Pages/Home/Home'
// import './styles/App.scss'

const App = () => {
  return (
    
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </div>
    
  )
}

export default App
