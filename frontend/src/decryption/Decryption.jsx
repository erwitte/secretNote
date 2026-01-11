import { useParams } from 'react-router-dom'
import { useState } from 'react'

function Decryption() {
  const { id } = useParams()
  const [show, setShow] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-200">
      <div className="bg-slate-800 p-10 rounded shadow-xl w-[550px] h-[450px] flex flex-col justify-center">
        {show === false ? (
          <>
            <h1 className="text-xl mb-4">ID: {id}</h1>
            <button onClick={() => setShow(true)}>
              Text anzeigen
            </button>
          </>
        ) : (
          <>
            <h1 className="text-xl mb-4">Editing {id}</h1>
            <button onClick={() => setShow(false)}>
              Back
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Decryption
