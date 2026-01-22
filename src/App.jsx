import './App.css'
import Homepage from './pages/Homepage'
import Collectionpage from './pages/Collectionpage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/collection' element={<Collectionpage />} />
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
