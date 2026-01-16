import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Encryption from './encryption/Enryption'
import Decryption from './decryption/Decryption'

function App() {
  return (
    <BrowserRouter>
      {/* ROOT LAYOUT */}
      <div className="min-h-screen flex flex-col bg-slate-950 text-slate-200">

        {/* Header */}
        <header className="h-16 flex items-center justify-center border-b border-slate-800">
          <div className="text-xl font-bold tracking-wide">
            <span className="text-indigo-400">secret</span>
            <span className="text-slate-200">Node</span>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex flex-1 items-center justify-center">
          <div className="bg-slate-800 p-10 rounded shadow-xl w-[550px] h-[450px] flex flex-col justify-center">
          <Routes>
            <Route path="/" element={<Encryption />} />
            <Route path="/:id" element={<Decryption />} />
          </Routes>
          </div>
        </main>

        {/* Footer */}
        <footer className="h-12 flex items-center justify-center text-sm text-slate-400 border-t border-slate-800">
          © {new Date().getFullYear()} secretNode — Encrypted, ephemeral, private.
        </footer>

      </div>
    </BrowserRouter>
  )
}

export default App
