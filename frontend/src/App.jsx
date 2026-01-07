import { useState } from 'react'
import './App.css'
import Input from './Input'
import Link from './Link'

function App() {
  const [page, setPage] = useState("input")

  return (
    <>
      <div>
      {page === "input" ? (
        <Input onSave={setPage} />
      ) : (
        <Link />
      )}
      </div>
    </>
  )
}

export default App
