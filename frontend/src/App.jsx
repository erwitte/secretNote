import { useState } from 'react'
import './App.css'
import Input from './input'

function App() {
  const [page, setPage] = useState("input")

  return (
    <>
      <div>
        <input type="text"></input>
        <button onClick = {() => setPage("link")}>Speichern</button>
        <Input />
      </div>
    </>
  )
}

export default App
