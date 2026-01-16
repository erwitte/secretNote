import { useState } from 'react'
import Input from './Input'
import Link from './Link'

function Encryption() {
  const [page, setPage] = useState("input")
  const [text, setText] = useState("")

  return (
      <>
          {page === "input" ? (
            <Input onSave={() => setPage("link")} setText={setText} />
          ) : (
            <Link generatedLink={text} />
          )}
      </>
  )
}

export default Encryption
