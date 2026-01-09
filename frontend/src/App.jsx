import { useState } from 'react'
import Input from './Input'
import Link from './Link'

function App() {
  const [page, setPage] = useState("input")

  return (
    <>
      <div className="min-h-screen
  flex
  items-center
  justify-center
  bg-slate-950
  text-slate-200">
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
