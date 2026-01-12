import { useParams } from 'react-router-dom'
import { useState } from 'react'
import ShowText from "./ShowText"
import Verify from './Verify'

function Decryption() {
  const { id } = useParams()
  const [show, setShow] = useState(false)
  const [response, setResponse] = useState(null)

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-200">
      <div className="bg-slate-800 p-10 rounded shadow-xl w-[550px] h-[450px] flex flex-col justify-center">
        {show === false ? (
          <>
            <Verify setShow={setShow} setResponse={setResponse} />
          </>
        ) : (
          <>
            <ShowText />
          </>
        )}
      </div>
    </div>
  )
}

export default Decryption
