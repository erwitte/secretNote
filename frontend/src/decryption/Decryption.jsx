import { useParams } from 'react-router-dom'
import { useState } from 'react'
import ShowText from "./ShowText"
import Verify from './Verify'

function Decryption() {
  const [show, setShow] = useState(false)
  const [response, setResponse] = useState(null)

  return (
    <main className="flex flex-1 items-center justify-center">
      <div className="bg-slate-800 p-10 rounded shadow-xl w-[550px] h-[450px] flex flex-col justify-center">
        {show === false ? (
          <>
            <Verify setShow={setShow} setResponse={setResponse} />
          </>
        ) : (
          <>
            <ShowText response={response} />
          </>
        )}
      </div>
    </main>
  )
}

export default Decryption
