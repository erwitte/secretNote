import { useParams } from 'react-router-dom'
import { useState } from 'react'
import ShowText from "./ShowText"
import Verify from './Verify'

function Decryption() {
  const [show, setShow] = useState(false)
  const [response, setResponse] = useState(null)

  return (
    <>
        {show === false ? (
            <Verify setShow={setShow} setResponse={setResponse} />
        ) : (
            <ShowText response={response} />
        )}
        </>
  )
}

export default Decryption
