import { useState } from 'react'
import Input from './Input'
import Link from './Link'

function Encryption() {
  const [page, setPage] = useState("input")
  const [text, setText] = useState("")

  return (
      <main className="flex flex-1 items-center justify-center">
        <div className="bg-slate-800 p-10 rounded shadow-xl w-[550px] h-[450px] flex flex-col justify-center">
          {page === "input" ? (
            <Input onSave={() => setPage("link")} setText={setText} />
          ) : (
            <Link generatedLink={text} />
          )}
        </div>
      </main>
  )
}

export default Encryption
