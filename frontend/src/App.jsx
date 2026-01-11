import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Encryption from './Enryption'
import Decryption from './Decryption'

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