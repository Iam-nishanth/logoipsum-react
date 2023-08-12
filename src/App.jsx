
import './App.css'
import GlobalStyle from './style/GlobalStyle'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
function App() {


  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />

        </Routes>
      </Router>

    </>
  )
}

export default App
