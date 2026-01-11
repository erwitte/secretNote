import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Encryption from './encryption/Enryption'
import Decryption from './decryption/Decryption'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Encryption />} />
        <Route path="/:id" element={<Decryption />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App