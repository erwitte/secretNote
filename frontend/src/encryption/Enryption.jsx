import { useState } from 'react'
import Input from './Input'
import Link from './Link'

function Encryption() {
  const [page, setPage] = useState("input")
  const [text, setText] = useState("")

  return (
    <>
      <div className="min-h-screen
  flex
  items-center
  justify-center
  bg-slate-950
  text-slate-200">
    <div className="bg-slate-800 p-10 rounded shadow-xl w-[550px] h-[450px] flex flex-col justify-center">
      {page === "input" ? (
        <Input onSave={() => setPage("link")} setText={setText}/>
      ) : (
        <Link generatedLink={text}/>
      )}
      </div>
      </div>
    </>
  )
}

export default Encryption
