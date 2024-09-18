import { Routes, Route } from 'react-router-dom'
import { Navbar, Home } from './Constants'
import 'animate.css'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App