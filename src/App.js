import { Routes, Route } from 'react-router-dom'
import { Navbar, Home } from './Constants'
import 'animate.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App