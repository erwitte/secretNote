import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [page, setPage] = useState("input")

  return (
    <>
      <div>
        <input type="text"></input>
        <button onClick = {() => setPage("link")}>Speichern</button>
      </div>
    </>
  )
}

export default App
