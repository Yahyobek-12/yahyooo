import { Routes, Route } from 'react-router-dom'
import { Navbar, Home, About, Services } from './Constants'
import 'animate.css'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App